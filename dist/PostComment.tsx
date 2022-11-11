import postCommentImg from '../assets/post-comment.png';
import postCommentIcon from '../assets/send-icon.svg';
import '../styles/components/post-comment.scss';

export default function PostComment() {
  return (
    <div className="post-comment">
      <img src={postCommentImg} alt="" />

      <h3>Janne Cooper</h3>

      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification.
      </p>

      <div className="comment">
        <input type="text" placeholder="Comment" />
        <div className="send">
          <img src={postCommentIcon} alt="" />
        </div>
      </div>
    </div>
  )
}