import React from 'react';
import ProductCard from './ProductCard';
import { Grid, Container } from '@mui/material';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: '/images/product1.jpg' },
        { id: 2, name: 'Product 2', price: '$15', image: '/images/product2.jpg' },
        { id: 3, name: 'Product 3', price: '$20', image: '/images/product3.jpg' },
        { id: 4, name: 'Product 4', price: '$25', image: '/images/product4.jpg' },
    ];

    return (
        <Container
            sx={{
                maxWidth: 'none', // Removes container width restriction
                padding: 0, // Removes padding around the container
                marginTop: '16px', // Ensures some spacing from the top, adjust as needed
                width: '100%', // Takes up full width of the screen
            }}
        >
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
