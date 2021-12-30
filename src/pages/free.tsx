import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useInterval } from '../helpers/useInterval'

const Home: NextPage = () => {
  const [rotate, setRotate] = React.useState<number>(0);
  const [ghostX, setGhostX] = React.useState<number>(0);
  const [ghostY, setGhostY] = React.useState<number>(0);
  const [CX, setCX] = React.useState<number>(0);
  const [CY, setCY] = React.useState<number>(0);
  const [cakeX, setCakeX] = React.useState<number>(0);
  const [cakeY, setCakeY] = React.useState<number>(0);
  const [counter, setCounter] = React.useState<number>(0);
  React.useEffect((): void => {
    window.addEventListener("mousemove", (e) => {setCX(e.clientX); setCY(e.clientY);});
  }, []);
  useInterval(function() {
    setGhostY(ghostY => {
      return Math.round((ghostY + 1 * Math.sin(rotate)) * 100) / 100;
    });
    setGhostX(ghostX => {
      return Math.round((ghostX + 1 * Math.cos(rotate)) * 100) / 100;
    });
    setRotate((_ => {
      console.log(CX, CY, ghostX, ghostY, rotate);
      return Math.round(((((Math.atan2(ghostY - CY, ghostX - CX) + 180)  * 180 / Math.PI) - 60) % 360) * 100) / 100;
    })());
  }, 0.01);
  function handleMouseOver(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    alert("Game Over!");
    setCounter(0);
  }
  function cakeRandom() {
    setCakeX(Math.floor(Math.random() * (window.innerWidth-100)));
    setCakeY(Math.floor(Math.random() * (window.innerHeight-100)));
  }
  function handleCakeClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    cakeRandom();
    setCounter(counter => {
      return counter + 1;
    });
  }
  return (
    <div>
      <Head>
        <title>FREE VERSION</title>
        <meta name="description" content="Ghost and Cakes - made by billion net worth game company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{counter}</p>
      <img onClick={handleCakeClick} src="/cake-a.svg" alt="" style={{position: "fixed", top: `${cakeY}px`, left: `${cakeX}px`}} />
      <img onMouseOver={handleMouseOver} src="/ghost.png" width={100} height={100} style={{position: "fixed", top: `${ghostY}px`, left: `${ghostX}px`, transform: `rotate(${rotate}deg)`}} />
    </div>
  )
}

export default Home
