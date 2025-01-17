import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeWindow } from '../constants/windowSlice'

import { navBarContext } from './RightContainer'

const Navbar = ({navBarRef,leftContainerRef,rightContainerRef}) => {
  
    const [myCategory, setMyCategory] = useState(0);

    const categories = ['About', 'Resume', 'Projects', 'Youtube', 'Contact'];
    const dispatch = useDispatch();
    const store=useSelector((store)=> store.window)

    function changeWindowScreen(index) {
        setMyCategory(index);
        dispatch(changeWindow(categories[index]));
    }
    function showMenu(){
      leftContainerRef.current.classList.toggle('show');
      rightContainerRef.current.style.transition='all 1s ease-in-out'
      rightContainerRef.current.classList.toggle('!blur-[5px]');
    }
    useEffect(()=>{
      setMyCategory(store);

    },[store])

    return (
      // Provide navBarRef to other components through navBarContext
      <navBarContext.Provider value={{ navbarElement: navBarRef }}>
        <div ref={navBarRef}>
            
            <div className="flex justify-between items-center">
               <div className='flex flex-row items-center gap-5 max-mob:p-[10px]'>
                  <div onClick={showMenu} className='hamMenu flex flex-col gap-1'>
                    <span className='w-6 bg-white'></span>
                    <span></span>
                    <span></span>
                  </div>
                 <div className="typeCat">{store}</div> 
              </div>
              <div className="navBar flex item-center gap-4 px-6 py-5 bg-[#282829] rounded-bl-[20px] rounded-tr-[20px]">{
                categories.map((category, index) => (
                    <span 
                      key={index} 
                      onClick={() => changeWindowScreen(index)} 
                      className={category === myCategory ? 'text-[#ec9162] font-bold cursor-pointer' : 'cursor-pointer'}
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
