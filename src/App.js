
import React from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Rooms from "./pages/Rooms";


import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
  <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Rooms" element={<Rooms />}/>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  
  )
}

export default App;
