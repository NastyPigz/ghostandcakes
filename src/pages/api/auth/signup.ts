import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method !== "POST") {
       res.status(405).json({message:"Method not allowed"});
       return;
   }
   if (req.body.username && req.body.password && req.body.email) {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            },
            select: {
                username: true,
                password: true,
                id: true,
                avatarUrl: true,
                createdAt: true
            }
        });
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password) && user.username === req.body.username) {
                const accessToken = jwt.sign({
                    username: req.body.username,
                    email: req.body.email,
                    id: user.id,
                    avatarUrl: user.avatarUrl,
                    createdAt: user.createdAt,
                    iat: Math.floor(Date.now() / 1000)
                }, process.env.SECRET_JWT as string, {
                    expiresIn: 24 * 60 * 1 // 1 is minute, one day
                });
                res.status(200).json({
                    accessToken
                });
            } else {
                res.status(406).json({
                    message: "Username or password does not match."
                })
            }
        } else {
            const usr = await prisma.user.create({
                data: {
                    username: req.body.username,
                    email: req.body.email,
                    password: await bcrypt.hash(req.body.password, 10),
                }
            });
            const accessToken = jwt.sign({
                username: req.body.username,
                email: req.body.email,
                id: usr.id,
                avatarUrl: usr.avatarUrl,
                createdAt: usr.createdAt,
                iat: Math.floor(Date.now() / 1000)
            }, process.env.SECRET_JWT as string, {
                expiresIn: 24 * 60 * 1 // 1 is minute, one day
            });
            res.status(200).json({
                accessToken
            });
        }
   } else {
        res.status(400).json({
            message: "Bad Request, body is not complete."
        });
   }
}