import React from "react";
import "./About.css";
//assets
import img3 from "../../Assets/Images/test3.png";
import smallLogo from "../../Assets/Images/about-logo.png";
function About() {
  return (
    <div className="about">
      <div className="about_left">
        <div className="card big_card">
          <img className="absolute-image" src={smallLogo} alt="" />
          <img className="card-img big_img" src={img3} alt="..." />
          <p className="card-title">Male smokers old</p>
          <div className="card-lower">
            <p className="number">#2290</p>
            <p className="rarity mythic">Mythic</p>
          </div>
        </div>
      </div>
      <div className="about_right">
        <h4 className="about_title">ABOUT</h4>
        <h2 className="about_title2">WHAT is NFT?</h2>
        <p className="about_desc">
          An NFT, also known as a Non-Fungible Token, is a one-of-a-kind digital
          token stored on a digital ledger/blockchain. The term "Non-Fungible"
          signifies something not interchangeable with another good due to its
          distinct properties.
        </p>
        <button className="hero_buy">BUY A BEAN</button>
      </div>
    </div>
  );
}

export default About;
