import React from 'react';

const Hello = ({ color, name, isSpecial }: any) => {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      {/* {isSpecial && <b>*</b>} */}
      안녕하세요 {name}
    </div>
  );
};

Hello.defaultProps = {
  name: '이름없음',
  color: 'red',
};

export default Hello;

// 삼항연산자를 사용한 조건부 렌더링은 주로 특정 조건에 따라 보여줘야 하는 내용이 다를때 사용

// 단순히 특정조건이 true 이면 보여주고, 그렇지 않다면 숨겨주는 단순한 상황에서는
// && 연산자가 더 간편
