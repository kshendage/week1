import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh', // Full viewport height
                padding: 0, // Remove any padding
                marginTop: 0, // Remove margin-top to have no space between navbar and image
                position: 'relative', // Ensure positioning of text over the image
            }}
        >
            {/* Text placed above the image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%', // Adjust based on the desired vertical position
                    left: '50%',
                    transform: 'translateX(-50%)', // Centers text horizontally
                    textAlign: 'center',
                    color: 'white',
                    width: '100%',
                    zIndex: 1, // Ensures text appears above the image
                }}
            >
                <Typography variant="h3" sx={{ marginBottom: 2 }}>
                    Welcome to E-Commerce
                </Typography>
                <Typography variant="h6">
                    Discover amazing products at the best prices!
                </Typography>
            </Box>

            {/* Image component from the public/images folder */}
            <Box
                component="img"
                src="/images/back.jpg"  // Image from public/images
                alt="Banner"
                sx={{
                    width: '100%',
                    maxHeight: '90vh', // Limit the max height of the image (90% of the viewport height)
                    objectFit: 'cover', // Ensures the image covers the space properly without distortion
                }}
            />
        </Box>
    );
};

export default Home;
