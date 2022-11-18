import React from "react";

import cx from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import PostCard from "./PostCard";

const postData = [
  {
    description: "Spider-Man: Into the Spider-Verse",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Bishwajit",
    time: "a month ago",
  },
  {
    description: "Pet Sematary",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Charan",
    time: "2 days ago",
  },
  {
    description: "Avengers: Endgame",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Loki",
  },
  {
    description: "Shazam!",
    likes: "1k",
    views: "2k",
    images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Venkey",
    time: "2hrs ago",
  },
  {
    description: "Escape Room",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Jogi",
    time: "2 days ago",
  },
  {
    description: "Captain Marvel",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Kumba",
    time: "10 days ago",
  },
  {
    description: "How to Train Your Dragon: The Hidden World",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "anil",
    time: "2hrs ago",
  },
  {
    description: "Glass",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Vikas",
    time: "2hrs ago",
  },
  {
    description: "Doraemon the Movie: Nobita's Treasure Island",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "MAnju",
    time: "2hrs ago",
  },
  {
    description: "Dumbo",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/A7XkpLfNH0El2yyDLc4b0KLAKvE.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Aditya",
    time: "2hrs ago",
  },
  {
    description: "Avengers: Infinity War",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "prasanti",
    time: "1 day ago",
  },
  {
    description: "Hellboy",
    likes: "1k",
    views: "2k",
    images: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
    hasLike: true,
    hasSaved: true,
    userName: "Vamshi",
    time: "5hrs ago",
  },
];

const statusData = [
  {
    description: "Spider-Man: Into the Spider-Verse",
    images: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    userName: "Bishwajit",
    color: "bg-fuchsia-400",
    time: "a month ago",
  },
  {
    description: "Pet Sematary",
    images: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
    userName: "Charan",
    color: "bg-green-300",
    time: "2 days ago",
  },
  {
    description: "Avengers: Endgame",
    images: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    userName: "Loki",
    color: "bg-green-300",
    time: "2 days ago",
  },
  {
    description: "Escape Room",
    images: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
    userName: "Jogi",
    color: "bg-pink-400",
    time: "2 days ago",
  },
  {
    description: "Captain Marvel",
    images: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    userName: "Kumba",
    color: "bg-yellow-300",
    time: "10 days ago",
  },
  {
    description: "How to Train Your Dragon: The Hidden World",
    images: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    userName: "anil",
    color: "bg-zinc-200",
    time: "2hrs ago",
  },
  {
    description: "Glass",
    images: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    userName: "Vikas",
    color: "bg-lime-300",
    time: "2hrs ago",
  },
  {
    description: "Doraemon the Movie: Nobita's Treasure Island",
    images: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
    userName: "MAnju",
    color: "bg-green-300",
    time: "2hrs ago",
  },
  {
    description: "Dumbo",
    images: "https://image.tmdb.org/t/p/w500/A7XkpLfNH0El2yyDLc4b0KLAKvE.jpg",
    userName: "Aditya",
    color: "bg-slate-400",
    time: "2hrs ago",
  },
  {
    description: "Avengers: Infinity War",
    images: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    userName: "prasanti",
    color: "bg-emerald-300",
    time: "1 day ago",
  },
  {
    description: "Hellboy",
    images: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
    userName: "Vamshi",
    color: "bg-cyan-300",
    time: "5hrs ago",
  },
];

export default function Feed() {
  return (
    <div className="mx-auto">
      <div className="w-96 px-3 mt-20 mb-5">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
        >
          {statusData.map(
            ({ description, images, userName, color, time }, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={cx(
                    "relative dark:text-white text-black rounded-xl h-[80vh] p-3",
                    color
                  )}
                >
                  <img src={images} alt={"aditya program"} />
                  <div className="flex items-center gap-6 text-center w-full my-3 font-extrabold justify-center">
                    <p>{userName}</p>
                    <p>{time}</p>
                  </div>
                  <p className="text-center">{description}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {postData.map((item, idx) => (
        <PostCard postData={item} />
      ))}
    </div>
  );
}
