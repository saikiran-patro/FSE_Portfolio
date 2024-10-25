import React from 'react'
import Navbar from './Navbar'
import About from './About'
import { useSelector } from 'react-redux'
import Resume from './Resume'
import Projects from './Projects'
import Youtube from './Youtube'
import Contact from './Contact'
const RightContainer = () => {


  const store=useSelector((store)=> store.window)
  const windowObject={

    "About":<About />,
    "Resume":<Resume />,
    "Projects":<Projects />,
    "Youtube":<Youtube />,
    "Contact":<Contact />


  }
  return (
    <div className="w-[70%]">
        <Navbar />
        {windowObject[store]}
    </div>
  )
}

export default RightContainer