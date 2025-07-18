import React from 'react'
import Ripple from './ui/ripple'
const DownloadBtn = () => {
  return (
    

    <div className="absolute top-3 right-3 min-mob:top-0 min-mob:-right-[10px]">
    <div className="relative flex  flex-col items-center justify-center overflow-hidden  h-[150px] bg-transparent border-none shadow-none w-[150px]">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
      <a href="../Assets/SAI_KIRAN_PATRO_SDE.pdf" download="SAI KIRAN PATRO_SDE.pdf">
       <button><img alt="Download Resume" className="w-[35px]" src={require('../Assets/download.svg').default} /></button>
      </a>
      </p>
      <Ripple />
    </div>
    </div>
  
  )
}

export default DownloadBtn