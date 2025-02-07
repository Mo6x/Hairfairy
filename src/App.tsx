import Navbar from "./components/landingPages/Navbar/navbar"; 
import Nav from "./components/landingPages/Nav/Nav";
import SectionA from "./components/landingPages/SectionA/SectionA";
import SectionB from "./components/landingPages/SectionB/SectionB";
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
      <SectionF />
      <SectionA />
      <SectionB />
      <SectionD />
      <SectionE />
      <Footer />
    </div>
  );
}

export default App;
