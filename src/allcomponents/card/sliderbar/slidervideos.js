import React,{useState,useRef,useEffect} from "react";
import {motion} from 'framer-motion';

export default function Slidervideos(props) {
  const [w,setw]=useState(0);
  const carousel=useRef();
  useEffect(() => {
      setw(-carousel.current.scrollWidth+carousel.current.offsetWidth)
      }, []);

  return (
    <motion.div className=" flex flex-col scroll-smooth cursor-grabbing my-10">
              <motion.div className="flex-1 flex-start text-left m-2 shadow-2xl text-2xl font-extrabold font-serif select-none capitalize">{props.title}</motion.div>
      <motion.div
              className="mx-auto  w-full  overflow-hidden flex select-none cursor-grab"
              ref={carousel}
              initial={{x:-200}}
              animate={{x:0}}
              >  
              <motion.div className="flex snap-mandatory snap-x" drag="x" dragConstraints={{right:0 ,left:w}}>
                    {props.videos.map((video, index) => (
                              <motion.div
                                    className="w-96 p-2 mx-1 snap-mandatory snap-x bg-white shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center "
                                    key={index * 2}>
                                        <motion.div
                                        initial={{x:200}} animate={{x:0}} 
                                         className=" flex flex-wrap aspect-video bg-gray-300 items-center text-center justify-center transform hover:scale-125 duration-500 hover:translate-1/2 relative hover:z-50"
                                          >
                                                      < video controls className="h-52 ">
                                                      <source src={video} type="video/mp4"></source>
                                                      </video>
                                        </motion.div>
                                        <motion.div initial={{x:200}} animate={{x:0}}  className="font-semibold text-xl text-left m-2 text-black capitalize">{props.comment}</motion.div>
                             </motion.div>))}
              </motion.div>
       </motion.div>
    </motion.div>
  );
}
