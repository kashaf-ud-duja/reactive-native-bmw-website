import React from 'react'
import Webheader from "./header";
import Webimages from "./images";
import Videos from "./videos";
import About from "./about";
import Grid from "./grid";
import Bot from "./bot";
const home = () => {
  return (
    <div>
    <Webheader />
    {/* <Grid /> */}
    <Webimages />
    <Videos />
    <About />
    <Bot />
    </div>
  )
}
export default home;
