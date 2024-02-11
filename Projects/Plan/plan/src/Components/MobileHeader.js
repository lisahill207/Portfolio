import React from "react";
import tulogo from "../Images/tulogo.png";

export default function MobileHeader() {
  return (
    <div className="mobileHeader">
      <div className="mobileHeaderLeft">
        <div className="mobileLeftGraphics">
          <div className="mobileParallelogram1"></div>
          <div className="mobileParallelogram2"></div>
        </div>
        <div className="mobileLogo">
          <img
            src={tulogo}
            className="tuMobileLogo"
            alt="Logo for Towson University"
          />
        </div>
      </div>
      <div className="mobileHeaderRight">
        <div className="mobileSearch">
          <input
            className="mobileSearchBar"
            type="text"
            placeholder="Search"
            aria-required="false"
          />
        </div>
        <div className="mobileHamburger">
          <p>Menu</p>
          <div class="mobile-menu">
            <label class="hamburger-menu">
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
