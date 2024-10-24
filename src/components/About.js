import React from 'react'
import { IconSkills } from './IconSkills';
const About = () => {

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "React Native",
    "Redux",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Flask",
    "Git",
    "C++",
    "Python",
    "DSA"
  ];
  
  return (
    <div>
       <div className="flex justify-center items-center mt-4"> 
          <div className="w-[90%]">
             <p>I am a passionate Frontend Developer with extensive experience in building high-quality, large-scale, full-stack applications using JavaScript, Node.js, React JS, Python, and MongoDB. I thrive on creating highly available, performant systems that deliver seamless user experiences.</p>
             <p>
                <br/>
             As a technophile and content creator, I love exploring cutting-edge technologies. I am deeply fascinated by space and rocket science, taking inspiration from Elon Musk's vision for space exploration. My interest spans from building innovative applications to diving into the future of space technology. And yes, I’m also a huge Marvel fan! 😄
             </p>
          </div>
          <div>
              <img src={require('../Assets/Me.png')} />
          </div>
       </div>
       <div>
          <h1 className='text-[2rem] font-bold mt-5'>What I Specialize In</h1>
          <div className='mt-[30px] flex items-center justify-center'>
            <div className='w-[50%]'>
                <div className='specialCards'>
                    <img src={require('../Assets/Code.svg').default} /> Frontend Development
                </div>
                <div className='specialCards'>
                    <img src={require('../Assets/systems.svg').default} />  Systems Design
                </div>
                <div className='specialCards'>
                    <img src={require('../Assets/Youtuebe.svg').default} />  Content Creation
                </div>
                <p className='my-2 text-[1.2rem] text-[#708090]'>SKILLS</p>
                <div className='flex w-full flex-wrap gap-2.5'>
                  {
                    skills.map((skill)=>(
                      <span className='bg-[#4f4c4c] px-2 py-1 rounded-md font-bold text-[#ec9162]'>{skill}</span>
                    ))
                  }
                </div>
            </div>
            <div className='w-1/2'>
                <IconSkills />
            </div>
            
          </div>
       </div>
      

    </div>
  )
}

export default About