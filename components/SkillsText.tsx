'use client'

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="welcome-box py-2 px-7 border border-[#7042f88b] opacity-90"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="welcome-text text-sm">Fullstack Developer Portfolio</h1>
      </motion.div>
      
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-3xl text-white font-medium mt-2 text-center mb-4'
      >
        making apps with modern tecnologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-xl text-gray-200 mt-2 mb-10 text-center'
      >
        Never miss a task deadline or idea 
      </motion.div>
    </div>
  )
}

export default SkillsText