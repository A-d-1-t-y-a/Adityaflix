import { motion } from "framer-motion"

export default function Animations(props) {
  return (
    <motion.div  initial={{z:-1000,y:-1000,x:-1000,scale:0}}
    animate={{z:1000,y:0,x:0,scale:1}}
    transition={{duration:2}} className={`relative h-1/2 w-full z-0 bg-black p-2 overflow-hidden `}>
    <motion.div  initial={{z:1000,y:1000,x:1000,scale:.1}}
    animate={{z:-1000,y:0,x:0,scale:1}}
    transition={{duration:1}} className=" z-10 w-full h-full bg-black p-1 ">
      <p className='text-white text-xl font-serif font-bold mx-auto '>{props.content}</p>
        <motion.div   initial={{z:1000,y:-1000,x:1000,scale:.1}}
    animate={{z:-1000,y:0,x:0,scale:1}}
    transition={{duration:2}} className={`text-white text-xl font-serif font-bold  absolute -z-10  top-0 left-0 right-0 bottom-0 ${props.ani}  ${props.gradient}`}></motion.div>
    </motion.div>
    </motion.div>
  )
}
