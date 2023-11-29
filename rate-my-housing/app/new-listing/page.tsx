'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Typography } from '@mui/material';
import Link from 'next/link';

export default function AddListingPage() {
    const router = useRouter();
    const [listingData, setListingData] = useState({
        name: '',
        // Add other necessary fields for the new listing
    });

    const handleInputChange = (field: string, value: string) => {
        setListingData({
            ...listingData,
            [field]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            // Implement submission logic here using fetch or any other method
            // Example: POST request to API endpoint to add a new listing
            // Redirect to listing details page after successful submission
            router.push('/listings/[newListingId]', `/listings/${newListingId}`);
        } catch (error) {
            console.error('Error submitting listing:', error);
            // Handle error, display error message or toast
        }
    };

    return (
        <div>
            <Typography variant="h4" textAlign="center" marginTop="10px" marginBottom="10px">
                Add New Listing
            </Typography>
            <form onSubmit={handleSubmit}>
                {/* Replace the input fields with appropriate form fields */}
                <TextField
                    label="Listing Name"
                    value={listingData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    fullWidth
                    margin="normal"
                />
                {/* Add other input fields for listing details */}
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
        </div>
    );
}
