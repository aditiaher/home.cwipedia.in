import RSSFeed from "./Backend/rssdata.backend";
import About from "./Components/about.component";
import Footer from "./Components/footer.component";
import Head from "./Components/head.component";
import CSer from "./Components/home-ser.component";
import Intern from "./Components/Interns.component";
import IScroll from "./Components/iscroll.component";
import Location from "./Components/location.component";
import Navbar from "./Components/navbar.component";
import RSS from "./Components/rss.component";
import Services from "./Components/services.component";
import Video from "./Components/Video.component";


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Head/>
      <CSer/>
      <Services/>
      <Video/>
      <RSS/>
      <IScroll/>
      <Intern/>
      <About/>
      <Location/>
      <Footer/>

      <RSSFeed/>

    </div>
  );
}

export default App;
