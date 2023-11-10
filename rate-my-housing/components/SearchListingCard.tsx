import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


export default function RootLayout({ complex }: { complex: Complex }) {
    return (
        <Card key={complex.complex_id}>
            <CardContent sx={{ cursor: 'pointer', mb: 14 }}>
                <Typography variant="h5">{complex.name}</Typography>
                <Typography sx={{ fontSize: 16 }}>{complex.management}</Typography>
                <Typography sx={{ fontSize: 16 }}>{"ID: " + complex.complex_id}</Typography>
            </CardContent>
            <CardActions>
                <Link href={`/listings/${complex.complex_id}/`}>About</Link>
            </CardActions>
        </Card>
    )
}