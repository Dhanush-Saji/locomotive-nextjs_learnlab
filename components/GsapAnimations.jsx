'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react'

const GsapAnimations = () => {
  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
let firstElem = ScrollTrigger.create({
    trigger: '.section1',
    start: "top+=100 top-=150",
    scrub: 15,
    pin:true,
    pinSpacing:false,
  });
let secondElem = ScrollTrigger.create({
    trigger: '.section2',
    start: "top top-=250",
    scrub: 15,
    pin:true,
    pinSpacing:false,
  });
  return()=>{
    if(secondElem) secondElem.kill()
    if(firstElem) firstElem.kill()
  }
}, [])
  return (
    <></>
  )
}

export default GsapAnimations