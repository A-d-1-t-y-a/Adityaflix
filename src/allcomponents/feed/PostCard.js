import React, { useState } from "react";

import { Button, IconButton, Avatar } from "@material-ui/core";

import{ Dialog, DialogTitle, DialogContent} from "@mui/material"

import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SendIcon from "@mui/icons-material/Send";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PostCard({ postData }) {
  const {
    images,
    followersCount,
    description,
    likes,
    views,
    time,
    profile,
    userName,
    hasLike,
    hasSaved,
    comments,
  } = postData;

  const [dialogBox, setDialogBox] = useState(false);

  const handleDialogBox = () => setDialogBox(!dialogBox);

  return (
    <>
      <div className="rounded-xl my-8 p-4 mx-auto flex flex-col text-black dark:text-white bg-white dark:bg-black shadow-sm shadow-slate-400 dark:shadow-white">
        <div className="flex items-center mb-4 gap-6">
          <Avatar src={profile} alt={"username"} />
          <p>{userName}</p>
          <p>{time}</p>
          <p>{followersCount}</p>
        </div>
        <img
          src={images}
          alt={"this is an aditya program"}
          className="h-96 aspect-[9/16] mb-4"
        />
        <div className="flex items-center justify-between font-medium text-sm">
          <Button
            className="text-black dark:text-white"
            startIcon={hasLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          >
            {likes} likes
          </Button>
          <Button
            className="text-black dark:text-white"
            startIcon={<ViewStreamIcon />}
          >
            {views} views
          </Button>
          <Button
            className="text-black dark:text-white"
            startIcon={<IosShareIcon />}
          >
            share
          </Button>
          <Button
            className="text-black dark:text-white"
            startIcon={hasSaved ? <TurnedInIcon /> : <TurnedInNotIcon />}
          >
            saved
          </Button>
        </div>
        <p className="line-clamp-2 font-extrabold text-sm">{description}</p>
        <div className="flex items-center align-midd mt-4 gap-3">
          <input
            placeholder="add comment"
            className="py-2 px-3 w-full rounded-full dark:text-white dark:bg-black border-gray-300 border-2"
          />
          <IconButton className="dark:bg-green-400">
            <SendIcon className="text-green-400 dark:text-white" />
          </IconButton>
        </div>
        <Button onClick={handleDialogBox} className="text-black dark:text-white">
          view all comments
        </Button>
      </div>
      <Dialog
        PaperProps={{
          className:
            "dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white",
        }}
        open={dialogBox}
        onClose={handleDialogBox}
      >
        <DialogTitle>comments related to the {description}</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-3 w-full h-full">
            {(comments||[]).map(({ name, body }) => (
              <div className="p-2">
                <div className="font-extra font-sans text-black dark:text-white text-base">
                  {name}
                </div>
                <div className="font-normal mt-3 font-sans text-black dark:text-white text-base">
                  {body}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
