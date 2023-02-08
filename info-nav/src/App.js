//import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Home from './Home'
import About from './components/About';
//import Login from './components/Login';
import NavBar from './components/NavBar';
import React, { useState } from "react";

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <>
           {/* <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="login/*" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      
      
    </>

  );
}

export default App;
