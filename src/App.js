import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Content from "./Components/Content";
import Video from "./Components/Video";
import Myform from "./Components/Myform";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/header" element={<Header/>} />
          <Route exact path="/c" element={<Content/>} />
          <Route exact path="/video" element={<Video />} />
          <Route exact path="/myform" element={<Myform />} />
          <Route exact path="/*" element={<Error />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
