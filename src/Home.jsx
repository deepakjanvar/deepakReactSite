import React from 'react'
import { NavLink } from 'react-router-dom';
import home from "./img/home.svg"
import Common from './Common';


function Home() {
  return (
    <>
      <Common name="Grow your business with" imgsrc={home} visit="/service" btname="Get Started" />
    </>
  );
}

export default Home;
