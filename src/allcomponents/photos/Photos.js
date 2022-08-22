import { img } from "../../Container/image";
import {React, useState,useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function Photos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

return(
  <div className="flex flex-wrap items-center justify-center mx-auto">
   <div 
   className="flex items-center justify-center w-full h-[100vh] relative -z-10 text-white capitalize font-serif font-medium text-6xl 
   bg-gradient-to-r from-white via-gray-900 to-black "> photos and memes </div>

    <Gallery photos={img} onClick={openLightbox} />
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
      </ModalGateway>


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
)
}
