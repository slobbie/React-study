// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";


// export const increase = () => ({ type:INCREASE });
// export const decrease = () => ({ type: DECREASE });

// const initialState = 0;

// export default function counter(state = initialState, action :any) {
//     switch (action.type) {
//         case INCREASE :
//            return state + 1;
//         case DECREASE:
//                return state -1;
//         default:
//             return state;
//     }
// }

const INCREASE = "counter/INCREASE"; 
const DECREASE = "counter/DECREASE"; 

export const increase = () => ({ type: INCREASE }); 
export const decrease = () => ({ type: DECREASE }); 

const initialState = 0; export default function counter(state = initialState, action : any) { 
    switch (action.type) { 
        case INCREASE: return state + 1; 
        case DECREASE: return state - 1; 
        default: return state; 
    
    } }

