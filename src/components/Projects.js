import React,{useEffect, useRef, useState, useContext} from 'react'
import { navBarContext } from "./RightContainer";

const Projects = () => {

   const [projects,setProjects] =useState([])
   const [type,setType]=useState("All")
   const listOfTypes=["All","Gen AI","Web","IoT","Android"]
   const typeNavigation=useRef(null)
   const projectsContainer=useRef(null)
   const {navBarElement}=useContext(navBarContext)
   const typeSvg={
    "All":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1491 595l90 90l-749 749l-365-365l90-90l275 275zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32"/></svg>,
    "AllSel":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="#ff623e" d="m1491 595l90 90l-749 749l-365-365l90-90l275 275zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32"/></svg>,  
    "Android":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M7.016 1.646a.5.5 0 0 1 .708 0l1.105 1.106A5.6 5.6 0 0 1 11.647 2h.706a5.6 5.6 0 0 1 2.82.753l1.107-1.107a.5.5 0 1 1 .707.708l-.984.984A5.64 5.64 0 0 1 18 7.648a.353.353 0 0 1-.353.352H6.353A.353.353 0 0 1 6 7.647c0-1.728.776-3.275 2-4.31l-.984-.983a.5.5 0 0 1 0-.708M10.5 5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.724.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="#ffffff" d="M4 8.947a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm12.21 1a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0zM7.793 21a.293.293 0 0 0-.293.294v.206a1.75 1.75 0 1 0 3.5 0v-.206a.293.293 0 0 0-.293-.294zm5.207.294c0-.163.131-.294.293-.294h2.913c.163 0 .294.131.294.294v.206a1.75 1.75 0 1 1-3.5 0z"/></svg>,
    "AndroidSel":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff623e" fill-rule="evenodd" d="M7.016 1.646a.5.5 0 0 1 .708 0l1.105 1.106A5.6 5.6 0 0 1 11.647 2h.706a5.6 5.6 0 0 1 2.82.753l1.107-1.107a.5.5 0 1 1 .707.708l-.984.984A5.64 5.64 0 0 1 18 7.648a.353.353 0 0 1-.353.352H6.353A.353.353 0 0 1 6 7.647c0-1.728.776-3.275 2-4.31l-.984-.983a.5.5 0 0 1 0-.708M10.5 5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.724.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="#ff623e" d="M4 8.947a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm12.21 1a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0zM7.793 21a.293.293 0 0 0-.293.294v.206a1.75 1.75 0 1 0 3.5 0v-.206a.293.293 0 0 0-.293-.294zm5.207.294c0-.163.131-.294.293-.294h2.913c.163 0 .294.131.294.294v.206a1.75 1.75 0 1 1-3.5 0z"/></svg>,
    "Web":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg>,
    "WebSel":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#ff623e" d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8H5v6h14zm0-6H5v4h14zM7 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg>,
    "Gen AI":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M24 12.024c-6.437.388-11.59 5.539-11.977 11.976h-.047C11.588 17.563 6.436 12.412 0 12.024v-.047C6.437 11.588 11.588 6.437 11.976 0h.047c.388 6.437 5.54 11.588 11.977 11.977z"/></svg>,
    "Gen AISel":<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff623e" d="M24 12.024c-6.437.388-11.59 5.539-11.977 11.976h-.047C11.588 17.563 6.436 12.412 0 12.024v-.047C6.437 11.588 11.588 6.437 11.976 0h.047c.388 6.437 5.54 11.588 11.977 11.977z"/></svg>,
    "IoT":<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M30 19h-4v-4h-2v9H8V8h9V6h-4V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2.003 2.003 0 0 0 2-2v-3h4Z"/><path fill="#fff" d="M21 21H11V11h10zm-8-2h6v-6h-6zm18-6h-2A10.01 10.01 0 0 0 19 3V1a12.013 12.013 0 0 1 12 12"/><path fill="#fff" d="M26 13h-2a5.006 5.006 0 0 0-5-5V6a7.01 7.01 0 0 1 7 7"/></svg>,
    "IoTSel":<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ff623e" d="M30 19h-4v-4h-2v9H8V8h9V6h-4V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2.003 2.003 0 0 0 2-2v-3h4Z"/><path fill="#ff623e" d="M21 21H11V11h10zm-8-2h6v-6h-6zm18-6h-2A10.01 10.01 0 0 0 19 3V1a12.013 12.013 0 0 1 12 12"/><path fill="#ff623e" d="M26 13h-2a5.006 5.006 0 0 0-5-5V6a7.01 7.01 0 0 1 7 7"/></svg>
   }
  useEffect(()=>{
    
     async function getProjects() {

       try {
         const response = await fetch('./projects.json');
         const projectsJson = await response.json()
         
         
      
      setProjects(projectsJson.projects)            
       } catch (error) {
         console.error('Error:', error);
       }
     }
     getProjects();
     if(navBarElement.current && typeNavigation.current && projectsContainer.current){


      projectsContainer.current.style.height = `calc(100% - (${navBarElement.current.getBoundingClientRect().height}px + ${typeNavigation.current.getBoundingClientRect().height}px)`;
      projectsContainer.current.style.overflow = 'scroll';
      projectsContainer.current.style.overflowX = 'hidden';
     }

  }, [typeNavigation.current?.getBoundingClientRect().height, projectsContainer.current?.getBoundingClientRect().width])

  return (
    <>
    

    <div ref={typeNavigation} className='flex justify-start items-center gap-[5px] min-mob:grid min-mob:grid-cols-3'>

      {
        listOfTypes.map((typeBtn, index) => (
          <button className={typeBtn===type?'typeBtn':'flex justify-center items-center py-[5px] px-[10px]'} key={index} onClick={() => setType(typeBtn)}>
            {typeBtn===type? typeSvg[typeBtn+"Sel"]: typeSvg[typeBtn]}&nbsp;{typeBtn}
          </button>
        ))
      }
    </div>
    <div ref={projectsContainer} className='flex justify-start flex-wrap  flex-row gap-3 items-start mt-3 max-mob:justify-center'>
  {projects.map((project, index) => {
    if (project.category === type || type === 'All') {
      return (
        <div
          className='projectContainer w-[250px] flex flex-col justify-center items-center p-2 box-border border border-[#b0adaa4d] rounded-[10px] h-[220px]'
          key={index}
        >
          <img className='rounded-[10px]' src={project.bannerImage} alt={`${project.name} Banner`} />
          <div className='flex mx-2 flex-row w-full p-2 justify-between items-center'>
            <p>{project.name}</p>
            <span className='flex justify-center items-center gap-2'>
              <a
                className='bg-[#ff623e] rounded-[20%] p-1'
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </a>
              {project.youtube && (
                <a
                  className='bg-[#ff623e] rounded-[20%] p-1'
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      />
                      <path
                        fill="#fff"
                        d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                      />
                    </g>
                  </svg>
                </a>
              )}
            </span>
          </div>
        </div>
      );
    }
    return null;
  })}
</div>

    
    </>
    
  )
}

export default Projects