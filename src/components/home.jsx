import React from 'react'
import Webheader from "./header";
import Webimages from "./images";
import Videos from "./videos";
import About from "./about";
import Grid from "./grid";
const home = () => {
  return (
    <div>
    <Webheader />
    <Grid />
    <Webimages />
    <Videos />
    <About />
    </div>
  )
}
export default home;
