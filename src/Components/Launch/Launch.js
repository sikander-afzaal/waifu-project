import React from "react";
import "./Launch.css";
import img1 from "../../Assets/Launch Images/launch (1).jpg";
import img2 from "../../Assets/Launch Images/launch (2).jpg";
import img3 from "../../Assets/Launch Images/launch (3).jpg";
import img4 from "../../Assets/Launch Images/launch (4).jpg";
import img5 from "../../Assets/Launch Images/launch (5).jpg";
import img6 from "../../Assets/Launch Images/launch (6).jpg";
import img7 from "../../Assets/Launch Images/launch (7).jpg";
import img8 from "../../Assets/Launch Images/launch (8).jpg";
import img9 from "../../Assets/Launch Images/launch (9).jpg";
import img10 from "../../Assets/Launch Images/launch (10).jpg";
import img11 from "../../Assets/Launch Images/launch (11).jpg";
import img12 from "../../Assets/Launch Images/launch (12).jpg";
import img13 from "../../Assets/Launch Images/launch (13).jpg";
import img14 from "../../Assets/Launch Images/launch (14).jpg";
import img15 from "../../Assets/Launch Images/launch (15).jpg";
function Launch() {
  return (
    <div className="launch">
      <h1 data-aos="fade-up">The Launch</h1>
      <div className="launch-div">
        <div data-aos="fade-up" data-aos-delay="100" className="launch-box">
          <p>NFT Giveaway</p>
          <div className="x10-div">
            <img src={img1} alt="" />
            <p>x10</p>
          </div>
          <p>CrunchyRoll Premium</p>
          <div className="x10-div">
            <img src={img4} alt="" />
            <p>x10</p>
          </div>
          <p>Metaverse Gachapons</p>
          <div className="x10-div">
            <img src={img12} alt="" />
            <p>x10</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="launch-box">
          <p>Partner NFTs</p>
          <div className="x10-div">
            <img src={img11} alt="" />
            <p>x10</p>
          </div>
          <p>Gachapon Ticket</p>
          <div className="x10-div">
            <img src={img6} alt="" />
            <p>x30</p>
          </div>
          <p>Game Assets</p>
          <div className="x10-div">
            <img src={img7} alt="" />
            <p>x20</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="launch-box">
          <p>Crypto Crate</p>
          <div className="x10-div">
            <img src={img15} alt="" />
            <p>x100</p>
          </div>
          <p>Gatebox AI</p>
          <div className="x10-div">
            <img src={img9} alt="" />
            <p>x5</p>
          </div>
          <p>Body Pillow</p>
          <div className="x10-div">
            <img src={img3} alt="" />
            <p>x20</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="launch-box">
          <p>Eth Lottery</p>
          <div className="x10-div">
            <img src={img5} alt="" />
            <p>x100</p>
          </div>
          <p>Gaming PC RTX3090</p>
          <div className="x10-div">
            <img src={img8} alt="" />
            <p>x5</p>
          </div>
          <p>Playstation 5</p>
          <div className="x10-div">
            <img src={img14} alt="" />
            <p>x10</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="launch-box">
          <p>Waifustation OVA</p>
          <div className="x10-div">
            <img src={img13} alt="" />
            <p>x10</p>
          </div>
          <p>Waifu Cybertruck</p>
          <div className="x10-div">
            <img src={img2} alt="" />
            <p>x1</p>
          </div>
          <p>Round Trip to Japan</p>
          <div className="x10-div">
            <img src={img10} alt="" />
            <p>x10</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="550" className="line-div">
        <div className="dot-div">
          <div className="circle"></div>
          <p>20%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>40%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>60%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>80%</p>
        </div>
        <div className="dot-div">
          <div className="circle"></div>
          <p>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Launch;
