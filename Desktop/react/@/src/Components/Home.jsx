import React from 'react';
const Home=()=>{
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home;
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Phone from "./Components/Phone";
function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "} 
        <Link to="/notfound">Not Found</Link>{" "}
        <Link to="/phone">Phone</Link>
      </nav>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />
           <Route path="/phone" element={<Phone/>}/>
      </Routes>
      </div>
  );
}
export default App;