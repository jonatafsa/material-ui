import postImage from '../assets/post-image.png';

import '../styles/components/post-thin.scss';

export default function PostThin() {
  return (
    <div className="post-thin">
      <img src={postImage} alt="Post Image" />

      <div className="post-data">
        <h3>Oceam</h3>
        <p className="occupation">Medical Assistant</p>
        <p>Lorem ipsum est, en imprimerie,</p>
      </div>
    </div>
  )
}