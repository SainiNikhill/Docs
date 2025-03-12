import React, { useRef, useState } from 'react'
import Card from "./Cards"
const Foreground = () => {

const ref = useRef(null)



  const data=[
    {desc:"Project Report for the final semester ", filesize:".9mb", close:false, tag:{isOpen:false,tagtitle:"Download Now",tagcolor:"green"},
},
    {desc:"Annual Report", filesize:"2.3mb", close:true, tag:{isOpen:true, tagtitle:"Upload",tagcolor:"green"},
},
    {desc:"hi! Open to find clues", filesize:"1.5mb", close:true, tag:{isOpen:true, tagtitle:"Downloading....",tagcolor:"blue"},
},
    {desc:"! Important files", filesize:"1.5mb", close:true, tag:{isOpen:true, tagtitle:"Upload",tagcolor:"green"},
},
  ]
   
  return (
    
      <div ref={ref} className="fixed t-0 left-0 z-[3] w-full  ">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}     
      </div>
    
  );
}

export default Foreground