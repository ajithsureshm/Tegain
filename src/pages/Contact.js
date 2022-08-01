import React from 'react'
import Contact from '../components/contact/Contact'
import Drawer from '../components/Home/Drawer'
import Search from "../components/Home/Search";
import { Helmet } from "react-helmet";

function Contacts() {
  return (
    <div>
      <Helmet>
        <title> Contact</title>
      </Helmet>
              <Drawer/>

              <Search/>

        <Contact/>
    </div>
  )
}

export default Contacts