import React from 'react';
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/product-card.css';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    console.log(product)
    return (

        <Card variant="outlined" className="product-card">
        <Link to={`/products/${product.id}`} className="product-card__link">
            <CardMedia
                component='img'
                image={product.productImgs?.[0]}
                className='product-card__image'
            />
            <CardContent className='product-card__content'>
                <Typography>
                {product.title}                
                </Typography>
                <Typography>
                    Price {product.price}
                </Typography>
            </CardContent>
        </Link>     
            <CardActions>
            <Button className="product-card__button">
            <AddShoppingCartIcon/>
            </Button>                               
            </CardActions>
         

        </Card>

    );
};

export default ProductCard;