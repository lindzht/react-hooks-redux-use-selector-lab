import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector(state => state.users)
  const userCount = useSelector(state => state.users.length)

  return (
    <div>
      <ul>
        Users!
        { users.map((user) => {return(<li key={user.username}>{user.username}</li>)})}
        <h3>{userCount}</h3>
      </ul>
    </div>
  );
}

export default Users;
