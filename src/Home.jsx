import React from "react";
import "./Home.css";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaBatteryFull } from "react-icons/fa";
import DownNavbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import BuySell from "./components/BuySell.jsx";
import Rate from "./components/Rate.jsx";
import TimeLine from "./components/Timeline.jsx";
import { Graph } from "./components/Chart.jsx";

const Home = () => {
  return (
    <div className="home-body">
      <div className="container">
        {/* smartphone */}
        <div className="outer-border">
          <div className="display">
            <div className="header-parent">
              <div className="upper-header">
                <div className="time">9:45</div>

                <div className="icons">
                  <GiNetworkBars className="icon" />
                  <FaWifi className="icon" />
                  <FaBatteryFull className="icon" />
                </div>
              </div>

              <div className="header">
                <Header />
              </div>
            </div>

            <div className="mobile-content">
              <div className="home-rate">
                <Rate />
              </div>

              <div className="home-timeline">
                <TimeLine />
              </div>

              <div className="chart">
                <Graph />
              </div>

              <div className="buy-sell-home">
                <BuySell />
              </div>
            </div>

            <div className="navbar">
              <DownNavbar />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
