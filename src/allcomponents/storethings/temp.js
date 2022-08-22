// import "../../cartui/banner.css"
// import { useState, useEffect, useRef } from "react";
// import { images } from "../../Container/image";
// import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";

// export default function Home() {
//   const elements = ['todo', 'inProgress', "done"];
//   return (
//   <DragDropContext>  
//   <Droppable droppableId="characters" >  
//       {(provided) => (  
//           <div  
//               {...provided.droppableProps}  
//               ref={provided.innerRef}  
//           >  
//               {elements.map((item, index) => {  
//                  return  <Draggable key={index} draggableId={item} index={index}>  
//                       {(provided) => (  
//                          <div  
//                            ref={provided.innerRef}  
//                            {...provided.draggableProps}  
//                            {...provided.dragHandleProps}  
//                          >  
//                           <div className="bg-blue-500 p-10 border-4 cursor-pointer "> item={item}</div>
//                          </div>
//                       )}  
//                   </Draggable>  
//               })}
//               {provided.placeholder}  
//           </div>  
//       )}  
//   </Droppable>  
// </DragDropContext>
// )
  // const [index, setindex] = useState(0);
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
  // return (
  //   // this is for the vertical code
  //   <>
  //     <div className="wholeslideshow">
  //       <div
  //         className="slideshowdisplaypic"
  //         style={{ transform: `translateY(${-index * 20}%)` }}
  //       >
  //         {images.map((backgroundColor, index) => (
  //           <div className="slide" key={index} style={{ backgroundColor }} />
  //         ))}
  //       </div>
  //       <div className="ballatbottomarea">
  //         {images.map((_, idx) => (
  //           <div
  //             key={idx}
  //             className={`ballatbottom ${
  //               index === idx ? `fillcolorintheball` : ``
  //             }`}
  //             onClick={() => setindex(idx)}
  //           ></div>
  //         ))}
  //       </div>
  //     </div>
  //     {/* this is horizontal code */}
  //     <div className="wholeslideshowx">
  //       <div
  //         className="slideshowdisplaypicinx"
  //         style={{ transform: `translate(${-index * 100}%)` }}
  //       >
  //         {images.map((backgroundColor, index) => (
  //           <div
  //             className="slide"
  //             key={index * 2}
  //             style={{ backgroundColor }}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </>
  // );
// }
