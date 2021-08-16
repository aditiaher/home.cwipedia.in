import About from "./Components/about.component";
import Footer from "./Components/footer.component";
import Head from "./Components/head.component";
import Location from "./Components/location.component";
import Navbar from "./Components/navbar.component";
import Services from "./Components/services.component";


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Head/>
      <Services/>
      <About/>
      <Location/>
      <Footer/>

    </div>
  );
}

export default App;
