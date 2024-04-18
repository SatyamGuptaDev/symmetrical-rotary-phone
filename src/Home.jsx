import React from "react";
import "./Home.css";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaBatteryFull } from "react-icons/fa";
import DownNavbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";

const Home = () => {
  return (
    <div className="home-body">
      <div className="container">
        {/* smartphone */}
        <div className="outer-border">
          <div className="display">

            <div style={{backgroundColor: "rgba(255,255,255,1)", width: "96%",
            marginTop: '10px', borderTopLeftRadius: '40px', borderTopRightRadius: '40px'}}>
              <div className="upper-header">
                <div className="time">9:45</div>

                <div className="icons">
                  <FaWifi className="icon" />
                  <GiNetworkBars className="icon" />
                  <FaBatteryFull className="icon" />
                </div>
              </div>

              <div className="header">
                <Header />
              </div>
            </div>


          </div>

          <div className="power-button"></div>
          <div className="volume-button-up"></div>
          <div className="volume-button-down"></div>
          <div className="sim"></div>

          <div className="upper-part">
            <div className="camera"></div>
            <div className="speaker"></div>
          </div>
          <div className="navbar">
            <DownNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
