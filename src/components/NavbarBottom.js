import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { changeWindow } from '../constants/windowSlice';
const NavbarBottom = () => {

     const [myCategory, setMyCategory] = useState(0);
     const categories = ['About', 'Resume', 'Projects', 'Youtube', 'Contact'];
     const dispatch = useDispatch();
     function changeWindowScreen(index) {
             setMyCategory(index);
             dispatch(changeWindow(categories[index]));
         }
const store=useSelector((store)=> store.window)
     useEffect(()=>{
       
    setMyCategory(store);

     },[store])
  return (
    <div className='hidden max-mob:flex justify-center items-center gap-5 p-5 rounded-lg backdrop-blur-[5px] sticky bottom-[-64px] z-2 w-full'>
        {
         categories.map((category, index) => (
                    <span 
                      key={index} 
                      onClick={() => changeWindowScreen(index)} 
                      className={category === myCategory ? 'text-[#ec9162] font-bold cursor-pointer' : 'cursor-pointer'}
                    >
                      {category}
                    </span>
                ))
        }
    </div>
  )
}

export default NavbarBottom