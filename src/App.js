import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Homepage from "./Components/Home";
import Careers from "./Components/Careers";
import Services from "./Components/Services";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar></Navbar>
     
     <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/careers" element={<Careers></Careers>}></Route>
     
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="*" element={<Homepage></Homepage>}></Route>

     </Routes>
     <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
