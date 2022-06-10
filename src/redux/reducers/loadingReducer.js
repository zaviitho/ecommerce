import {loadingActions} from "../actions/loadingActions";

const INITIAL_STATE = {
    isLoading: false,  
}
const loadingReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case loadingActions.setIsLoading:
            return {
                ...state,
                isloading:action.payload
            }
        default:
            return state;
    }
}

export default loadingReducer;