import { React, useState } from "react";
// ,useCallback,useEffect
import Card from "../swiperCardv2/card";

import { Chip, Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";


// import { img } from "../../Container/image";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

const videos = [
  {
    id:1,
    name: "Aditya",
    description: "this bhaadgfgdf gdg",
    images:
      "https://static.toiimg.com/photo/88877181/88877181.jpg?imgsize=34102",
    likes: "1k",
    views: "2k",
    hasLike: true,
    hasSaved: false,
    tags:[
    "Pawan Kalayan"]
  },
  {id:2,
    name: "jogesh",
    description: "Naruto",
    likes: "1k",
    views: "2k",
    images:
      "https://i0.wp.com/news.qoo-app.com/wp-content/uploads/sites/3/2017/08/17082106225487.jpeg",
    hasLike: true,
    hasSaved: false,
    tags:[ "React routers",
    "New to You",
    "Recently Uploaded",
    "Electronic Music",
    "Action-adventure games",
    "sales",
    "Mobile Phones",
    "tourist Destinations",
    "Visual Effects",
    "Sci-fi Films"]
  },
  {id:3,
    name: "sai vamsi",
    description: "Ben 10",
    likes: "1k",
    views: "2k",
    images:
      "https://cn.i.cdn.ti-platform.com/content/1268/game/escape-route/au/ben10_escape_route_cover.jpg",
    hasLike: true,
    hasSaved: false,
    tags:["Telugu Cinema",
    "Data science",
    "Cricket",
    "Algebra"]
  },
  {id:4,
    name: "prasanthi",
    description: "Scooby-Doo, Where Are You!",
    likes: "1k",
    views: "2k",
    images: "https://m.media-amazon.com/images/I/91yCVi4NtUL._RI_.jpg",
    hasLike: true,
    hasSaved: false,
    tags:["Telugu Cinema",
    "Data science",
    "Cricket",
    "Algebra"]
  },
  {id:5,
    name: "kumba",
    description: "Avatar the Last Airbender",
    likes: "1k",
    views: "2k",
    images:
      "https://www.asiamediajournal.com/wp-content/uploads/2020/11/Avatar-The-Last-Airbender.jpeg",
    hasLike: false,
    hasSaved: false,
    tags:["Electrical Engineering",
    "Romatic Comdey",
    "Smart phones"]
  },
  {id:6,
    name: "naveen",
    description: "Tom and Jerry",
    likes: "1k",
    views: "2k",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwzqIOWIMPttZAwehaXtA71MMJ0Y0f3QoYMJ4TiZ21moLm_WDhIEJNGB9E4z33kjCnYE&usqp=CAU",
    hasLike: true,
    hasSaved: false,
    tags:["Electrical Engineering",
    "Romatic Comdey",
    "Smart phones"]
  },
  {id:7,
    name: "jagga",
    description: "Doraemon",
    likes: "1k",
    views: "2k",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDViyd-8PCQe2g5UR-fZ5SYJoU_66rjuJPrNlmHFr_CAn-V-AQ9QfDGQ0zwEuVzAFkuAc&usqp=CAU",
    hasLike: true,
    hasSaved: false,
    tags:[  "Computer Programming",
    "Telugu Cinema"]
  },
  {id:8,
    description: "Avatar",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name: "Bishwajit",
    tags:[  "Visual Effects",
    "Sci-fi Films"]
},
{id:9,
    description: "300",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"charan",
    tags:[  "Telugu Cinema",
    "Data science"]
},
{id:10,
    description: "The Avengers",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"Adithya",
    tags:[  "Cricket",
    "Algebra"]
},
{id:11,
    description: "Vikings",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"sravas",
    tags:[  "Electrical Engineering",
    "Romatic Comdey"]
},
{id:12,
    description: "Doctor Strange",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"Manoj",
    tags:[  "Smart phones",
    "Planets"]
},
{id:13,
    description: "Rogue One: A Star Wars Story",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"Ajay",
    tags:[  "SpaceCraft",
    "Electronic Components"]
},
{id:14,
    description: "Assassin's Creed",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"Aditya",
    tags:[  "plastic",
    "coal",
    "Asian Music"]
},
{id:15,
    description: "Luke Cage",
    likes: "1k",
    views: "2k",
    images: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    hasLike:true,
    hasSaved:true,
    name:"Aditya",
    tags:[  "Maths",
    "lessons",
    "stories",
    "Ben 10"]
}
];

const tags = [
  "All",
  "HTML",
  "Pawan Kalayan",
  "viratKohli",
  "cartoon",
  "Music",
  "Tamil Cinema",
  "Filmi",
  "Trailers",
  "Live",
  "React routers",
  "New to You",
  "Recently Uploaded",
  "Electronic Music",
  "Action-adventure games",
  "sales",
  "Mobile Phones",
  "tourist Destinations",
  "Visual Effects",
  "Sci-fi Films",
  "Computer Programming",
  "Telugu Cinema",
  "Data science",
  "Cricket",
  "Algebra",
  "Electrical Engineering",
  "Romatic Comdey",
  "Smart phones",
  "Planets",
  "SpaceCraft",
  "Electronic Components",
  "plastic",
  "coal",
  "Asian Music",
  "Maths",
  "lessons",
  "stories",
  "Ben 10"
];

export default function Photos() {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickedTags,setClickedTags]=useState(["All"])
  const [filterVideos,setFilterVideos]=useState([...videos])

  const handleDialogBox = () => setOpen(!open);


  // const openLightbox = useCallback((event, {img, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);
  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  const handleTagsSelection=(selectedTags)=>{
    setClickedTags(
      (prev)=>{
        if(selectedTags==="All") return ["All"]
        else if(clickedTags.includes(selectedTags)) return clickedTags.filter(item=>item!== selectedTags||item!=="All")
        else return [...new Set([selectedTags,...prev])].filter(item=>item!=="All")
      }
    )
    if(clickedTags.includes("All"))
       setFilterVideos([...videos])
    else
    {  const temp=videos.map(({tags})=>tags)
    console.log(temp)
      // setFilterVideos(clickedTags.map((tag)=>videos.find(({id,tags})=>tags.includes(tag)&&!temp.includes(id))))
     let temp2=[]
     clickedTags.map((tag)=>temp.map((item,idx)=>{if(item.includes(tag)) 
      temp2.push(idx)
    return item}))
      console.log(temp2)
    }
  }

  return (
    <div className="w-full pt-20 h-screen overflow-hidden flex">
      <div className="min-w-20 flex flex-col gap-3 shadow-sm shadow-black rounded-md dark:shadow-white pr-3 mr-3">
        <Button
          className="rounded-xl bg-teal-800 dark:bg-slate-900 text-3xl font-extrabold text-gray-300 dark:text-gray-300 shadow-2xl"
          onClick={handleDialogBox}
        >
          show more
        </Button>
        {tags.map((item) => (
          <Chip sx={{padding:"0px 2px"}} label={item} color={clickedTags.includes(item)?"success":"primary"} onClick={()=>handleTagsSelection(item)}/>
        ))}
      </div>
      <div className="flex-1 grid grid-flow-row grid-cols-4 overflow-y-auto">
        {filterVideos.map((item) => (
          <Card cardDetails={item} />
        ))}
      </div>

      <Dialog PaperProps={{
        className:"dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white"
    }} open={open} onClose={handleDialogBox}>
        <DialogTitle>Set Tags</DialogTitle>
        <DialogContent>
        <div className="flex flex-wrap gap-3 w-full h-full">
        {tags.map((item) => (
          <Chip sx={{padding:"0px 2px"}} label={item} color={clickedTags.includes(item)?"success":"primary"} onClick={()=>handleTagsSelection(item)}/>
        ))}
        </div>
        </DialogContent>
        <DialogActions  PaperProps={{
        className:"dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white"
    }}>
          {/* <Button className="dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white" onClick={handleDialogBox}>Close</Button> */}
          <Button className="dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white" onClick={handleDialogBox}>Filter</Button>
        </DialogActions>
      </Dialog>

      {/* <Gallery photos={img} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={img.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) :null}
      </ModalGateway> */}

      {/* <div className="flex w-2/3 shadow-2xl items-center justify-center p-2 mx-auto my-5  bg-white">
        {img.map((image,index)=>(
        <div key={index} className="flex w-2/3 rounded-full shadow-2xl items-center justify-center p-2 mx-auto my-5  bg-white ">
          <img  className="mx-auto h-[90vh] rounded-3xl " src={image}/>
          <div>
            <div>like</div>
            <div>describe</div>
            <div>comment</div>
          </div>
        </div>))
        }
   </div> */}
    </div>
  );
}
