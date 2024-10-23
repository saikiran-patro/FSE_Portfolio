import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
const MainContainer = () => {
  return (
    <div className="globalContainer">
        <div className="container"> 
          <LeftContainer />
          <RightContainer />
        </div>
    </div>
  )
}

export default MainContainer