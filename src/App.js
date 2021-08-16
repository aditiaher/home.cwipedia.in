import About from "./Components/about.component";
import Head from "./Components/head.component";
import Navbar from "./Components/navbar.component";
import Services from "./Components/services.component";


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Head/>
      <Services/>
      <About/>

    </div>
  );
}

export default App;
