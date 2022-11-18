import React from "react";

import { Button,Avatar } from "@material-ui/core";

import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Card({ cardDetails }) {
  const { description, likes, views, images,profileImage,name,hasLike,hasSaved } = cardDetails;

  return (
    <div className="rounded-xl my-4 p-2 mx-auto flex justify-center flex-col hover:scale-105 text-black dark:text-white bg-white dark:bg-black shadow-sm shadow-slate-400 dark:shadow-white">
      <div className="flex items-center"><Avatar alt="aditya" src={profileImage} className="ml-5"/> <p className="ml-3">{name}</p>
      </div> <img
        src={images}
        alt={"this is an aditya program"}
        className="w-full aspect-video mt-2"
      />
      <p className="line-clamp-2 text-sm mt-5 ml-2">{description}</p>
      <div className="flex items-center justify-between text-sm mt-4">
        <Button style={{textTransform:"none"}} className="text-black dark:text-white" endIcon={hasLike?<FavoriteIcon/>:<FavoriteBorderIcon/>}>{likes}</Button>
        <Button startIcon={<ViewStreamIcon/>} className="text-black dark:text-white">{views}</Button>
        <Button startIcon={<IosShareIcon/>} className="text-black dark:text-white">share</Button>
        <Button startIcon={hasSaved?<TurnedInIcon/>:<TurnedInNotIcon/>} className="text-black dark:text-white">saved</Button>
      </div>
    </div>
  );
}
