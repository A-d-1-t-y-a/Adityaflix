import { useState } from "react";
import cx from "classnames";

import {
    menuitems,
    comboArray
  } from "../../Container/storeofthewishes"
import { images,img } from "../../Container/image";


export default function Banner() {

  const [inputdata, setinputdata] = useState({
                                          "backgroundColor":"bg-red-500",
                                          "textColor":"text-red-500",
                                          "textDecoration":"underline",
                                          "fontSize":"text-6xl",
                                          "fontFamily":"sans",
                                          "fontWeight":"font-bold",
                                          "video":"",
                                          "photo":"",
                                          "inputwishes":""});
  const keysofstore =["backgroundColor","textColor","textDecoration","fontSize","fontFamily","fontWeight", " video","photo","inputwishes"];
  const [index, setindex] = useState(0);
  
  const leftbutton = () => {
    setindex((preindex) => (preindex === 0 ? comboArray.length - 1 : preindex - 1));
  };
  const rightbutton = () => {
    setindex((preindex) => (preindex === comboArray.length - 1 ? 0 : preindex + 1));
  };
  
  const newdata=(item,index)=>{
              inputdata[keysofstore[index]]=item
              setinputdata((prev)=>({...prev,inputdata}));
  }

//   // scrolling ]
//  const [y, setY] = useState(0);
//   const handleNavigation = (e) => {
//     const window = e.currentTarget;
//     if (y > window.scrollY) {
//       rightbutton();
//     } else if (y < window.scrollY) {
//       leftbutton();
//     }
//     setY(window.scrollY);
//   };

//   useEffect(() => {
//     setY(window.scrollY);

//     window.addEventListener("scroll", (e) => handleNavigation(e));
//   }, [y]);
   

  return (

    <div className="flex w-full  mx-auto my-10">

    {/* THIS IS FOR THE LEFT SIDE OF THE INPUT */}
      <div className="w-1/2 flex mx-10 items-center justify-center ">
        <div
          className="hover:bg-red-500 flex cursor-pointer items-center justify-center bg-transparent"
          onClick={leftbutton}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6.5L5.5 12M5.5 12L11 17.5M5.5 12H20"
              stroke="black"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        <div className="w-full mx-2 flex-1">
          <div className=" w-full h-80 rounded-3xl overflow-y-hidden">
            <div
              className="transition ease-in duration-1000 delay-200"
              style={{ transform: `translateY(${-index *11.1}%)` }}
            >
              {images.map((backgroundColor, index) => (
                  <div
                      className={cx("inline-block w-full shadow-inherit  h-80 ",backgroundColor)}
                      key={index}
                      // style={{ backgroundColor }}
                    ><div className="overflow-y-auto h-80  ">
                        {comboArray[index].map((item,idx)=>(
                          <div className={cx("m-1 flex items-center justify-center text-2xl  rounded-full text-gray-500 ")} key={idx*3}>
                              {item==="user pics"&&<input className="transistion duration-500 ease-in text-center my-28 p-2 rounded-xl" onChange={(e)=>{setinputdata((prev)=>({...prev,"photo":e.target.value }))}} type="file" accept="image/*"  placeholder="here you can upload a image man"/>}
                              {item==="your wish"&&<input className=" text-center my-28 p-2 rounded-xl" onChange={(e)=>{setinputdata((prev)=>({...prev,"inputwishes":e.target.value }))}} placeholder="enter a your wishes"/>}
                              {item==="input video"&&<input className=" text-center my-28 p-2 rounded-xl" onChange={(e)=>{setinputdata((prev)=>({...prev,"video":e.target.value }))}} placeholder="enter a video"/>}
                              {item!=="your wish"&&item!=="input video"&&item!=="user pics"&&<button key={idx*100} className="flex items-center justify-center transistion duration-500 opacity-50 hover:opacity-100 " onClick={()=>newdata(item,index)}>{item}</button>}
                          </div>))}
                      </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-10 rounded-full overflow-hidden">
            <div
              className="whitespace-nowrap transition ease-out duration-1000 "
              style={{ transform: `translate(${-index * 100}%)` }}
            >
              {menuitems.map((items, index) => (
                <div
                  className="inline-block w-full border-8 p-3 rounded-full"
                  key={index * 2}
                  // style={ {backgroundColor : "green"}}
                >{items}</div>
              ))}
            </div>
          </div>
        </div>

        <div
          className=" flex items-center hover:bg-red-500 cursor-pointer bg-transparent"
          onClick={rightbutton}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 6.5L18.5 12M18.5 12L13 17.5M18.5 12H4"
              stroke="black"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>


       {/* here creating new posts */}
       <div className="w-2/4 flex flex-col mx-2 bg-black">
            <div 
            className={cx("text-center overflow-auto m-2 flex-1 flex items-center justify-center",Object.values(inputdata).join(" "))}
            // style={{backgroundImage:`url${img[0]}`}}
            >
                <div className={"flex text-center items-center"+(Object.values(inputdata)).join(" ")} 
                style={{backgroundImage:`url${img[0]}`}}>
                  {inputdata["inputwishes"]}
        
                </div>
            </div>
            <div className=" text-black  rounded-t-3xl flex items-center justify-center py-1 px-5  border-1 font-mono font-extrabold bg-white">
                  <input className="bg-white-500 border-2 flex-1 border-green-400 rounded-full  p-2 text-center "
                        placeholder="enter your name here"/>
                  <button className=" bg-blue-500 m-1 p-2 px-4 rounded-full">post</button>
            </div>
        </div>
    </div>
  );
}
