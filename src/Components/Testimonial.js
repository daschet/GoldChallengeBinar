import React, { useState } from "react";
import Rate from "./Assets/Rate.png";
import Photo1 from "./Assets/Photo1.png";
import Photo2 from "./Assets/Photo2.png";
const Testimonial = () => {
  return (
    <div className="tBase">
      <div className="allbox">
      <div className="tTbox">
              <h3>Testimonial</h3>
              <h5> Berbagai Review Positif dari Para Pelanggan Kami</h5>
      </div>
      <div className="container">
        <div className="containerCol">
          <div className="photoframe">
            <img src={Photo1} />
          </div>
          <div className="itemtext">
            <img src={Rate} />
            <h5>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </h5>
            <p>John Dee 32, Bromo</p>
          </div>
        </div>

        <div className="containerCol">
          <div className="photoframe">
            <img src={Photo2} />
          </div>
          <div className="itemtext">
            <img src={Rate} />
            <h5>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </h5>
            <p>John Dee 32, Bromo</p>
          </div>
        </div>

        <div className="containerCol">
          <div className="photoframe">
            <img src={Photo1} />
          </div>
          <div className="itemtext">
            <img src={Rate} />
            <h5>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </h5>
            <p>John Dee 32, Bromo</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Testimonial;
