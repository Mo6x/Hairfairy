import Navbar from "./components/landingPages/Navbar/navbar"; 
import Nav from "./components/landingPages/Nav/Nav";
import SectionA from "./components/landingPages/SectionA/SectionA";
import SectionB from "./components/landingPages/SectionB/SectionB";
import SectionC from "./components/landingPages/SectionC/SectionC";
import SectionD from "./components/landingPages/SectionD/SectionD";
import SectionE from "./components/landingPages/SectionE/SectionE";
import SectionF from "./components/landingPages/SectionF/SectionF";
import Footer from "./components/landingPages/Footer/Footer";
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Nav />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <Footer />
    </div>
  );
}

export default App;
