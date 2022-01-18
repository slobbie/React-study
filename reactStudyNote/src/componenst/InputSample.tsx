// input 상태관리

import { useState } from 'react';

const InputSample = () => {
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text} </b>
      </div>
    </div>
  );
};
export default InputSample;

// input 의 onChange 이벤트를 사용,

// 이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데

// 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됨.

// 이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있슴.

// 이 값을 useState 를 통해서 관리
