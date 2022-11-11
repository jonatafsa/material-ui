import React from "react";
import imgIcon from './assets/img-icon.svg';
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
        <h3>{props.name}</h3>
        <p>{props.occupation}</p>

        <p className="description">{props.description}</p>

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