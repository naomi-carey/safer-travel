import React, { Component } from "react";
import "./ColabBanner.css";

export default class ColabBanner extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="colab-heading">IN COLLABORATION WITH</h2>
        </div>
        <div className="colab-container">
          <div>
            <img
              className="colab-img1"
              src="/images/colab1.svg"
              alt="MTI sponsor"
            />
            <img
              className="colab-img2"
              src="/images/colab2.png"
              alt="Public Service Division sponsor"
            />
            <img
              className="colab-img3"
              src="/images/colab3.svg.png"
              alt="Ministry of Health sponsor"
            />
            <img
              className="colab-img4"
              src="/images/colab4.jpg"
              alt="Ministry of foreign affairs sponsor"
            />
            <img
              className="colab-img5"
              src="/images/colab6.png"
              alt="CAAS sponsor"
            />
            <img
              className="colab-img6"
              src="/images/colab7.png"
              alt="Ministry of Manpower sponsor"
            />
            <img
              className="colab-img7"
              src="/images/logo-govtech.gif"
              alt="Govtech sponsor"
            />
            <img
              className="colab-img8"
              src="/images/logo-htx.png"
              alt="HTX sponsor"
            />
            <img
              className="colab-img9"
              src="/images/logo-mot.jpg"
              alt="Ministry of Transport sponsor"
            />
            <img
              className="colab-img10"
              src="/images/logo-sndgo.png"
              alt="Smart Nation sponsor"
            />
          </div>
        </div>
      </div>
    );
  }
}
