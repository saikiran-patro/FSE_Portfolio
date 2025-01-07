import React, { useState, createContext, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeWindow } from '../constant.js/windowSlice'

import { navBarContext } from './RightContainer'

const Navbar = ({navBarRef}) => {
  
    const [myCategory, setMyCategory] = useState(0);
    const categories = ['About', 'Resume', 'Projects', 'Youtube', 'Contact'];
    const dispatch = useDispatch();
    

    function changeWindowScreen(index) {
        setMyCategory(index);
        dispatch(changeWindow(categories[index]));
    }

    return (
      // Provide navBarRef to other components through navBarContext
      <navBarContext.Provider value={{ navbarElement: navBarRef }}>
        <div ref={navBarRef}>

            <div className="flex justify-between items-center">
              <div className="typeCat">{categories[myCategory]}</div> 
              <div className="flex item-center gap-4 px-6 py-5 bg-[#282829] rounded-bl-[20px] rounded-tr-[20px]">{
                categories.map((category, index) => (
                    <span 
                      key={index} 
                      onClick={() => changeWindowScreen(index)} 
                      className={index === myCategory ? 'text-[#ec9162] font-bold cursor-pointer' : 'cursor-pointer'}
                    >
                      {category}
                    </span>
                ))
              }</div>   
            </div>    

        </div>
      </navBarContext.Provider>
    );
}

export default Navbar;
