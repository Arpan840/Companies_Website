import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Homepage from "./Components/Home";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar></Navbar>
     <Homepage></Homepage>
     <Routes>

     </Routes>
     </Router>
    </div>
  );
}

export default App;
