import { motion } from "framer-motion"

export default function Animations(props) {
  return (
    <motion.div  initial={{x:-200}}
    animate={{x:0}} className={`relative h-1/2 w-${props.w} ${props.m}  z-0 bg-black p-2 overflow-hidden `}>
    <motion.div initial={{y:-200}}
              animate={{y:0}} className=" z-10 w-full h-full bg-black p-1 ">
      <p className='text-white text-xl font-serif font-bold mx-auto '>{props.content}</p>
        <motion.div  initial={{y:200}}
              animate={{y:0}} className={`text-white text-xl font-serif font-bold  absolute -z-10  top-0 left-0 right-0 bottom-0 ${props.ani}  ${props.gradient}`}></motion.div>
    </motion.div>
    </motion.div>
  )
}
