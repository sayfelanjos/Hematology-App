import React from 'react';
import './UserList.css';

interface UserListProps {
  items: {id: string, text: string}[];
};

const UserList: React.FunctionComponent<UserListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
};

export default UserList;