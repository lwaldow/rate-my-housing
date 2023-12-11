'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Typography, Snackbar } from '@mui/material';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google'
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })

interface ListingInput {
    name: string;
    management: string;
    state: string;
    town: string;
    zip: string;
    address: string;
}

const submitButtonStyle = {
    padding: '8px',
    fontSize: '20px',
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

const cancelButtonStyle = {
    padding: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '2px solid',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
    lineHeight: '1.5'
};

export default function AddListingPage() {
    const router = useRouter();
    const [listingData, setListingData] = useState<ListingInput>({
        name: '',
        management: '',
        state: '',
        town: '',
        zip: '',
        address: '',
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const handleInputChange = (field: keyof ListingInput, value: string) => {
        setListingData({
            ...listingData,
            [field]: value,
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/post-listing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listingData),
            });

            if (response.ok) {
                const newListingId = await response.json();

                router.push(`/listings/${newListingId.data.listing_id}` );
            } else {
                setSnackbarSeverity('error');
                setSnackbarMessage('Failed to add new listing');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error submitting listing:', error);
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to add new listing');
            setSnackbarOpen(true);
        }
    };

    return (
        <div>
            <Typography className={playfair.className} variant="h4" textAlign="center" marginTop="10px" marginBottom="10px">
                Add New Listing
            </Typography>
            <form onSubmit={handleSubmit} className=" pl-32 pr-32">
                <TextField
                    label="Listing Name"
                    value={listingData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('name', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <TextField
                    label="Management"
                    value={listingData.management}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('management', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <TextField
                    label="State"
                    value={listingData.state}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('state', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <TextField
                    label="Town"
                    value={listingData.town}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('town', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <TextField
                    label="Zip"
                    value={listingData.zip}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('zip', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <TextField
                    label="Address"
                    value={listingData.address}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('address', e.target.value)
                    }
                    fullWidth
                    size='small'
                    margin="normal"
                />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link href="/" passHref>
                        <button
                            style={cancelButtonStyle}
                            className=" border text-rose-900 hover:text-rose-950 border-rose-900 hover:border-rose-950 mr-1"
                        >
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        style={submitButtonStyle}
                        className="bg-rose-900 hover:bg-rose-950"
                        disabled={!listingData.name || !listingData.address || !listingData.management || !listingData.state || !listingData.town || !listingData.zip}
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                severity={snackbarSeverity}
            />
        </div>
    );
}
