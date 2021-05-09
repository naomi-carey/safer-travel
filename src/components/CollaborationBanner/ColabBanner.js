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
              alt="MTI sponsor image"
            />
            <img
              className="colab-img2"
              src="/images/colab2.png"
              alt="Public Service Division sponsor image"
            />
            <img
              className="colab-img3"
              src="/images/colab3.svg.png"
              alt="Ministry of Health sponsor image"
            />
            <img
              className="colab-img4"
              src="/images/colab4.jpg"
              alt="Ministry of foreign affairs sponsor image"
            />
            <img
              className="colab-img5"
              src="/images/colab6.png"
              alt="CAAS sponsor image"
            />
            <img
              className="colab-img6"
              src="/images/colab7.png"
              alt="Ministry of Manpower sponsor image"
            />
            <img
              className="colab-img7"
              src="/images/logo-govtech.gif"
              alt="Govtech sponsor image"
            />
            <img
              className="colab-img8"
              src="/images/logo-htx.png"
              alt="HTX sponsor image"
            />
            <img
              className="colab-img9"
              src="/images/logo-mot.jpg"
              alt="Ministry of Transport sponsor image"
            />
            <img
              className="colab-img10"
              src="/images/logo-sndgo.png"
              alt="Smart Nation sponsor image"
            />
          </div>
        </div>
      </div>
    );
  }
}
