import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  // styled(Box) box 컴포넌트의 속성을 계승 시키는 개념
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <Father>
      <Box bgColor='teal'></Box>
      <Circle bgColor='tomato' />
    </Father>
  );
}

export default App;
