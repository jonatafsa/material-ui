import './styles/main.scss'

import { Button } from './lib/Button';
import Card from './lib/Card';
import InputSwitch from './lib/InputSwitch';
import Post from './lib/Post';
import PostComment from './lib/PostComment';
import PostThin from './lib/PostThin';
import Toast, { toast } from './lib/Toast';
import UserCard from './lib/UserCard';
import UserCardThin from './lib/UserCardThin';
import UsersCard from './lib/UsersCard';

import accessImg1 from './assets/access-1.svg';
import accessImg2 from './assets/access-2.svg';
import accessImg3 from './assets/access-3.svg';
import userThinImage from './assets/user-thin.png';
import userImage from './assets/user.png';
import user1 from './assets/user-1.png';
import user2 from './assets/user-2.png';
import user3 from './assets/user-3.png';
import user4 from './assets/user-4.png';
import imgPost from './assets/post.png';
import userAvatar from './assets/user-5.png';
import postCommentImg from './assets/post-comment.png';
import postImage from './assets/post-image.png';

function App() {

  const users = [
    {
      name: 'Jane Cooper',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elitquas quo autem.',
      image: user3,
      gender: "woman"
    },
    {
      name: 'Esther Howard',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis ',
      image: user1,
      gender: "man"
    },
    {
      name: 'Leslie Alexander',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis ',
      image: user2,
      gender: "man"
    },
    {
      name: 'Guy Howkins',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis.',
      image: user4,
      gender: "woman"
    }
  ]


  return (
    <div className="container">
      <h1>UI-DEVWEB</h1>

      <UserCard
        name="Jane Cooper"
        occupation=" Medical Assistant"
        image={userImage}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos sed recusandae fugiat, ipsum, error repellendus
        temporibus nihil nemo corrupti aut quos expedita accusantium a
        odit, eaque beatae rem soluta delectus.`}
      />

      <UsersCard
        users={users}
      />

      <UserCardThin
        userId="ID_HERE"
        name="Jane Cooper"
        occupation=" Medical Assistant"
        image={userThinImage}
        description={`Lorem ipsum est, en imprimerie,`}
      />

      <Post
        userAvatar={userAvatar}
        userName="Jane Cooper"
        userDescription="Le lorem ipsum est, in imprimerie"
        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam minima beatae, provident dicta maxime distinctio delectus, similique rem nesciunt molestiae, doloribus sapiente."
        postImage={imgPost}
        link="#link-to"
      />

      <Card
        title="40% Get access"
        description="Get access to premium features"
        // image={accessImg1}
        icon1={accessImg1}
        icon2={accessImg2}
        icon3={accessImg3}
        link="#Get-access"
      />

      <PostThin
        userName="Jane Cooper"
        userDescription="Le lorem ipsum est, in imprimerie"
        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam minima beatae."
        postImage={postImage}
      />

      <PostComment
        userName="Jane Cooper"
        postDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam minima beatae."
        postImage={postCommentImg}
      />

      <InputSwitch
        id="input-switch-1"
        checked={false}
      />

      <InputSwitch
        id="input-switch-2"
        checked={true}
      />

      <Button
        text="primary"
        type="button"
        class="primary"
        onClick={() => toast.primary({ message: 'Toast primary button, Example!' })}
      />


      <Button
        text="secondary"
        type="button"
        class="secondary"
        onClick={() => toast.secondary({ message: 'Toast secondary button, Example!' })}
      />


      <Button
        text="warning"
        type="button"
        class="warning"
        onClick={() => toast.info({ message: 'Toast warning button, example!' })}
      />


      <Button
        text="success"
        type="button"
        class="success"
        onClick={() => toast.success({ message: 'Toast Success button, example!' })}
      />

      <Button
        text="danger"
        type="button"
        class="danger"
        onClick={() => toast.error({ message: 'Toast error message, example new!' })}
      />

      <Toast />
    </div>
  );
}

export default App;
