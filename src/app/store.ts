import { INCREMENT, PLUS } from './actions';
export interface IAppState {
 counter: number;  
}

export const INITIAL_STATE: IAppState = {
    counter : 0     
}
export function rootReducer(state: IAppState, action): IAppState{
    debugger;
    switch (action.type){
        case INCREMENT: return {counter: state.counter+1};
        case PLUS: return {   counter: state.counter + action.payload}
    }
    return state;
}