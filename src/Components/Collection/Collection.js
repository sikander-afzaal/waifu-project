import React from "react";
import "./Collection.css";
import img from "../../Assets/Images/test.png";
import img2 from "../../Assets/Images/test2.png";
import img3 from "../../Assets/Images/test3.png";
import img4 from "../../Assets/Images/test4.png";
import img5 from "../../Assets/Images/test5.png";
import img6 from "../../Assets/Images/test6.png";
import img7 from "../../Assets/Images/test7.png";
function Collection() {
  const clickHandler = (e) => {
    const mobile = window.innerWidth;
    if (mobile <= 1000) {
      if (document.querySelector(".open_hidden") !== null) {
        document.querySelector(".open_hidden").classList.remove("open_hidden");
        document.querySelector(".translate_y").classList.remove("translate_y");
      }
      e.target.classList.add("translate_y");
      e.target.lastChild.classList.add("open_hidden");
    }
  };
  return (
    <div id="collection" className="collection">
      <h1 data-aos="fade-up">Collection</h1>
      <p data-aos="fade-up">
        Hover over each card below to learn more about the drop. Join our
        Discord to get the drop date!
      </p>
      <div data-aos="fade-up" data-aos-delay="600" className="collection_grid">
        <span onClick={clickHandler}>
          <img src={img} alt="" className="collection_img" />
          <p className="head-img">Fair Launch</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img2} alt="" className="collection_img" />
          <p className="head-img">Win Prizes</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img3} alt="" className="collection_img" />
          <p className="head-img">Unique Art</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img4} alt="" className="collection_img" />
          <p className="head-img">Limited</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img5} alt="" className="collection_img" />
          <p className="head-img">Make History</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img6} alt="" className="collection_img" />
          <p className="head-img">Good Cause</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img7} alt="" className="collection_img" />
          <p className="head-img">Ownership</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img6} alt="" className="collection_img" />
          <p className="head-img">Royalties</p>
          <p className="hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            ipsam.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Collection;
