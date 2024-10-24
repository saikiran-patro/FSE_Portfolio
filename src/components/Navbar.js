import React, { useState } from 'react'

const Navbar = () => {
  
    const [myCategory, setMyCategory]=useState(0)
    const categories=['About Me', 'Resume', 'Projects', 'Youtube' ,'Contact']
  
  
    return (
    <div className="">

        <div className="flex justify-between items-center">
          <div className="typeCat">{categories[myCategory]}</div> 
          <div className="flex item-center gap-4 px-6 py-5 bg-[#282829] rounded-bl-[20px] rounded-tr-[20px]">{
            categories.map((category,index)=>(

                <span onClick={()=>setMyCategory(index)} className={ index===myCategory ? 'text-[#ec9162] font-bold cursor-pointer':('cursor-pointer')   }>{category}</span>
            ))
            
            
            }</div>   
        </div>    
   
        
    </div>
  )
}

export default Navbar