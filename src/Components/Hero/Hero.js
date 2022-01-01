import React from "react";
import "./Hero.css";
//assets
import img from "../../Assets/Images/test.png";
import img2 from "../../Assets/Images/test2.png";
import img3 from "../../Assets/Images/test3.png";
import img4 from "../../Assets/Images/test4.png";
import img5 from "../../Assets/Images/test5.png";
import img6 from "../../Assets/Images/test6.png";
import img7 from "../../Assets/Images/test7.png";
function Hero() {
  return (
    <div id="hero" className="hero">
      <h1 data-aos="fade-up">Collect Beans On the Metaverse</h1>
      <p data-aos="fade-up" className="hero-p">
        5000 confused beans who have somehow made their way to the metaverse.
        Only on Solana
      </p>
      <div className="btn-div">
        <button
          data-aos="fade-up"
          data-aos-delay="200"
          className="hero_connect"
        >
          Connect
        </button>
        <button data-aos="fade-up" data-aos-delay="300" className="hero_create">
          Create +
        </button>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="hero_card-mine-div"
      >
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity rare">Rare</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity mythic">Mythic</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img2} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity rare">Rare</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img3} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity mythic">Mythic</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img4} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img5} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img6} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
            <div className="slide">
              <img className="card-mine-img" src={img7} alt="..." />
              <p className="card-mine-title">Male smokers old</p>
              <div className="card-mine-lower">
                <p className="number">#2290</p>
                <p className="rarity common">Common</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hero-desc">
        The gang: 5000 clumsy, simpleminded, and endangered beans, who are more
        ofá threat to themselves than anything else. Seriously. We're not sure
        how they've managed to survive this long to come with each others
      </p>
    </div>
  );
}

export default Hero;
