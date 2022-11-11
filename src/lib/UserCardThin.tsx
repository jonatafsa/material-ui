import React from "react";
import imgIconDark from './assets/img-icon-1.svg';

import './styles/global.scss'
import './styles/components/user-card-thin.scss'

interface UserCardProps {
  name: string;
  occupation: string;
  image: string;
  description: string;
  userId: string;
}

export default function UserCardThin(props: UserCardProps) {
  return (
    <div className="user-card-thin">
      <img src={props.image} alt="User" />

      <div className="user-card-info">
        <h3 className="dev-web-title">{props.name}</h3>
        <p className="dev-web-text">{props.occupation}</p>

        <p className="description dev-web-text">{props.description}</p>

        <div className="user-content">
          <div className="item">
            <div className="icon">
              <img src={imgIconDark} alt="" />
            </div>

            <div className="item-data">
              <h4>320</h4>
              <p>Le Lorem Ipsum</p>
            </div>
          </div>

          <div className="item">
            <div className="icon" style={{ backgroundColor: "#f1747654" }}>
              <img src={imgIconDark} alt="" />
            </div>

            <div className="item-data">
              <h4>320</h4>
              <p>Le Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}