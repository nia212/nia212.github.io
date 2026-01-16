import Contact from "./komponen/Contact";
import Footer from "./komponen/Footer";
import Hero from "./komponen/Hero";
import Navbar from "./komponen/Navbar";
import Skills from "./komponen/Skills";
import About from "./komponen/About";
import Work from "./komponen/Work";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
  
    </div>
  );
}

export default App;