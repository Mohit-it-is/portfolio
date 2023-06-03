import Header from "../components/Header/Header";
import ViewPort from "../components/Home/ViewPort/ViewPort";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import AppContext from "../components/AppContextFolder/AppContext";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
    }
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 5000);
  }, [context, context.sharedState]);



  const meta = {
    title: "Mohit - Software Engineer",
    description: `I've been working on Software development for 3 years straight. Get in touch with me to know more.`,
    type: "website",
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  
 
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <ViewPort finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
        {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
      </div>
    </>
  );
}
