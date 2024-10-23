import React from 'react'
import DotPattern from './ui/dot-pattern'
import { cn } from "../libs/utils";
const DotBox = () => {
  return (
    <div>
        <DotPattern   width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={" bg-[#121212] absolute -z-10  "}/>
    </div>
  )
}

export default DotBox;