
export default function() {
    return <>Pls be patient I have the dumb</>
}

// import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
// import Head from 'next/head'
// import React from 'react'
// import { useInterval } from '../helpers/useInterval'
// import { useDispatch } from 'react-redux'
// import { Fetch } from '../helpers/deta'
// import SocketIOClient from 'socket.io-client'

// const Game: NextPage = ({ items }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   const dispatch = useDispatch();
//   const MyRef = React.useRef(null);
//   const [rotate, setRotate] = React.useState<number>(0);
//   const [ghostX, setGhostX] = React.useState<number>(500);
//   const [ghostY, setGhostY] = React.useState<number>(500);
//   const [CX, setCX] = React.useState<number>(0);
//   const [CY, setCY] = React.useState<number>(0);
//   const [cakeX, setCakeX] = React.useState<number>(0);
//   const [cakeY, setCakeY] = React.useState<number>(0);
//   const [counter, setCounter] = React.useState<number>(0);
//   const [speed, setSpeed] = React.useState<number>(0.5);
//   const [connected, setConnected] = React.useState<boolean>(false);
//   React.useEffect(() => {
//     const canv: any = MyRef.current;
//     const ctx = canv.getContext("2d");
//     ctx.clearRect(0, 0, canv.width, canv.height);
//     ctx.font = "30px Arial";
//     ctx.fillText("Points: " + String(counter), 0, 25);
//   }, [counter]);
//   React.useEffect((): any => {
//     const socket = (SocketIOClient as any).connect(process.env.BASE_URL, {
//         path: "/api/socketio",
//     });
//     socket.on("connect", () => {
//         console.log("SOCKET CONNECTED!", socket.id);
//         setConnected(true);
//     });
//     window.addEventListener("mousemove", (e) => {setCX(e.clientX); setCY(e.clientY);});
//     if (localStorage.getItem('banned') === '1') {
//       alert("You are banned from the game");
//       window.location.href = "/";
//       return socket ? () => socket.disconnect() : null;
//     }
//     console.log("LEADERBOARD: ", items);
//     confirm("Game: You must click the cakes to gain points, and avoid your mouse being touched by the ghost!");
//     if (socket) return () => socket.disconnect();
//   }, []);
//   React.useEffect((): void => {
//     console.log(dispatch({type: "INCREMENT", payload: {value: 1}}));
//   }, [dispatch]);
//   useInterval(function() {
//     setRotate((_ => {
//       return Math.round(((((Math.atan2(ghostY - CY, ghostX - CX) + 180)  * 180 / Math.PI) - 60) % 360) * 100) / 100;
//     })());
//     const a: number = CX - ghostX - 50, b: number = CY-ghostY - 40, c: number = Math.sqrt(a**2 + b**2);
//     const ratio: number = speed/c, a1: number = a*ratio, b1 : number = b*ratio;
//     setGhostX((ghostX: number) => {
//       return ghostX + a1;
//     });
//     setGhostY((ghostY: number) => {
//       return ghostY + b1;
//     })
//     if (counter < 10) {
//       setSpeed(0.5);
//     } else if (counter < 20) {
//       setSpeed(0.75);
//     } else if (counter < 30) {
//       setSpeed(1);
//     } else if (counter < 50) {
//       setSpeed(1.5);
//     } else if (counter < 100) {
//       setSpeed(2);
//     } else {
//       setSpeed(Math.floor((counter / 50) * 100) / 100);
//     }
//     if (Math.round(CX - ghostX - 50) === 0 && Math.round(CY-ghostY - 40) === 0) {
//       setCX(0);
//       setCY(0);
//       setCakeX(0);
//       setCakeY(0);
//       setGhostX(500);
//       setGhostY(500);
//       handleMouseOver();
//     }
//   }, 0.01);
//   function handleMouseOver() {
//     console.log(items);
//     if (counter >= items[items.length-1].points) {
//       // fetch("/api/views", {
//       //   method: "POST",
//       //   headers: {
//       //     Accept: '*',
//       //     "Content-Type": "application/json"
//       //   },
//       //   body: JSON.stringify({
//       //     name: prompt("Give name! You're on the leaderboard") || "user",
//       //     points: counter
//       //   })
//       // }).then((res) => res.json()).then((res) => console.log(res))
//     }
//     setCounter(0);
//     alert("Game Over!");
//   }
//   function cakeRandom() {
//     setCakeX(Math.floor(Math.random() * (window.innerWidth-100)));
//     setCakeY(Math.floor(Math.random() * (window.innerHeight-100)));
//   }
//   function handleCakeClick(e: any): void {
//     if (!e.isTrusted) {
//       alert("Cheater alert! You are banned");
//       localStorage.setItem('banned', '1');
//       window.location.href = "/";
//       return;
//     }
//     cakeRandom();
//     setCounter(counter => {
//       return counter + 1;
//     });
//   }
//   return (
//     <div>
//       <Head>
//         <title>FREE VERSION</title>
//         <meta name="description" content="Ghost and Cakes - a game made with $13 billion budget" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <canvas ref={MyRef} style={{ pointerEvents: "none" }} />
//       <img className="no-drag" onClick={handleCakeClick} src="/cake-a.svg" alt="" style={{position: "fixed", top: `${cakeY}px`, left: `${cakeX}px`}} />
//       <img alt="" onMouseOver={handleMouseOver} src="/ghost.png" width={100} height={100} style={{position: "fixed", top: `${ghostY}px`, left: `${ghostX}px`, transform: `rotate(${rotate}deg)`}} />
//     </div>
//   )
// }

// export default Game

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       items: (await Fetch()).sort((a, b) => -(a as any).points + (b as any).points)
//     }
//   }
// }