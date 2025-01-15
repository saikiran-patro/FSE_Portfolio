import React,{useState,useEffect, useContext, useRef} from 'react'
import youtubeList  from '../constants/ytLists'
import { navBarContext } from "./RightContainer";
const YoutubeVideos = ({ytBannerRef}) => {

    const [ytCategory, setYtCategory] = useState('Best Watch')
    const {navBarElement}=useContext(navBarContext)
    const ytVideosRef = useRef(null)
    const ytNavbarRef = useRef(null)
    const ytVideosListRef=useRef(null)
    useEffect(() => {
        if (
          navBarElement?.current &&
          ytBannerRef?.current &&
          ytVideosRef?.current &&
          ytNavbarRef?.current
        ) {
          const navbarHeight = navBarElement.current.getBoundingClientRect().height;
          const ytBannerHeight = ytBannerRef.current.getBoundingClientRect().height;
          const ytNavbarHeight = ytNavbarRef.current.getBoundingClientRect().height;
      
          // Corrected calc() syntax
          ytVideosRef.current.style.height = `calc(100% - ${ytBannerHeight}px)`;
          ytVideosListRef.current.style.height = `calc(${ytVideosRef.current.getBoundingClientRect().height}px - ${ytNavbarHeight}px - 55px)`
          ytVideosListRef.current.style.overflow='scroll';
          ytVideosListRef.current.style.overflowX = 'hidden';
        }
      }, [navBarElement, ytBannerRef, ytVideosRef, ytNavbarRef]);
  return (
    <div ref={ytVideosRef} className='ytVideosContainer'>
          
    <div ref={ytNavbarRef} className='flex justify-center my-[15px] mx-auto p-[10px] gap-8'>
     {
   
      Object.keys(youtubeList).map((type) => {

        return (
          <span onClick={()=> setYtCategory(type) } className={type===ytCategory?'cursor-pointer transition-colors duration-500 text-[#ff623e]': 'cursor-pointer text-white' }>{type}</span>
        )
      })
    }
    </div>
    <div ref={ytVideosListRef} className='flex flex-wrap flex-row gap-5 w-[100%] justify-center items-center'>

        {
            youtubeList[ytCategory].map((video) => (
              <div className='w-[40%] border border-gray-700 p-[10px] rounded-lg cursor-pointer'>
                <img src={video.bannerImagePath} alt={video.title} className='w-[90%] rounded-lg my-[10px] mx-auto' />
                <h3 className='text-[16px] text-white text-center'>{video.title}</h3>
               
              </div>
            ))
        }
    </div>
</div>
  )
}

export default YoutubeVideos