'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Typography, Snackbar } from '@mui/material';
import Link from 'next/link';

interface ListingInput {
    name: string;
    management: string;
    state: string;
    town: string;
    zip: string;
    address: string;
}

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
                router.push(`/listings/${newListingId}`);
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
            <Typography variant="h4" textAlign="center" marginTop="10px" marginBottom="10px">
                Add New Listing
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Listing Name"
                    value={listingData.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange('name', e.target.value)
                    }
                    fullWidth
                    margin="normal"
                />
                {/* Other TextFields for management, state, town, zip, and address */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link href="/listings" passHref>
                        <button className="cancel-button">Cancel</button>
                    </Link>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={!listingData.name /* Add other necessary validations */}
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
