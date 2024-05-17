import "./index.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webheader from "./components/header";
import Webimages from "./components/images";
import Navbar from "./components/navbar";
import Footerbar from "./components/footer";
import Videos from "./components/videos";
import About from "./components/about";
import Grid from "./components/grid";
import Home from "./components/home";
import Bot from "./components/bot"
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Bot />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="images" element={<Webimages />}/>
      <Route path="videos" element={<Videos />}>

      </Route>
    </Routes>
    <Footerbar />
  </BrowserRouter>
    </div>
  );
}

export default App;
