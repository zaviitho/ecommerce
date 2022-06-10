import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';
import productsReducer from './productsReducer';


const reducer = combineReducers({
    login: loginReducer,
    loading: loadingReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    
});

export default reducer;