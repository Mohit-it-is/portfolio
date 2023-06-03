import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Typescript", "React.js","Next.js","Node.js", "Nginx"],
    ["Webpack", "Docker","D3.js", "Git", "React-Flow"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
              Hi, I am a passionate <span  className="text-AAsecondary">Computer Science and Engineering Post Graduate</span> with a strong inclination towards building innovative solutions from scratch.
              I have extensive experience in developing end-to-end web applications using modern technologies such as TypeScript, Webpack, Node.js, Nginx, D3.js, Firebase, Angular, and DevOps.{" "}
               
              </span>
            </div>

            <div className="font-Header tracking-wide">
            <span  className="text-gray-400  ">I am always eager to learn and stay updated with the latest <span className="text-AAsecondary">technologies and industry trends</span>. </span>
              <span  className="text-gray-400  ">I have a strong commitment to delivering high-quality solutions that meet user requirements and exceed expectations.</span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">Here are a few technologies I&apos;ve been working with recently:</span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
