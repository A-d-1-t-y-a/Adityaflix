import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@material-ui/core";

import SwiperCards from "../swiperCardv2/SwiperCards";

const cardData = [
  {
    sectionTitle: "sharedVideos",
    videos: [
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
      }
    ],
  },
  {
    sectionTitle: "My videos",
    videos: [ {
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
      name:"Manoj"
  },
  {
      description: "Rogue One: A Star Wars Story",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Manoj"
  },
  {
      description: "Assassin's Creed",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Aditya"
  },
  {
      description: "Luke Cage",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Aditya"
  }]
  },
  {
    sectionTitle: "saved videos",
    videos: [ {
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
      name:"Manoj"
  },
  {
      description: "Rogue One: A Star Wars Story",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Manoj"
  },
  {
      description: "Assassin's Creed",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Aditya"
  },
  {
      description: "Luke Cage",
      likes: "1k",
      views: "2k",
      images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
      hasLike:true,
      hasSaved:true,
      name:"Aditya"
  }]
  }]

export default function Library() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (currentExpanded) =>
    currentExpanded === expanded
      ? setExpanded("")
      : setExpanded(currentExpanded);


  return (
    <div className="w-full mx-auto my-32 px-20 h-screen divide-y-2">
       
        <div className=" shadow-sm shadow-slate-400 dark:shadow-white rounded-sm">
        <Accordion
          expanded={expanded === "Aditya3"}
          onChange={() => handleChange("Aditya3")}
          className={"dark:text-white bg-white dark:bg-black"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-white text-black" />}>
            <Typography>Saved Videos</Typography>
          </AccordionSummary>
          <AccordionDetails><SwiperCards swiper={cardData[2]}/>

          </AccordionDetails>
        </Accordion>
        </div>

        <div className=" shadow-sm shadow-slate-400 dark:shadow-white rounded-sm">
        <Accordion
          expanded={expanded === "Aditya4"}
          onChange={() => handleChange("Aditya4")}
          className={"dark:text-white bg-white dark:bg-black"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-white text-black"  />}>
            <Typography>Shared Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SwiperCards swiper={cardData[0]}/>
          </AccordionDetails>
        </Accordion>
        </div>

        <div className=" shadow-sm shadow-slate-400 dark:shadow-white rounded-sm">
        <Accordion
          expanded={expanded === "Aditya5"}
          onChange={() => handleChange("Aditya5")}
          className={"dark:text-white bg-white dark:bg-black"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon  className="dark:text-white text-black" />}>
            <Typography>My videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <SwiperCards swiper={cardData[1]}/>
          </AccordionDetails>
        </Accordion>
        </div>
     </div>
  );
}
