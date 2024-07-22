'use client';
import Activities from "@/components/activities";
import Card from "@/components/cards";
import Contacts from "@/components/contacts";
import { firstTimeline, projects, secondTimeline, timeLine } from "@/components/data";
import Festival from "@/components/festival";
import IntroBlock from "@/components/intro";
import ProgramBLock from "@/components/program";
import SectionRobots from "@/components/robotsSection";
import TestDrive from "@/components/testdrive";
import Timeline from "@/components/timeline";
import Unique from "@/components/unique";
import WelcomeToFest from "@/components/welcomeToFest";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  
  return (
    <main  className='main' style={{paddingTop: '100px'}}>
      <ToastContainer/>
      <IntroBlock/>
      <Unique/>
      <WelcomeToFest/>
      
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      <TestDrive/>
      <Festival/>
      <Activities/>
      <ProgramBLock/>
      <Timeline data={firstTimeline } />
      <SectionRobots/>
      <Timeline data={secondTimeline } />
      <Contacts/>
      {/* <Unique/>
      <WelcomeToFest/>
      
      <Festival/>
      <Activities/>
      <SectionRobots/>
      <Contacts/> */}
    </main>
  );
}