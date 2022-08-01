import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Drawer.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Sidebar = ({children}) => {

  let user = JSON.parse(localStorage.getItem("username"));

  console.log(user);

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/",
            name:"Task",
            icon:<FaShoppingBag/>

        },
        {
            path:"/",
            name:"Email",
            icon:<FaRegChartBar/>
        },
        {
            path:"/contact",
            name:"Contacts",
            icon:<FaUserAlt/>

        },
        {
            path:"/",
            name:"Chat",
            icon:<FaCommentAlt/>

        },
        {
            path:"/",
            name:"Deals",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container"  style={{"position":"fixed"}}>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{user}</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       {/* <FaBars onClick={toggle}/> */}
                       <Stack direction="row" spacing={2}>
      <Avatar onClick={toggle} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Stack>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;