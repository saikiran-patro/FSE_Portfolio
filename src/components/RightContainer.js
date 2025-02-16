import React,{lazy,Suspense,createContext,useRef} from 'react'
import Navbar from './Navbar'
import About from './About'
import { useSelector } from 'react-redux'
import Shimmer from './ui/Shimmer'
import Projects from './Projects'
import Youtube from './Youtube'

import Contact from './Contact'

// Create and export navBarContext outside the Navbar component
export const navBarContext = createContext(null);
const RightContainer = ({leftContainerRef,rightContainerRef}) => {

  const LazyComponent=lazy(()=> import('./Resume'))
  const store=useSelector((store)=> store.window)
  const windowObject={

    "About":<About />,
    "Resume":<Suspense fallback={<Shimmer />}><LazyComponent /></Suspense>,
    "Projects":<Projects />,
    "Youtube":<Youtube />,
    "Contact":<Contact />


  }
  const navBarRef = useRef(null);
  
 
  return (
    <navBarContext.Provider value={{navBarElement:navBarRef}}>
    <div ref={rightContainerRef} className="rightContainer w-[70%] h-[857px]">
     
        <Navbar navBarRef={navBarRef} leftContainerRef={leftContainerRef} rightContainerRef={rightContainerRef}/>
        {windowObject[store]}
    </div>
    </navBarContext.Provider>
  )
}

export default RightContainer