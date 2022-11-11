import React from "react";
import './styles/global.scss'
import './styles/components/users-card.scss'

interface Users {
  name: string;
  description: string;
  image: string;
  gender: string;
}

interface UsersProps {
  users: Users[]
}

export default function UsersCard(props: UsersProps) {
  return (
    <div className="users-card">

      {props.users.map(user => (
        <div className="user">
          <img src={user.image} alt="" />

          <div className="user-data">
            <h3 style={user.gender === "woman" ? { color: "var(--main-color-2)" } : {}}>{user.name}</h3>
            <p>{user.description}</p>
          </div>
        </div>
      ))}

    </div>
  )
}