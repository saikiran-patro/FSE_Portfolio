import React from "react";
import DownloadBtn from "./DownloadBtn";
const Resume = () => {
  return (
    <div className="w-full relative ">
      <DownloadBtn />
      <div>
        <div className="flex items-center justify-start pt-10 gap-5">
          <div className="iconBox">
            <img src={require("../Assets/building.svg").default} />
          </div>{" "}
          <h1 className="text-[1.2rem] font-bold">Experience</h1>{" "}
        </div>
        {/* Exp 1 */}
        <div className="mt-8 relative ">
          <div className="flex gap-5 expContainer">
            <div className="iconBox h-fit">
              <img src={require("../Assets/tcs.svg").default} />
            </div>
            <div className="w-3/4">
              <h1 className="text-[1rem] font-bold">
                Tata Consultancy Services
              </h1>
              <div className="flex justify-between items-center">
                <p className="italic text-[#ec9162]">Software Developer</p>
                <p>June 2022 - Current</p>
              </div>
            </div>
          </div>
          <div className="relative  w-[95%]">
            <ul className="roleContainer ">
              <div className="relative">
                <li className="exPoint">
                  Designed highly scalable and robust{" "}
                  <span className="text-[#ec9162] font-bold">
                    Subscription Center
                  </span>{" "}
                  platform from scratch serving  <span className="text-[#ec9162] font-bold">1.8M</span> active users.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Designed and implemented high-quality UI and{" "}
                  <span className="text-[#ec9162] font-bold">
                    automated emails
                  </span>{" "}
                  for the campaigns.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Solved critical major bugs in the backend which improved the
                  overall maintenance and performance by{" "}
                  <span className="text-[#ec9162] font-bold">10%</span>.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Implemented a custom{" "}
                  <span className="text-[#ec9162] font-bold">
                    email authentication
                  </span>{" "}
                  for user login which is used by <span className="text-[#ec9162] font-bold">1M+</span> users and improved
                  the security level of the website.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Improved the app performance with{" "}
                  <span className="text-[#ec9162] font-bold">Memoization</span>{" "}
                  for caching and{" "}
                  <span className="text-[#ec9162] font-bold">Lazy Loading</span>{" "}
                  to improve initial load times.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Developed{" "}
                  <span className="text-[#ec9162] font-bold">
                    NoCode Email Development platform
                  </span>{" "}
                  leveraging Salesforce{" "}
                  <span className="text-[#ec9162] font-bold">Restful APIs</span>{" "}
                  which reduced the development time and effort.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Developed a{" "}
                  <span className="text-[#ec9162] font-bold">
                    Referral Offer Code
                  </span>{" "}
                  program from scratch, resulting in an{" "}
                  <span className="text-[#ec9162] font-bold">80% increase</span>{" "}
                  in sales.
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                  Implemented{" "}
                  <span className="text-[#ec9162] font-bold">
                    encryption standards
                  </span>{" "}
                  using Server Side JS to protect user PII, significantly
                  enhancing the application's security.
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-8 relative ">
          <div className="flex gap-5 expContainer expSecContainer">
            <div className="iconBox h-fit">
              <img src={require("../Assets/youtubeSe.svg").default} />
            </div>
            <div className="w-3/4">
              <h1 className="text-[1rem] font-bold">Youtube</h1>
              <div className="flex justify-between items-center">
                <p className="italic text-[#ec9162]">
                  Tech Content Creator{" "}
                  <span className="text-[12px] italic">(Part Time)</span>
                </p>
                <p>October 2018 - Current</p>
              </div>
            </div>
          </div>
          <div className="relative  w-[95%]">
            <ul className="roleContainer  ">
              <div className="relative">
                <li className="exPoint">
                  Created useful tech informative content on <span className="text-[#ec9162] font-bold">Space Tech</span>, <span className="text-[#ec9162] font-bold">Software Projects</span> and <span className="text-[#ec9162] font-bold">Electronics</span>.
                  
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                 Most Watched Video: 
                <span className="text-[#ec9162] font-bold">How to install python on Android?</span> 
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                 Most Helpful Project: 
                <span className="text-[#ec9162] font-bold">Fall Detection System</span> 
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                 My Best Video: 
                <span className="text-[#ec9162] font-bold">Starship Booster Catch Explained</span> 
                </li>
              </div>
              <div className="relative">
                <li className="exPoint">
                <span className="text-[#ec9162] font-bold">100k+</span> Views<span className="text-[#ec9162] font-bold"> 750+</span> Subscribers.
                </li>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
