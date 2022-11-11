import React from "react";
import linkIcon from './assets/link-icon.svg';
import './styles/global.scss'
import './styles/components/post.scss'

interface PostProps {
  userAvatar: string;
  userName: string;
  userDescription: string;
  postDescription: string;
  postImage?: string;
  link?: string;
}

export default function Post(props: PostProps) {
  return (
    <div className="post">

      {props.postImage ? <img src={props.postImage} alt="Postagem" /> : ""}


      {/* <img src={props.postImage} alt="Postagem" /> */}


      <p className="dev-web-text">{props.postDescription}</p>

      <div className="user-data">
        <div className="user-content">
          <img src={props.userAvatar} alt="Icone" />
          <div>
            <h4>{props.userName}</h4>
            <p className="dev-web-text">{props.userDescription}</p>
          </div>
        </div>


        {props.link ? <a href={props.link}><img src={linkIcon} alt="" /></a> : ""}
      </div>
    </div>
  )
}