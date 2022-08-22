
import { useState, useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
import cx from "classnames";
import { motion } from "framer-motion";
import Slidervideos from "../card/sliderbar/slidervideos";

import { images, videos } from "../../Container/image";

export default function Home() {

  const [index, setindex] = useState(0);
  const timeout = useRef(null);
  const resttimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };
  // to here that new
  // const myref=useRef();
  // const [sr,setsr]=useState()
  // const myref2=useRef();
  // const [sr2,setsr2]=useState()
  // console.log("this is for the aditya at last tag",sr)
  // console.log("this is for the after banner tag",sr2)
  // useEffect(()=>{
  //   const observer=new IntersectionObserver((entries)=>{
  //   const ent=entries[0];
  //   const en=entries[1];
  //   setsr(ent.isIntersecting)
  //   setsr2(en.isIntersecting)
  //   })
  //   observer.observe(myref.current)
  //   // observer.observe(myref2.current)
  // },[])
  //to here that new scrolling code 
  useEffect(() => {
    resttimeout();
    timeout.current = setTimeout(
      () =>
        setindex((preindex) =>
          preindex === images.length - 1 ? 0 : preindex + 1
        ),
      2500
    );
    return () => {
      resttimeout();
    };
  }, [index]);
  return (
    <div className="flex flex-col w-full">
    {/* this is a banner for here onwards */}

      <div className="bg-red-500 mx-auto w-full h-[88vh] overflow-hidden">
            <div
              className="transistion duration-1000 ease-in"
              style={{ transform: `translateY(${-index * 11.1}%)` }}
            >
              {images.map((backgroundColor, index) => (
                <div  className={cx("inline-block w-full shadow-inherit h-[88vh]",backgroundColor)} key={index} ></div>
              ))}
            </div>
      </div>

    {/* here the balls  */}
    
      <div>
            <div className="w-auto  h-2  z-10 flex items-center justify-center bg-black p-5">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 m-2 border-2 border-white inline-block ${
                    index === idx ? `bg-white m-2 rounded-full ` : ``
                  }`}
                  onClick={() => setindex(idx)}
                ></div>
              ))}
            </div>
      </div>

    {/* this is horizontal code */}

      <div className=" mx-auto w-full h-[80vh] overflow-hidden">
        <div
          className="whitespace-nowrap transition ease-out duration-1000"
          style={{ transform: `translate(${-index * 100}%)` }}
        >
          {images.map((backgroundColor, index) => (
            <div
              className={cx("inline-block w-full h-[80vh] rounded-md mx-auto",backgroundColor)}
              key={index * 2}
            ></div>
          ))}
        </div>
      </div>

    {/* to here the banner code  */}

     <Slidervideos title={"my uploads"} videos={videos} comment={"this is an aditya program"}/>
     <Slidervideos title={"special"} videos={videos} comment={"this is an aditya program"}/>
     <motion.div className="w-full h-[90vh] overflow-scroll flex items-end  bg-black">
           <Slidervideos title={"crazy"} videos={videos} comment={"this is an aditya program"}/>
     </motion.div>
     <Slidervideos title={"comdey"} videos={videos} comment={"this is an aditya program"}/>
     <Slidervideos title={"wild thinking"} videos={videos} comment={"this is an aditya program"}/>
     {/* <div ref={myref}>this is aditya</div> */}
    </div>
  );
}
