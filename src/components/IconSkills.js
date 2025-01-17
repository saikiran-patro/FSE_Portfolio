// import IconCloud from "../components/ui/icon-cloud";
import { TransparencyGridIcon } from "@radix-ui/react-icons"
import React from "react"
import { Cloud,renderSimpleIcon, fetchSimpleIcons} from 'react-icon-cloud'


const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 110,
      aProps: {
        onClick: (e) => e.preventDefault(),
        style:{
          border:"0px"
        }
        
      },
      borderColor:TransparencyGridIcon  
    }))
  }
  
  return <a>Loading</a>
}

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "python",
    "c++",
    "nodedotjs",
    "express",
    "firebase",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    
  ];

export function IconSkills() {
  const icons = useIcons(slugs)

  return <Cloud>
    {icons}
  </Cloud>
}