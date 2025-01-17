import React,{useRef} from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import NavbarBottom from './NavbarBottom'
const MainContainer = () => {

  const leftContainerRef=useRef(null)
  const rightContainerRef=useRef(null)
  
  return (
    <div className="globalContainer relative">
        <div className="container"> 
          <LeftContainer leftContainerRef={leftContainerRef} rightContainerRef={rightContainerRef}/>
          <RightContainer leftContainerRef={leftContainerRef}  rightContainerRef={rightContainerRef}  />
        </div>
        <NavbarBottom />

    </div>
  )
}

export default MainContainer