import React,{useState,useEffect} from "react";

import { motion } from "framer-motion"

export default function Videos() {
  const [isLoading, setLoading] = useState(true);
  const [VideosFromDataBase,setVideosFromDataBase]=useState([])
  useEffect(() => {
    fetch("https://flix-e6084-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setVideosFromDataBase(Object.values(data["videos"]))
        console.log(data)
      });
  }, [isLoading]);

  if (isLoading) {
    return <div className="flex items-center justify-center bg-black dark:bg-white text-red-400 font-extrabold">sundariFlix is loading........ please wait</div>;
  }

  return (
    <div className="flex  w-full">

      <div className="flex w-full items-center fixed -z-10 top-0 justify-center  h-[100vh] bg-black dark:bg-white text-red-600 capitalize font-serif font-medium text-6xl">videos </div>
      <div className="grid grid-flow-col  mx-auto mt-[80vh]">
      {[1,2,3].map((i)=>(<motion.div key={i}>
            {VideosFromDataBase.map((video, index) => (
                      <motion.div
                                className=" p-2 mx-1 bg-white shadow-2xl rounded-2xl justify-center items-center text-center "
                                key={index * 2}>
                                <motion.div
                                initial={{x:200}} animate={{x:0}} 
                                className="flex w-full bg-gray-300 items-center text-center justify-center transform hover:scale-125 duration-500 hover:translate-1/2 relative hover:z-50"
                                  >
                                              < video controls className="w-[50vh] aspect-square ">
                                              <source src={video} className="w-[50vh] aspect-square" type="video/mp4"></source>
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
