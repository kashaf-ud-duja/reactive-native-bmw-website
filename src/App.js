import "./index.css"
import "./App.css"
import Webheader from "./components/header";
import Webimages from "./components/images";
import Navbar from "./components/navbar";
import Footerbar from "./components/footer";
import Videos from "./components/videos";
import About from "./components/about";
function App() {
  return (
    <div>
    <Navbar />
    <Webheader />
    <Webimages />
    <Videos />
    <About />
    <Footerbar />
    </div>
  );
}

export default App;
