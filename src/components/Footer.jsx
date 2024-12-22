import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                py: 2,
                backgroundColor: '#1976d2',
                color: 'white',
                width: '100%',
                position: 'absolute', // Make the footer stay at the bottom of the page
                bottom: 0,
            }}
        >
            
        </Box>
    );
};

export default Footer;
