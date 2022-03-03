import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/Screens/CommonScreens/AboutUs/AboutUs";
import VissionMission from "./components/Screens/CommonScreens/AboutUs/VisionMission";
import ContactUs from "./components/Screens/CommonScreens/ContactUs/ContactUs";
import Events from "./components/Screens/CommonScreens/Events/Event";
import Gallery from "./components/Screens/CommonScreens/Gallery/Gallery";
import Home from "./components/Screens/CommonScreens/Home";
import Members from "./components/Screens/CommonScreens/Members/Members";
import NewsRoom from "./components/Screens/CommonScreens/Newsroom/Newsroom";
import Login from "./components/Screens/PreLoginScreens/Login";
import LoginAdmin from "./components/Screens/PreLoginScreens/LoginAdmin";
import Register from "./components/Screens/PreLoginScreens/Register";
import RegisterAdmin from "./components/Screens/PreLoginScreens/RegisterAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/aboutus' element = {<AboutUs />} />
          <Route path = '/visionmission' element = {<VissionMission />} />
          <Route path = '/newsroom' element = {<NewsRoom />} />
          {/* <Route path = '/members' element = {<NewsRoom />} /> */}
          <Route path = '/contactus' element = {<ContactUs />} />
          <Route path = '/gallery' element = {<Gallery />} />
          <Route path = '/members' element = {<Members />} />
          <Route path = '/events' element = {<Events />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/registeradmin' element = {<RegisterAdmin />} />
          <Route path = '/loginadmin' element = {<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
