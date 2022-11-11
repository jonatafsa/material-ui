import moreIcon from '../assets/more.svg';

import '../styles/components/user-card.scss'

interface UserCardProps {
  name: string;
  occupation: string;
  image: string;
  description: string;
}

export default function UserCard(props: UserCardProps) {
  return (
    <div className="user-card">
      <img src={moreIcon} className="more-icon" />
      <div className="user-header">
        <img src={props.image} alt="User" />
        <div className="user-info">
          <h3>{props.name}</h3>
          <p>{props.occupation}</p>
        </div>
      </div>

      <p className="description">{props.description}</p>
    </div>
  )
}