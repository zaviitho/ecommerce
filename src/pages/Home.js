import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterNameThunk, getProductsThunk } from '../redux/actions/productsActions';
import { getProductsCategoriesThunk } from '../redux/actions/categoriesActions';
import  ProductCard  from "../components/ProductCard";
import '../styles/home.css'
import ModalFilter from "../components/ModalFilter";
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch()
  
  const productsList = useSelector(state=>state.products.productsList)
  const productsFilter = useSelector(state=>state.products.productsFilter)

  const products = productsFilter.length ? productsFilter : productsList
  
  const [nameProduct,setNameProduct]=useState('')
  
  useEffect(() =>{
    dispatch(getProductsThunk())
    dispatch(getProductsCategoriesThunk())
  },[dispatch])
  
  const searchProduct=e=>{
    e.preventDefault()
    dispatch(filterNameThunk(nameProduct))
    setNameProduct('')
  }
  console.log(products)
  return (
    <div className="home">
      <ModalFilter className='modal-filter'/>
      <form action="" onClick={searchProduct}>
        <Input
        type="text"
        placeholder="search by name"
        value={nameProduct}
        onChange={e=>setNameProduct(e.target.value)}
        ></Input>
        <Button><SearchIcon/></Button>
      </form>
      <ul className="home__products">
      
      {
        products.map(product =>(
        <li key={product.id}>
          <ProductCard product={product}/>
        </li>  
        ))
      }
      </ul>
    </div>
  );
};

export default Home;