'use client'

import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const Encryption = () => {
  return (
    <section className="w-full flex flex-row flex-wrap items-center justify-center relative">
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="w-full h-auto"
        src="/encryption.webm/"
      />


      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>
        <div className="z-[20] px-[5px]">
          <h2 className="cursive text-[20px] font-medium text-center text-gray-300">
            Secure your data with end-to-end encryption
          </h2>
        </div>

        <div className="welcome-box px-[15px] py-[4px] z-20 brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute w-auto h-auto z-20 bottom-64">
        <motion.p
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> & </span>
          Security
        </motion.p>
      </div>
    </section>
  )
}

export default Encryption