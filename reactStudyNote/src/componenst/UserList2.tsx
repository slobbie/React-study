import React from 'react';

const UserList2 = ({ users }: any) => {
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <b>{user.username}</b> <span>({user.email})</span>
        </div>
      ))}
    </div>
  );
};

export default UserList2;
