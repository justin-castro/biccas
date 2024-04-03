import React from "react";
import charlie from "./assets/charlie.png";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <div className="hero">
        <Navigation />
        <div className="heroCard grid grid-cols-2">
          <div className="heroText">
            <h1 className="text-4xl font-bold">
              We're here to Increase your Prodictivity
            </h1>
            <p className="text-xs">
              Lets make your work more organized and easy uaing the Taskio
              Dashboard with many of the latest features in managing work
              everyday.
            </p>

            <div>
              <button className="bg-green-500 text-white p-2 px-4 rounded-full text-xs mr-8">
                Try free trial
              </button>
              <button className="text-xs">
                <img src="#" alt="" /> View Demo
              </button>
            </div>
          </div>
          <div className="heroImage content-center justify-self-center">
            <img src={charlie} alt="" className="h-64 bg-green-300 pt-8" />
          </div>
        </div>
        <div className="collabs">
          <div className="collabsText">
            <p>More than 25,000 teams use Collabs</p>
          </div>
          <div className="collabLogos">
            <ul>
              <li>
                <img src="#" alt="" />
                Unsplash
              </li>
              <li>
                <img src="#" alt="" />
                Notion
              </li>
              <li>
                <img src="#" alt="" />
                Intercom
              </li>
              <li>
                <img src="#" alt="" />
                descript
              </li>
              <li>
                <img src="#" alt="" />
                grammarly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
