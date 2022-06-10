import  {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {getProductDetailThunk} from '../redux/actions/productsActions';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Button } from "@mui/material";
import '../styles/productDetail.css';
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductCard } from "../components";
const ProductDetail = ({categoryProduct}) => {
  const {id}= useParams()
  const dispatch= useDispatch()
  const productsList = useSelector(state => state.products.productsList)

  const [nroItems, setNroItems] = useState(0)

  const [productDetail, setProductDetail]=useState({})
  const [productDetailCategory, setProductDetailCategory]=useState('')

  const productListFilter=productsList.filter(product => product.category.name===productDetailCategory) 

  useEffect(() => {
    dispatch(getProductDetailThunk(id))
    .then((response) =>{
      setProductDetail(response.payload)  
      setProductDetailCategory(productDetail.category)

    })
  },[dispatch,id,productDetail.category])
  
 
  console.log(productListFilter)
  return (
    <div className='product-detail' key={productDetail.id}>
        <nav >
        
        <ul className='product-detail__nav'>
        <Link to='/' className='product-detail__link'>
          Home
        </Link>
          <li>{productDetail.title}</li>
        </ul>
        </nav>
        <div className='product-detail__wrapper'>
          <div >
            <img src={productDetail.productImgs?.[0]} alt="" className='product-detail__img' />
          </div>
          <div className='product-detail__info'>
            <h3>{productDetail.title}</h3>
            <p className='paragraph'>{productDetail.description}</p>
            <div className='product-detail__sec'>
              <div className='product-detail__price'>
                <span className='paragraph'>Price</span>
                <span>${productDetail.price}</span>
              </div>
              <div className='product-detail__buttons'>
                <Button onClick={()=>setNroItems(nroItems+1)}>+</Button>
                <div>{nroItems}</div>
                <Button onClick={()=>setNroItems(nroItems-1)}>-</Button>
              </div>
              
            </div>
            <Button>Add to cart <AddShoppingCartIcon/></Button>
          </div>
        </div>
        <div className='similar-items'>
          <h3 className='similar-items__name'>Similar Products</h3>
          <div className='card-items'>
          {
            productListFilter.map((product)=>(
              <ProductCard product={product} key={product.id}/>
            ))
          }
          </div>
        </div>
    </div>
  );
};

export default ProductDetail;