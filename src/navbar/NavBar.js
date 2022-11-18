import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";

import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

import { Button } from '@mui/material';


export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const menuItems = [
    { title: "Home", videoLink: "" ,icon:AppsIcon},
    { title: "Explore", videoLink: "",icon:ExploreIcon },
    { title: "Library", videoLink: "",icon:VideoLibraryIcon },
    { title: "Feed", videoLink: "" ,icon:DynamicFeedIcon},
  ];

  const [menu, setMenu] = useState(false);

  const handleMenuBar = () => setMenu(!menu);

  const handleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <>
      <header
        className={`flex justify-between w-full sticky text-black dark:text-white bg-white dark:bg-black shadow-md shadow-slate-400 dark:shadow-white`}
      >
        <Button
          className="p-5 mr-20 text-black dark:text-white  flex items-center"
          onClick={handleMenuBar}
        >
         {menu?<MenuOpenIcon/>:<MenuIcon />}
        </Button>
        <Button className="p-5 text-black rounded-3xl text-ellipsis dark:text-white bg-white dark:bg-black shadow-md shadow-slate-400 dark:shadow-white flex items-center">
          SundariFlix
        </Button>

        <input
          className="flex-1 mx-20 rounded-full text-black dark:text-white my-2 py-2 border-black dark:border-white border-[0.5px] px-6 bg-white dark:bg-black shadow-sm shadow-slate-400 dark:shadow-white flex items-center"
          placeholder="Search"
        />

        <Button
          className="px-5 text-center text-black dark:text-white py-1.5 mx-1"
          onClick={handleTheme}
        >
          {theme==="light"?<LightModeIcon/>:<DarkModeIcon/>}
        </Button>
      </header>

      <SwipeableDrawer
        anchor="bottom"
        open={menu}
        onClose={handleMenuBar}
        PaperProps={{ style: { height: "90%", transitionDuration: "10s",backgroundColor:theme==="light"?"white":"black" } }}
      >
        <Button
          className="dark:text-white text-black font-bold text-xl mt-4"
          onClick={handleMenuBar}
        >
          <CloseIcon fontSize="large"/>
        </Button>

        <div className="w-full flex h-5/6 text-xl mt-4 bg-white dark:bg-black px-4">
          {menuItems.map((item) => (
               <div className="w-1/4 relative flex flex-col items-center justify-start mx-2 px-2 py-2 rounded-xl bg-teal-800 dark:bg-slate-900 text-3xl font-extrabold text-gray-300 dark:text-gray-300 shadow-2xl hover:scale-105" >
               {/* <video
                  autoPlay={true}
                  src={"v1.mp4"}
                  className="h-full"
                  controls
                  style={{fontWeight:"700"}}
                /> */}
                <Link to={"/" + item.title}>
                <Button sx={{position:"absolute",zIndex:"10",top:"0px",bottom:"0px",left:"0px",right:"0px"}} startIcon={<item.icon/>} onClick={handleMenuBar}>
                {item.title}
                </Button>
                </Link>
              </div>
          ))}
        </div>
      </SwipeableDrawer>
    </>
  );
}
