import { useReducer } from 'react';

// 방법 1
// const Count = () => {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     setNumber((prevNumber) => prevNumber + 1);
//   };
//   const onDecrease = () => {
//     setNumber((prevNumber) => prevNumber - 1);
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// };

// export default Count;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Count = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    if (number > 0) {
      dispatch({ type: 'DECREMENT' });
    }
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Count;
