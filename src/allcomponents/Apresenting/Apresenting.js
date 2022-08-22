import Animations from "./animations"
import { useEffect, useState,useRef } from 'react';
import { images } from "../../Container/image";
export default function Apresenting() {
  const animi=["animate-bounce","animate-spin ","animate-bounce","animate-pulse","animate-ping opacity-50"]
  const [index, setindex] = useState(0);
  const [Index, setIndex] = useState(0);
  const [array, setArray] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(
      () =>
        setindex((preindex) =>
          preindex === animi.length - 1 ? 0 : preindex + 1
        ),
      2000
    );
 
  }, [index]);
  useEffect(() => {
    timeout.current = setTimeout(
      () =>
        setIndex((preindex) =>
          preindex === images.length - 1 ? 0 : preindex + 1
        ),
      2000
    );
   
  }, [Index]);
  useEffect(() => {
    timeout.current = setTimeout(
      () =>
        setArray((preindex) =>
          preindex === 90 ? 0 : preindex + 1
        ),
      500
    );
   
  }, [array]);
  return (
    <div className="bg-black h-[100vh] items-center justify-center grid grid-cols-10 -z-10 p-2 gap-2 ">
      <div className="absolute top-20 flex items-center n justify-center bottom-0 right-0 left-0 w-full p-20  bg-transprent z-10 ">
        <div className="mx-auto bg-transparent text-9xl text-white drop-shadow-md shadow-white font-serif font-extrabold  flex items-center">Aditya Program</div>
      </div>
      {[...Array(array).keys()].map((i)=>(<Animations key={i} w={"full"}  ani={animi[index]} gradient={images[Index]} content={"Aditya"}/>))}
  </div>
  )
}
