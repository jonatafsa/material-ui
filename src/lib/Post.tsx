import imgIcon from '../assets/img-icon.svg';
import imgIconDark from '../assets/img-icon-1.svg';


import imgPost from '../assets/post.png';
import userImg from '../assets/user-5.png';
import linkIcon from '../assets/link-icon.svg';
import '../styles/components/post.scss'

export default function Post() {
  return (
    <div className="post">
      <img src={imgPost} alt="Postagem" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        quisquam minima beatae, provident dicta maxime distinctio delectus,
        similique rem nesciunt molestiae, doloribus sapiente.
      </p>

      <div className="user-data">
        <div className="user-content">
          <img src={userImg} alt="Icone" />
          <div>
            <h4>Jane Cooper</h4>
            <p>Le lorem ipsum est, in imprimerie</p>
          </div>
        </div>

        <img src={linkIcon} alt="" />
      </div>
    </div>
  )
}