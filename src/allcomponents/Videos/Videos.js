import { videos } from "../../Container/image"
import { motion } from "framer-motion"

export default function Videos() {
  return (
    <div className="flex  w-full">

      <div className="flex w-full items-center fixed -z-10 top-0 justify-center  h-[100vh] bg-black text-red-600 capitalize font-serif font-medium text-6xl">videos </div>
      <div className="flex flex-wrap mt-[80vh]">
      {[1,2,3,4].map((i)=>(<motion.div key={i}>
            {videos.map((video, index) => (
                      <motion.div
                                className=" p-2 mx-1 bg-white shadow-2xl rounded-2xl justify-center items-center text-center "
                                key={index * 2}>
                                <motion.div
                                initial={{x:200}} animate={{x:0}} 
                                className="flex w-full bg-gray-300 items-center text-center justify-center transform hover:scale-125 duration-500 hover:translate-1/2 relative hover:z-50"
                                  >
                                              < video controls className="w-[50vh] h-52 ">
                                              <source src={video} type="video/mp4"></source>
                                              </video>
                                </motion.div>
                                <div className="flex">   
                                    <motion.div initial={{x:200}} animate={{x:0}}  className="font-semibold text-xl text-left m-2 text-black capitalize">aditya</motion.div>
                                    <motion.div initial={{x:200}} animate={{x:0}}  className="font-semibold text-xl text-left m-2 text-black capitalize">like</motion.div>
                                    <motion.div initial={{x:200}} animate={{x:0}}  className="font-semibold text-xl text-left m-2 text-black capitalize">comment</motion.div>
                                </div>
                    </motion.div>))}
      </motion.div>))}

      </div>
    </div>
  )
}
