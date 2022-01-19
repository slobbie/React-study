import React, { useContext } from 'react';
import { UserDispatch } from './Page3';

const UserList2 = ({ users }: any) => {
  const dispatch = useContext(UserDispatch);
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <b
            style={{
              cursor: 'pointer',
              color: user.active ? 'green' : 'black',
            }}
            onClick={() => {
              dispatch({ type: 'TOGGLE_USER', id: user.id });
            }}
          >
            {user.username}
          </b>
          <span>({user.email})</span>
          <button
            onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(UserList2);

// 수정할 때 불변성을 지켜준다 => 배열의 데이터를 직접 건드리지 않는다는뜻
