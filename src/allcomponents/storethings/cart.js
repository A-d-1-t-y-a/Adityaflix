import React from 'react'
import '../../cartui/cardui.css'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
export default function Cart(props) {
  const [showmenu, setshowmenu] = useState(false)
  const [centernameatbar,namechangeattopbar]=useState('streamflow');
  const nameandmenu=()=>{
    setshowmenu(!showmenu)
    namechangeattopbar("streamflow")
    props.color("black")
  }
  return ( 
    <div  className='companybackground'>
    <button className='menu' onClick={nameandmenu}>menu</button>
    <CSSTransition
    in={showmenu}
    timeout={5000}
    classNames='menubar'
    unmountOnExit
    >
    <ul className='menuitems' id='menuid'>
        <li onMouseEnter={()=>{namechangeattopbar("home");  props.color("red")}}>home</li>
        <li onMouseEnter={()=>{namechangeattopbar("movies");  props.color("#00ffff")}}>movies</li>
        <li onMouseEnter={()=>{namechangeattopbar("tv shows");  props.color("yellow")}}>tv shows</li>
        <li onMouseEnter={()=>{namechangeattopbar("others");  props.color("blue")}}>others</li>
        <li onMouseEnter={()=>{namechangeattopbar("subscribe");  props.color("orange")}}>subscribe</li>
    </ul>  
    </CSSTransition>
    <div className='companyname'>{centernameatbar} </div>
    <button className='log'>log</button>
    </div>
  )
}
