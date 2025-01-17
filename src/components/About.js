import React,{ useRef, useEffect,useContext}  from 'react'
import { IconSkills } from './IconSkills';
import { navBarContext } from "./RightContainer";
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
  const aboutContainer=useRef(null);
  
     const {navBarElement}=useContext(navBarContext)
  
     useEffect(()=>{
      if (navBarElement?.current && aboutContainer?.current) {
        const navbarHeight = navBarElement.current.getBoundingClientRect().height;
     
  
        // Corrected this line to use aboutContainer.current.style.height
        aboutContainer.current.style.height = `calc(100% - ${navbarHeight}px)`;
        aboutContainer.current.style.overflow = 'scroll';
        aboutContainer.current.style.overflowX = 'hidden';
        
      
      }
      
     },[])
  
  
  return (
    <div ref={aboutContainer}  className='animateContainer'>
       <div className="flex justify-center items-center mt-4 max-mob:flex-wrap"> 
          <div className="w-[90%]">
             <p>I am a passionate Frontend Developer with extensive experience in building high-quality, large-scale, full-stack applications using JavaScript, Node.js, React JS, Python, and MongoDB. I thrive on creating highly available, performant systems that deliver seamless user experiences.</p>
             <p>
                <br/>
             As a technophile and content creator, I love exploring cutting-edge technologies. I am deeply fascinated by space and rocket science, taking inspiration from Elon Musk's vision for space exploration. My interest spans from building innovative applications to diving into the future of space technology. And yes, I’m also a huge Marvel fan! 😄
             </p>
          </div>
          <div className='max-mob:w-[60%] max-mob:mt-2'>
              <img className='rounded-lg ' alt="Me in Space" src={require('../Assets/Me.png')} />
          </div>
       </div>
       <div>
          <h1 className='text-[2rem] font-bold mt-5 max-mob:text-[1.5rem] max-mob:ml-[20px]'>What I Specialize In</h1>
          <div className='mt-[30px] flex items-center justify-center max-mob:flex-wrap'>
            <div className='w-[50%] max-mob:w-[90%]'>
                <div className='specialCards'>
                    <img alt='code' src={require('../Assets/Code.svg').default} /> <span className='min-mob:text-[12px]'> Frontend Development</span>
                </div>
                <div className='specialCards'>
                    <img alt="systems" src={require('../Assets/systems.svg').default} /><span className='min-mob:text-[12px]'> Systems Design</span>
                </div>
                <div className='specialCards'>
                    <img alt="youtube" src={require('../Assets/Youtuebe.svg').default} /><span className='min-mob:text-[12px]'> Content Creation</span>
                </div>
                <p className='my-2 text-[1.2rem] text-[#708090]'>SKILLS</p>
                <div className='flex w-full flex-wrap gap-2.5'>
                  {
                    skills.map((skill)=>(
                      <span className='bg-[#4f4c4c] px-2 py-1 rounded-md font-bold text-[#ec9162] min-mob:text-[12px] '>{skill}</span>
                    ))
                  }
                </div>
            </div>
            <div className='w-1/2 max-mob:hidden'>
                <IconSkills />
            </div>
            
          </div>
       </div>
      

    </div>
  )
}

export default About