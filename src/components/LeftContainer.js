import React from "react";

import WordRotate from "./ui/word-rotate";
const LeftContainer = () => {
  return (
    <div className="w-[30%]">
      <div className="flex items-center flex-col gap-[20px]">
      
        <div className=" profilePicContainer flex items-center justify-center">
          <img className="w-[50%]" src={require("../Assets/ProfilePic.png")} />{" "}
        </div>
        <h2 className="text-2xl"> Sai Kiran Patro </h2>{" "}
        <div className="bg-[#2b2b2c] px-[20px] py-[5px] rounded-lg w-[170px] text-center">
          <WordRotate
            className="text-[14px] font-bold text-white "
            words={["Web Developer", "Software Engineer", "Content Creator"]}
          />
        </div>
      </div>
      <div className="infoContainer mt-5 pt-5">
        <ul>
          <li className="flex w-full items-center gap-5 ">
          
            <div className="iconBox">
             
              <img className="w-[20px]" src={require("../Assets/Email.svg").default} />
            </div>
            <div>
       
              <p className="contactTitle"> EMAIL </p><a className="contactLink" href="mailto:saikiranpatro198@gmail.com">saikiranpatro198@gmail.com</a> 
            </div>
          </li>
          <li className="flex w-full items-center gap-5 ">
          
          <div className="iconBox">
           
            <img className="w-[20px]" src={require("../Assets/Phone.svg").default} />
          </div>
          <div>
     
            <p className="contactTitle"> PHONE </p><a className="contactLink" href="tel:+919182863688">+91 9182863688</a> 
          </div>
        </li>
        <li className="flex w-full items-center gap-5 ">
          
          <div className="iconBox">
           
            <img className="w-[20px]" src={require("../Assets/Calendar.svg").default} />
          </div>
          <div>
     
            <p className="contactTitle"> BIRTHDAY </p><span className="contactLink" >March 11, 2001</span> 
          </div>
        </li>
        <li className="flex w-full items-center gap-5 ">
          
          <div className="iconBox">
           
            <img className="w-[20px]" src={require("../Assets/Location.svg").default} />
          </div>
          <div>
     
            <p className="contactTitle"> LOCATION </p><span className="contactLink" >Hyderabad, Telangana, India</span> 
          </div>
        </li>
        </ul>
      </div>
      <div className="mt-5 codeProfiles pt-8">
        <p className="text-center text-gray-400 ">CODE PROFILES</p>
        <div className="flex justify-center items-center gap-5 mt-5">
            <a  className="profileLinks" href="https://github.com/saikiran-patro" title="Github" target="_blank"  ><img src={require("../Assets/codeProfiles/github.svg").default} /></a>
            <a  className="profileLinks"href="https://www.naukri.com/code360/profile/0d5dd7cd-cdd7-4f1d-b84a-0c1322353376" title="Code Studio" target="_blank" ><img src={require("../Assets/codeProfiles/codestudio.svg").default} /></a>
            <a  className="profileLinks"href="https://www.hackerrank.com/profile/saikiranpatro607" title="Hackerrank" target="_blank"  ><img src={require("../Assets/codeProfiles/hackrank.svg").default} /></a>
            <a  className="profileLinks"href="https://www.geeksforgeeks.org/user/kiranpatro2018ece/" title="GFG" target="_blank"  ><img src={require("../Assets/codeProfiles/gfg.svg").default} /></a>
            <a  className="profileLinks" href="https://leetcode.com/u/saikiranpatro198/" title="Leetcode" target="_blank" ><img src={require("../Assets/codeProfiles/leetcode.svg").default} /></a>
            
        </div>
      </div>
      <div className="mt-5 codeProfiles pt-8">
        <p className="text-center text-gray-400 ">SOCIAL PROFILES</p>
        <div className="flex justify-center items-center gap-5 mt-5">
            <a  className="profileLinks" href="https://www.youtube.com/saikiranpatro" title="youtube" target="_blank"  ><img src={require("../Assets/Youtuebe.svg").default} /></a>
            <a  className="profileLinks"href="https://www.linkedin.com/in/sai-kiran-patro/" title="LinkedIn" target="_blank" ><img src={require("../Assets/linkedIn.svg").default} /></a>
            <a  className="profileLinks"href="https://www.instagram.com/saikiranpatro/" title="Instagram" target="_blank"  ><img src={require("../Assets/instagram.svg").default} /></a>
            <a  className="profileLinks"href="https://x.com/SaiKiranpatro9?t=Ap-XHnSc09wOnk4f21Sztg&s=08" title="Twitter" target="_blank"  ><img src={require("../Assets/twitter.svg").default} /></a>
            <a  className="profileLinks"href="https://www.threads.net/@saikiranpatro" title="Threads" target="_blank"  ><img src={require("../Assets/threads.svg").default} /></a>
            
            
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default LeftContainer;
