'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

type Props = {
  index: number
  src: string
  name: string
  width: number
  height: number
}

const SkillsData = ({ index, src, name, width, height }: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.4

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={animationVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
      />
    </motion.div>
  )
}

export default SkillsData