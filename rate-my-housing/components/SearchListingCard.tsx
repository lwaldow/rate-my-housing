import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';



export default function RootLayout({ complex }: { complex: Complex }) {
    const buttonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        backgroundColor: 'maroon',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '1.5'
      };
      
      const blankImageStyle = {
        width: '350px',
        height: '135px',
        marginRight: '16px',
        border: '3px solid gray',
    };

    return (
        <Card key={complex.complex_id}>
            <CardContent sx={{ cursor: 'pointer', mb: 1 }}>
                <div className='text-lg flex justify-between'>
                <span><b style={{fontFamily: 'Playfair Display, serif',fontWeight: 800, fontSize: 25}}>{complex.name + ' '}</b></span>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Rating name="read-only" value={complex.stars} readOnly />
                    </Box>
                </div>
                <Typography sx={{ fontSize: 16, color: 'gray', margintop: 1 }}>{complex.address}</Typography>
                <Typography sx={{ fontSize: 16}}>{complex.management}</Typography>
                <Typography sx={{ fontSize: 16 }}>{"ID: " + complex.complex_id}</Typography>
                <img src="/path/to/blank-white-image.png" alt="Blank White" style={blankImageStyle} />
            </CardContent>
            <CardActions>
            <div style={{ marginLeft: 'auto' }}>
                <Link href={`/listings/${complex.complex_id}/`}style={buttonStyle}>About Me</Link>
                <Link href={`/listings/${complex.complex_id}/rate`}style={buttonStyle}>Rate Me</Link>
            </div>
            </CardActions>
        </Card>
    )
}