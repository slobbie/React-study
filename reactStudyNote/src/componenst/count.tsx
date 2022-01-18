import { useState } from 'react';

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

const Count = () => {
  const [number, setNumber] = useState(0);

  const onDecrease = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Count;
