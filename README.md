This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
```
Database: Deta Base SDK ( migrating to PlanetScale MySQL ), Deta Drive File Storage
Static Site Host: Vercel
API Host: Vercel Serverless Functions ( AWS Lambda )
WS Host: Railway
WS Server Framework: Express.js ( switching to either net/http & Gorilla or Actix-web & actors )
Budget: $0, not looking for funding
Auth: Firebase Google Authentication + NextAuth
```
## Making contributions / debug

First, clone repo and install all dependencies.
`git clone <repo_url>.git <name>`
then
`npm install`

If you would like to use yarn, remove `package-lock.json` and use commandline `yarn`

Second, make .env.local file in root directory.

**NOTE: This might be outdated**
```
NEXT_PUBLIC_PROJECT_KEY=
app_id=
NEXT_PUBLIC_APP_KEY=
secret=
NEXT_PUBLIC_CLUSTER=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
NEXT_PUBLIC_DATABASEURL=
NEXT_PUBLIC_WEBSOCKET_SECRET=
```

Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/{ROUTE}](http://localhost:3000/api/ROUTE). This endpoint can be edited in `pages/api/file.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Pull Requests & Issues

No comments
