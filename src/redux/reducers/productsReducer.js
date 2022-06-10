import { productsActions } from "../actions/productsActions";

const INITIAL_STATE={
    productsList:[],
    productsFilter:[]
}

const productsReducer=(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case productsActions.setProducts:
            return{
            ...state,
            productsList:action.payload,
            productsFilter:[]

        }

        case productsActions.setProductDetail:
            return{
                ...state,
                productSelected: action.payload
            }

        case productsActions.filterPrice:
            const {beginPrice, endPrice} = action.payload

            const filtered = state.productsList.filter(product =>{
                const maxPrice = endPrice ?product.price <= endPrice :true
                const minPrice = beginPrice ?product.price >= beginPrice :true
                return minPrice&&maxPrice
            })
            return{
                ...state,
                productsFilter:filtered
                
            }

        
        default:
            return state;
    }
}

export default productsReducer;