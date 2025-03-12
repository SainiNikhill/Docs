import React from 'react'
import { IoMdAdd } from "react-icons/io";

const bgc = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        {" "}
        <div className=" absolute top-[5%] w-full py-10 flex items-center justify-between text-zinc-600 text-xl font-semibold p-10 ">
        {/* profile photo */}
         <div className='w-13 h-13 rounded-full overflow-hidden '>
          <img src="../public/profile.jpg" alt="profile img" className='object-cover' />
         </div>
         <div>Nikhil Saini</div>
         <div className="border-2 border-zinc-200 flex items-center justify-center rounded-3xl gap-4 px-5 py-2 text-white bg-zinc-800 font-semibold hover:bg-white hover:text-black !important ">
            <span>add</span>
            <IoMdAdd className='text-3xl' />
         </div>
        </div>
        <h1 className="text-[13vw] absolute leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default bgc