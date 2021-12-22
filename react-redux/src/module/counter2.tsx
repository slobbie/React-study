const INCREASE = "counter2/INCREASE"; 
const initialState = { value: 0, }; 
export const increase = (num : number) => ({ type: INCREASE, number: num, }); 
export default function ㅊounter2(state = initialState, action : any) { 
    switch (action.type) { 
        case INCREASE: 
        return { ...state, value: state.value + parseInt(action.number) }; 
        default: return state; 
    } 
}

