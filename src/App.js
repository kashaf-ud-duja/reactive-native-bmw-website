import "./index.css"
import "./App.css"
import Webheader from "./components/header";
import Webimages from "./components/images";
import Navbar from "./components/navbar";
import Footerbar from "./components/footer"
function App() {
  return (
    <div>
    <Navbar />
    <Webheader />
    <Webimages />
    <Footerbar />
    </div>
  );
}

export default App;
