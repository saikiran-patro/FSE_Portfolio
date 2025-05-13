import React, { useRef } from 'react'
import FlickeringGrid from './ui/FlickeringGrid'

import { TextAnimate  } from './ui/TextAnimate'
import NumberTicker from './ui/NumberTicker'
import YoutubeVideos from './YoutubeVideos'
const Youtube = () => {

  const ytBannerRef=useRef(null)
  return (
    <div className='overflow-hidden h-[calc(100%-64px)] '>
      <div ref={ytBannerRef} className="bannerContainer relative h-[250px] rounded-lg w-full bg-background overflow-hidden ">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
      <div className='flex flex-row gap-4 w-4/5 absolute bottom-5 justify-center min-mob:justify-start min-mob:ml-[10px]'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ec9162" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="22" x="4" y="1" rx="3"/><path d="M10 19h4"/></g></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ec9162" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h5M12 21h-5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21v-4"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"/></path><path fill="#ec9162" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-9v-12h18v12Z"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"/></path></g></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ec9162" d="m18.003 13.068l2.26-2.261A9 9 0 0 0 22.9 4.443V1.1h-3.343a9 9 0 0 0-6.364 2.636l-2.261 2.26l-5.657-.707L1.04 9.524L14.475 22.96l4.235-4.235zm-1.792 1.791l.393 3.143l-2.129 2.129l-1.768-1.768zm-7.07-7.071l-3.505 3.504L3.87 9.524l2.129-2.129zm-3.505 9.16l-3.535 3.536L.687 19.07l3.535-3.535zm2.829 2.83l-3.536 3.535l-1.414-1.414l3.535-3.536z"/></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#ec9162" fill-rule="evenodd" d="M12.735 1.828L13.6.254a.172.172 0 0 0-.3-.164l-.874 1.59a6 6 0 0 0-2.428-.508c-.869 0-1.69.181-2.424.506L6.698.09a.17.17 0 0 0-.232-.069a.17.17 0 0 0-.069.232l.866 1.572c-1.7.874-2.85 2.537-2.849 4.447l11.166-.001c0-1.91-1.146-3.57-2.845-4.444m-5.278 2.43a.467.467 0 1 1 .001-.934a.467.467 0 0 1 0 .935M15.542 6.7l.002 8.012c0 .481-.262.897-.648 1.127a1.3 1.3 0 0 1-.675.19l-.904.001v2.734a1.237 1.237 0 0 1-1.489 1.21a1.24 1.24 0 0 1-.99-1.209V16.03H9.163v2.735A1.237 1.237 0 0 1 7.925 20a1.24 1.24 0 0 1-1.238-1.235V16.03h-.901c-.521 0-.967-.3-1.182-.736a1.3 1.3 0 0 1-.141-.581l-.002-8.01zM2.74 6.47c.684 0 1.24.553 1.24 1.234v5.17q0 .127-.025.249a1.238 1.238 0 0 1-1.897.78a1.23 1.23 0 0 1-.557-1.03L1.5 7.704c0-.68.555-1.234 1.24-1.234m14.52-.001c.684 0 1.24.552 1.24 1.234v5.169c0 .683-.555 1.235-1.239 1.235c-.685 0-1.24-.552-1.24-1.235v-5.17c0-.682.554-1.235 1.238-1.234M12.54 3.325a.467.467 0 1 1 0 .933a.467.467 0 1 1 0-.933"/></svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#ec9162" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#ec9162"><path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2"/><path d="m16 8l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 12M8 8L6.773 9.057C6.258 9.502 6 9.724 6 10s.258.498.773.943L8 12m5-5l-2 6m3.656 9l-.42-.419a3.1 3.1 0 0 1-.58-3.581M9 22l.42-.419A3.1 3.1 0 0 0 10 18m-3 4h10"/></g></svg>
      </div>
          <div className="bannerContent">
          <h1 style={{fontFamily:'"Exo 2", serif'}} className='italic text-bold text-[#ec9162] text-3xl min-mob:text-[20px]  '><TextAnimate animation="blurInUp" by="character">Sai Kiran Patro </TextAnimate></h1>
              <TextAnimate className="min-mob:text-[16px]" animation="blurInUp" by="character">
                  Informative Tech Content
             </TextAnimate>
          </div>
          <div className="inner-div min-mob:bg-transparent">
              <div className='flex justify-center items-center ytDetailsContainer'>
                <p className='text-[12px] font-medium text-white'>Videos </p>&nbsp;&nbsp;
                <p className="whitespace-pre-wrap text-[12px] font-medium tracking-tighter text-white dark:text-white">
                <NumberTicker className="text-white" value={39} />
                </p>
              </div>
              <div className='flex justify-center items-center ytDetailsContainer'>
                <p className='text-[12px] font-medium text-white'>Views </p>&nbsp;&nbsp;
                <p className="whitespace-pre-wrap text-[12px] font-medium tracking-tighter text-white dark:text-white">
                <NumberTicker className="text-white" value={105} /><span>K+</span>
                </p>
              </div>
              <div className='flex justify-center items-center ytDetailsContainer'>
                <p className='text-[12px] font-medium text-white'>Subscribers </p>&nbsp;&nbsp;
                <p className="whitespace-pre-wrap text-[12px] font-medium tracking-tighter text-white dark:text-white">
                <NumberTicker className="text-white" value={793} />
                </p>
              </div>
          </div>
      </div>
      <YoutubeVideos ytBannerRef={ytBannerRef} />
    
    </div>
  )
}

export default Youtube