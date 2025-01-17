import React, { useState, useEffect, useContext, useRef } from 'react';
import youtubeList from '../constants/ytLists';
import { navBarContext } from './RightContainer';

const YoutubeVideos = ({ ytBannerRef }) => {
  const [ytCategory, setYtCategory] = useState('Best Watch');
  const { navBarElement } = useContext(navBarContext);
  const ytVideosRef = useRef(null);
  const ytNavbarRef = useRef(null);
  const ytVideosListRef = useRef(null);

  useEffect(() => {
    if (
      navBarElement?.current &&
      ytBannerRef?.current &&
      ytVideosRef?.current &&
      ytNavbarRef?.current
    ) {
      
      const ytBannerHeight = ytBannerRef.current.getBoundingClientRect().height;
      const ytNavbarHeight = ytNavbarRef.current.getBoundingClientRect().height;

      ytVideosRef.current.style.height = `calc(100% - ${ytBannerHeight}px)`;
      ytVideosListRef.current.style.height = `calc(${ytVideosRef.current.getBoundingClientRect().height}px - ${ytNavbarHeight}px - 55px)`;
      ytVideosListRef.current.style.overflow = 'scroll';
      ytVideosListRef.current.style.overflowX = 'hidden';
    }
  }, [navBarElement, ytBannerRef, ytVideosRef, ytNavbarRef]);

  return (
    <div ref={ytVideosRef} className="ytVideosContainer ">
      <div ref={ytNavbarRef} className="flex justify-center my-[15px] mx-auto p-[10px] gap-8">
        {Object.keys(youtubeList).map((type) => (
          <span
            key={type}
            onClick={() => setYtCategory(type)}
            className={type === ytCategory
              ? 'cursor-pointer transition-colors duration-500 text-[#ff623e]'
              : 'cursor-pointer text-white'}
          >
            {type}
          </span>
        ))}
      </div>
      <div ref={ytVideosListRef} className="flex flex-wrap flex-row gap-5 w-[100%] justify-center items-center">
        {youtubeList[ytCategory].map((video) => (
          <div
            key={video.id}
            className="w-[40%] border border-gray-700 p-[10px] rounded-lg cursor-pointer relative group min-mob:w-[90%]"
          >
            <div className="relative">
              <img
                src={video.bannerImagePath}
                alt={video.title}
                className="w-[90%] rounded-lg my-[10px] mx-auto group-hover:opacity-50 transition-opacity duration-300"
              />
              <a
                href={video.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-300"
              >
                Watch
              </a>
            </div>
            <h3 className="text-[16px] text-white text-center mt-2">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
