import React from "react";
import Drawer from "../components/Home/Drawer";
import Search from "../components/Home/Search";
import Barcharts from "../charts/Barcharts";
import Areachart from "../charts/Areachart";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title> Home</title>
      </Helmet>

      <Search />
      <Drawer />
      <Areachart/>
      <Barcharts />
    </div>
  );
}

export default Home;
