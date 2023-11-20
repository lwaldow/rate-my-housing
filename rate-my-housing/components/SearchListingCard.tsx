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

    return (
        <Card key={complex.complex_id}>
            <CardContent sx={{ cursor: 'pointer', mb: 14 }}>
                <div className='text-lg flex justify-between'>
                    <span>{complex.name + ' '}</span>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={complex.stars} readOnly />
                    </Box>
                </div>
                <Typography sx={{ fontSize: 16 }}>{complex.management}</Typography>
                <Typography sx={{ fontSize: 16 }}>{"ID: " + complex.complex_id}</Typography>
            </CardContent>
            <CardActions>
                <Link href={`/listings/${complex.complex_id}/`}style={buttonStyle}>About Me</Link>
            </CardActions>
        </Card>
    )
}