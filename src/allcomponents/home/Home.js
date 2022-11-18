// import { useState, useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import cx from "classnames";
// import { motion } from "framer-motion";
// import { images, Videos } from "../../Container/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCards from "../swiperCardv2/SwiperCards";

const banner = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVSWCaGAWiUF0P3OPwKFomwBtcc77AGc35w&usqp=CAU",
  "https://deadline.com/wp-content/uploads/2019/01/ben-10-2.jpg?w=681&h=383&crop=1",
  "https://lumiere-a.akamaihd.net/v1/images/gr_avatarreckoning_22501_3e89551d.jpeg?region=0,0,640,360",
  "https://i.ytimg.com/vi/KMFRCwJVEHY/maxresdefault.jpg",
  "https://static-ai.asianetnews.com/images/01f7nh4q2x67svnj9fpz1aae7k/img-20210608-152803-jpg_710x400xt.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgE7ztIu6jahO_qm8nG-5bfyjPIElRaX0jGA&usqp=CAU"
];

const cardData = [
  {
    sectionTitle: "Cartoon",
    videos: [
      {
        name: "Aditya",
        description: "this bhaadgfgdf gdg",
        images:
          "https://static.toiimg.com/photo/88877181/88877181.jpg?imgsize=34102",
        likes: "1k",
        views: "2k",
        hasLike: true,
        hasSaved: false,
      },
      {
        name: "jogesh",
        description: "Naruto",
        likes: "1k",
        views: "2k",
        images:
          "https://i0.wp.com/news.qoo-app.com/wp-content/uploads/sites/3/2017/08/17082106225487.jpeg",
        hasLike: true,
        hasSaved: false,
      },
      {
        name: "sai vamsi",
        description: "Ben 10",
        likes: "1k",
        views: "2k",
        images:
          "https://cn.i.cdn.ti-platform.com/content/1268/game/escape-route/au/ben10_escape_route_cover.jpg",
        hasLike: true,
        hasSaved: false,
      },
      {
        name: "prasanthi",
        description: "Scooby-Doo, Where Are You!",
        likes: "1k",
        views: "2k",
        images: "https://m.media-amazon.com/images/I/91yCVi4NtUL._RI_.jpg",
        hasLike: true,
        hasSaved: false,
      },
      {
        name: "kumba",
        description: "Avatar the Last Airbender",
        likes: "1k",
        views: "2k",
        images:
          "https://www.asiamediajournal.com/wp-content/uploads/2020/11/Avatar-The-Last-Airbender.jpeg",
        hasLike: false,
        hasSaved: false,
      },
      {
        name: "naveen",
        description: "Tom and Jerry",
        likes: "1k",
        views: "2k",
        images:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwzqIOWIMPttZAwehaXtA71MMJ0Y0f3QoYMJ4TiZ21moLm_WDhIEJNGB9E4z33kjCnYE&usqp=CAU",
        hasLike: true,
        hasSaved: false,
      },
      {
        name: "jagga",
        description: "Doraemon",
        likes: "1k",
        views: "2k",
        images:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDViyd-8PCQe2g5UR-fZ5SYJoU_66rjuJPrNlmHFr_CAn-V-AQ9QfDGQ0zwEuVzAFkuAc&usqp=CAU",
        hasLike: true,
        hasSaved: false,
      },
    ],
  },
  {
    sectionTitle:"Action",
    videos:[
        {
            description: "Avatar",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name: "Bishwajit"
        },
        {
            description: "300",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Teju"
        },
        {
            description: "The Avengers",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Adithya"
        },
        {
            description: "Vikings",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Manoj"
        },
        {
            description: "Doctor Strange",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"LokiDataBase"
        },
        {
            description: "Rogue One: A Star Wars Story",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Fighter"
        },
        {
            description: "Assassin's Creed",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Chandu"
        },
        {
            description: "Luke Cage",
            likes: "1k",
            views: "2k",
            images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
            hasLike:true,
            hasSaved:true,
            name:"Vikas"
        }
    ]
}
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

      <div className="w-5/6 rounded-md mx-auto mb-5">
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
          {banner.map((item) => (
            <SwiperSlide>
          <div className="w-full flex flex-wrap h-[80vh]">
                <img src={item} alt="an aditya program" className="w-5/6 h-[80vh]" />
                </div>
            </SwiperSlide>
          ))}
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
