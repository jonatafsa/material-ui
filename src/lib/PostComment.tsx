import React from "react";
import postCommentIcon from './assets/send-icon.svg';
import './styles/global.scss'
import './styles/components/post-comment.scss';

interface PostCommentProps {
  userName: string;
  postDescription: string;
  postImage?: string;
}

export default function PostComment(props: PostCommentProps) {
  return (
    <div className="post-comment">
      <img src={props.postImage} alt="" />

      <h3>{props.userName}</h3>

      <p className="dev-web-text">{props.postDescription}</p>

      <div className="comment">
        <input type="text" placeholder="Comment" />
        <div className="send">
          <img src={postCommentIcon} alt="" />
        </div>
      </div>
    </div>
  )
}