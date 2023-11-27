import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { ListingDTO } from '@/app/api/util/types';
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })


export default function RootLayout({ listing }: { listing: ListingDTO }) {
    const buttonStyle = {
        padding: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center' as const,
        lineHeight: '1.5'
    };

    const blankImageStyle = {
        width: '350px',
        height: '135px',
        marginRight: '16px',
        border: '3px solid gray',
    };

    return (
        <Card key={listing.listing_id} sx={{ minHeight: '345px' }}>
            <CardContent sx={{ cursor: 'pointer', mb: 1 }}>
                <div className='text-lg flex justify-between'>
                    <span><b className={playfair.className} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: 25 }}>{listing.name + ' '}</b></span>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Rating name="read-only" value={listing.overallRating} readOnly />
                    </Box>
                </div>
                <Typography sx={{ fontSize: 16, color: 'gray', margintop: 1 }}>{listing.address}</Typography>
                <Typography sx={{ fontSize: 16 }}>{listing.management}</Typography>
                <Typography sx={{ fontSize: 16 }}>{"ID: " + listing.listing_id}</Typography>
                <img src="/path/to/blank-white-image.png" alt="Blank White" style={blankImageStyle} />
            </CardContent>
            <CardActions>
                <div style={{ marginLeft: 'auto' }}>
                    <Link href={`/listings/${listing.listing_id}/`}>
                        <button style={buttonStyle} className="bg-rose-900 hover:bg-rose-950 mr-1">
                            About Me
                        </button>
                    </Link>
                    <Link href={`/listings/${listing.listing_id}/rate`}>
                        <button style={buttonStyle} className="bg-rose-900 hover:bg-rose-950">
                            Rate Me
                        </button>
                    </Link>
                </div>
            </CardActions>
        </Card>
    )
}