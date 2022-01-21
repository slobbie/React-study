import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
//callback 은 api 요청을 시작하는 함수 // [] 는 컴포넌트가 가장 처음 렌더링 될때  만 호출하고 싶다는 의미
const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false, //skip = false 은 데이터를 요청 할시에만 보여주고 아닐시에는 false 유지하기 위한 장치
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return; //skip 파라미터의 기본 값을 false 로 지정하고, 만약 이 값이 true 라면 useEffect 에서 아무런 작업도 하지 않도록 설정
    fetchData();
  }, deps);

  return [state, fetchData]; // 상태 와 fetchData 반환
};

export default useAsync;
