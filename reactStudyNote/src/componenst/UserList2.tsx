import React from 'react';

const UserList2 = ({ users, onRemove, onToggle }: any) => {
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <b
            style={{
              cursor: 'pointer',
              color: user.active ? 'green' : 'black',
            }}
            onClick={() => onToggle(user.id)}
          >
            {user.username}
          </b>
          <span>({user.email})</span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default UserList2;

// 수정할 때 불변성을 지켜준다 => 배열의 데이터를 직접 건드리지 않는다는뜻
