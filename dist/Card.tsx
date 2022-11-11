import React from "react";
import accessImg from './assets/access.png';
import thunderImg from './assets/thunder-icon.svg';
import './styles/global.scss'
import './styles/components/card.scss'

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  link?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <span className="dev-web-title"> <img src={thunderImg} alt="" /> {props.title} </span>
        <h2>{props.description}</h2>
        <div className="icons">
          <img src={props.icon1} alt="lock" />
          <img src={props.icon2} alt="lock" />
          <img src={props.icon3} alt="lock" />
        </div>

        <a href={props.link}><button>Get access</button></a>
      </div>


      <img src={props.image ? props.image : accessImg} className="rigth-image" alt="" />
    </div>
  )
}