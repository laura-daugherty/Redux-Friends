import React, {useEffect, useState} from 'react';
import { axiosAuth } from './axiosAuth';
import AddFriend from "./AddFriend"

const FriendsList = (props) =>{
  console.log(props)
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
    }, [])
    return (
      <div>
        {friends.map(friend => {
          return (
            <div
              key={friend.id}
            >
              {friend.name}
              {friend.age}
              {friend.email}
            </div>
          )
        })}
        <AddFriend setFriends={setFriends} />
      </div>
    )
  }
export default FriendsList
    
  
