import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import Homepage from "./Components/Home";

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar></Navbar>
     
     <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="*" element={<Homepage></Homepage>}></Route>

     </Routes>
     </Router>
    </div>
  );
}

export default App;
