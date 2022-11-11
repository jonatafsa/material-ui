import './styles/global.scss'

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

function App() {

  const users = [
    {
      name: 'Jane Cooper',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elitquas quo autem.',
      image: "/assets/user-3.png",
      gender: "woman"
    },
    {
      name: 'Esther Howard',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis ',
      image: "/assets/user-1.png",
      gender: "man"
    },
    {
      name: 'Leslie Alexander',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis ',
      image: "/assets/user-2.png",
      gender: "man"
    },
    {
      name: 'Guy Howkins',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quis.',
      image: "/assets/user-4.png",
      gender: "woman"
    }
  ]


  return (
    <div className="container">
      <h1>UI-DEVWEB</h1>

      <UserCard
        name="Jane Cooper"
        occupation=" Medical Assistant"
        image="/assets/user.png"
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
        image="/assets/user-thin.png"
        description={`Lorem ipsum est, en imprimerie,`}
      />

      <Post />

      <Card />

      <PostThin />

      <PostComment />

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
