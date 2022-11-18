import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import { motion } from "framer-motion";
import { images, Videos } from "../../Container/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard,Mousewheel, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCards from "../swiperCardv2/SwiperCards";

const cardData = [
  {
    sectionTitle: "Comedy",
    videos: [
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
    ],
  },
  {
    sectionTitle: "Comedy",
    videos: [
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
    ],
  },
  {
    sectionTitle: "Comedy",
    videos: [
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
    ],
  },
  {
    sectionTitle: "Comedy",
    videos: [
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
    ],
  },
  {
    sectionTitle: "Comedy",
    videos: [
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
      {
        description: "this bhaadgfgdf gdg",
        likes: "1k",
        views: "2k",
        images: "fbdfgfg",
      },
    ],
  },
];

export default function Home() {
  // const [index, setindex] = useState(0);
  // const [isLoading, setLoading] = useState(true);
  // const [Data, setData] = useState({});
  // const [ImagesFromDataBase,setImagesFromDataBase]=useState([])
  // const [VideosFromDataBase,setVideosFromDataBase]=useState([])

  // const timeout = useRef(null);

  // const resttimeout = () => {
  //   if (timeout.current) {
  //     clearTimeout(timeout.current);
  //   }
  // };

  // useEffect(() => {
  //   resttimeout();
  //   timeout.current = setTimeout(
  //     () =>
  //       setindex((preindex) =>
  //         preindex === images.length - 1 ? 0 : preindex + 1
  //       ),
  //     2500
  //   );
  //   return () => {
  //     resttimeout();
  //   };
  // }, [index]);

  // useEffect(() => {
  //   fetch("https://flix-e6084-default-rtdb.firebaseio.com/.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data);
  //       setImagesFromDataBase(Object.values(Data["images"]))
  //       setVideosFromDataBase(Object.values(Data["videos"]))
  //       console.log(data)
  //     });
  // }, []);

  // if (isLoading) {
  //   return <div className="flex items-center justify-center bg-black text-red-400 font-extrabold">sundariFlix is loading........ please wait</div>;
  // }
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
  return (
    <div className="w-full h-auto flex flex-col gap-10">
      {/* this is a banner for here onwards */}

      {/* <div className=" mx-auto w-full h-[88vh] overflow-hidden">
        <div
          className="transistion duration-1000 ease-in"
          style={{ transform: `translateY(${-index * 11.1}%)` }}
        >
          {images.map((backgroundColor, index) => (
              <div
                className={cx(
                  "inline-block w-full flex-wrap shadow-inherit h-[88vh]  overflow-hidden ",backgroundColor
                )}
                key={index}
              >
                <div className="w-full h-full p-2" >
                <img
                  src={ImagesFromDataBase[index+1]}
                  className="mx-auto object-cover max-h-full max-w-full flex"
                  alt="aditya"
                />
                </div>
              </div>
            ))}
        </div>
      </div> */}

      {/* here the balls  */}

      {/* <div>
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
      </div> */}

      {/* this is horizontal code */}

      {/* <div className=" mx-auto w-full h-[80vh] overflow-hidden">
        <div
          className="whitespace-nowrap transition ease-out duration-1000"
          style={{ transform: `translate(${-index * 100}%)` }}
        >
          {images.map((backgroundColor, index) => (
            <div
              className={cx(
                "inline-block w-full h-[80vh] rounded-md mx-auto",
                backgroundColor
              )}
              key={index * 2}
            >
                <div className="w-full h-full p-2" >
                <img
                  src={ImagesFromDataBase[index+6]}
                  className="mx-auto object-cover max-h-full max-w-full flex"
                  alt="aditya"
                />
                </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* to here the banner code  */}

      <div className="w-full mb-5">
        <Swiper
          slidesPerView={0.5}
          spaceBetween={0}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide><div className="w-full bg-slate-400 h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-[70vh] ">Slide 1</div></SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="w-full p-6 h-full">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={1.2}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="w-full bg-slate-400 h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-slate-400 h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-blue-400  h-52 ">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="w-full bg-red-400  h-52 ">Slide 1</div></SwiperSlide>
      </Swiper>
      </div> */}


      {cardData.map((item, idx) => (
        <div key={idx}>
          <SwiperCards swiper={item} />
        </div>
      ))}

      <div className="relative w-full">
        <div></div>      
         <SwiperCards swiper={cardData[0]} />
      </div>
    </div>
  );
}
