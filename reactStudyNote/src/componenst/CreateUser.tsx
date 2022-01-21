import React, { useContext, useRef } from 'react';
import useInputs from './hooks/useInputs';
import { UserDispatch } from './Page3';

const CreateUser = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      id: nextId.current,
      username,
      email,
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name='username'
        placeholder='계정명'
        onChange={onChange}
        value={username}
      />
      <input
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};
export default React.memo(CreateUser);

// useRef의 또 다른 역할

// 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리
// useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않습니다.
