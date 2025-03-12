import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {motion} from "framer-motion"


const Cards = ({data,reference}) => {
  return (
    <motion.div drag  dragConstraints ={reference} whileDrag={{scale:1.2}} dragElastic={0.2} 
    dragTransition={{bounceStiffness:600,bounceDamping:10}}
    className="w-60 relative h-72 bg-zinc-900/80 rounded-[40px] text-white  py-10 px-8  overflow-hidden ">
      <FaRegFileAlt />
      <p className="text-sm leading-tight  mt-5 font-semibold">
       {data.desc}
      </p>
      <div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between  mb-3 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? <IoMdClose/>: <FiDownload size=".7rem" color="white" />}
           
          </span>
        </div>
        {data.tag.isOpen && 
        (<div className={`tag w-full py-4 ${data.tag.tagcolor === "blue"? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
        </div>)}
        
      </div>
    </motion.div>
  );
}

export default Cards