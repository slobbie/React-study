import { useCallback, useMemo, useReducer, useRef } from 'react';
import CreateUser from './CreateUser';
import MarginTop from './MarginTop';
import UserList2 from './UserList2';

// interface usersDataModel {
//   id: Number;
//   username: string;
//   email: string;
//   active: Boolean;
// }

const countActiveUsers = (users: any) => {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user: any) => user.active).length; //active 값이 true 인 사용자의 수를 체크
};

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user: any) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user: any) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const Page2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div className='page'>
      <div className='pageBox'>
        <MarginTop margin={50} />
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList2 users={users} onToggle={onToggle} onRemove={onRemove} />
        <div> 할성사용자 수 : {count}</div>
      </div>
    </div>
  );
};

export default Page2;
