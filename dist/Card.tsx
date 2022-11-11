import React from "react";
import accessImg from './assets/access.png';
import thunderImg from './assets/thunder-icon.svg';
import accessImg1 from './assets/access-1.svg';
import accessImg2 from './assets/access-2.svg';
import accessImg3 from './assets/access-3.svg';
import './styles/global.scss'
import './styles/components/card.scss'

export default function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <span> <img src={thunderImg} alt="" /> 40% Get access</span>
        <h2>Get access to premium <b>features</b></h2>
        <div className="icons">
          <img src={accessImg1} alt="lock" />
          <img src={accessImg2} alt="lock" />
          <img src={accessImg3} alt="lock" />
        </div>

        <button>Get access</button>
      </div>


      <img src={accessImg} className="rigth-image" alt="" />
    </div>
  )
}