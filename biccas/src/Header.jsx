import React from "react";
import charlie from "./assets/charlie.png"

function Header() {
  return (
    <>
      <div className="hero">
        <div className="navigation">
          <div>Biccas</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </nav>
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="heroCard">
                  <div className="heroText">
                      <h1>We're here to Increase your Prodictivity</h1>
                      <p>Lets make your work more organized and easy uaing the Taskio Dashboard with many of the latest features in managing work everyday.
                      </p>
                      <button>Try free trial</button>
                      <button><img src="#" alt="" /> View Demo</button>
          </div>
                  <div className="heroImage">
                      <img src={charlie} alt="" />
          </div>
        </div>
        <div className="collabs">
                  <div className="collabsText">
                      <p>More than 25,000 teams use Collabs</p>
          </div>
                  <div className="collabLogos">
                      <ul>
                          <li><img src="#" alt="" />Unsplash</li>
                          <li><img src="#" alt="" />Notion</li>
                          <li><img src="#" alt="" />Intercom</li>
                          <li><img src="#" alt="" />descript</li>
                          <li><img src="#" alt="" />grammarly</li>
                      </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
