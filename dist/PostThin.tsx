import React from "react";

import './styles/global.scss'
import './styles/components/post-thin.scss';

interface PostThinProps {
  userName: string;
  userDescription: string;
  postDescription: string;
  postImage?: string;
}

export default function PostThin(props: PostThinProps) {
  return (
    <div className="post-thin">
      <img src={props.postImage} alt="Post Image" />

      <div className="post-data">
        <h3 className="dev-web-title">{props.userName}</h3>
        <p className="occupation dev-web-text">{props.userDescription}</p>
        <p className="dev-web-text">{props.postDescription}</p>
      </div>
    </div>
  )
}