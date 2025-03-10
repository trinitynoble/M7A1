import React from "react";
import "./styles.css";

const LandingSection = ({ fetchBibleVerse }) => {
  return (
    <div className="atf_36">
    <header className="header">
      <div className="header-container">
        {/* Logo on the left */}
        <img 
            src = "/src/assets/icon.png"
          alt="Logo" 
          className="logo"
        />
        {/* Website name */}
        <h1 className="website-name">Jesus Says</h1>
      </div>
    </header>
      <div className="imgBG">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <p className="text-blk landing10-head">
            Words of Wisdom, Straight from His Heart.
            <br />
            <br />
            </p>
            
            <div className="input-box">
              <a className="btn" onClick={fetchBibleVerse}>
                <button className="landing-button">
                    Click Here to Get a Random Bible Verse
                </button>
              </a>
            </div>
          </div>
          <a id="iuy3u" href="#footer">
            <img
              className="downArrowImg"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw2.svg"
              alt="Down Arrow"
            />
          </a>
        </div>
      </div>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Jesus Says is a website that provides users with a random Bible verse upon clicking a button. 
            <br />
            &copy; 2025 Trinity Noble
          </p>
        </div>
        </footer>
    </div>
  );
};

export default LandingSection;
