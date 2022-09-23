import React from 'react'
import { NavLink } from 'react-router-dom';
import about from "./img/about.png"
import Common from './Common';


function About() {
  return (
    <>
     <Common name="Welcome to About Page" imgsrc={about} visit="/contact" btname="Contact Us"/>
    </>
  );
}

export default About;
