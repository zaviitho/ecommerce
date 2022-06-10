import axios from 'axios';
import {setIsLoading} from './loadingActions'


export const categoriesActions = {
    getProductCategory: 'GET_PRODUCT_CATEGORY'
}
export const getProductsCategories = id => ({
    type: categoriesActions.getProductCategory,
    payload: id
});

export const  getProductsCategoriesThunk=() =>{
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => dispatch(getProductsCategories(res.data.data.categories)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}

