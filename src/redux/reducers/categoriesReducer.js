import {categoriesActions} from '../actions/categoriesActions';

const INITIAL_STATE=[]

const categoriesReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case categoriesActions.getProductCategory:
            return action.payload

        default:
            return state;
    }
}

export default categoriesReducer;