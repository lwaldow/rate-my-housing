'use client';

import { useRouter } from 'next/navigation'
import RatingCard from "@/components/RatingCard";
import { Alert, Snackbar, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

interface ReviewData {
    text_review: string;
    kitchen: number;
    bathroom: number;
    parking: number;
    location: number;
    pet: number;
    storage: number;
    laundry: number;
}

export default function Page({ params }: { params: { listingId: string } }) {
    const val = 1
    const [review, setReview] = React.useState<ReviewData>({
        text_review: '',
        kitchen: val,
        bathroom: val,
        parking: val,
        location: val,
        pet: val,
        storage: val,
        laundry: val,
    });

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

    const router = useRouter()

    const [submitting, setSubmitting] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    const handleErrorClose = () => {
        setErrorOpen(false);
    };
    const isDisabled = Object.values(review).some((value) => typeof value === 'number' && value <= 0);

    const handleAttributeChange = (attribute: string, value: number) => {
        setReview(prevReview => ({
            ...prevReview,
            [attribute]: value,
        }));
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const response = await fetch(`http://localhost:3000/api/review-listing?listingId=${params.listingId}`, {
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ review }),
            });

            if (response.ok) {
                setSuccessOpen(true);
                setTimeout(() => {
                    router.push(`/listings/${params.listingId}`, undefined, { unstable_skipClientCache: true });
                }, 300)
            }
            else {
                console.log('Failed to submit review');
                setErrorOpen(true);
            }
        } catch (error) {
            console.log('Error:', error);
            setErrorOpen(true);
        } finally {
            setTimeout(() => {
                setSubmitting(false);
            }, 300);
        }
    };

    return (
        <div className=" pb-5">
            {/* Your UI layout... */}
            <div>
                <div style={{ border: "2px solid #ccc" }}>
                    <Typography variant="h4" fontStyle="" sx={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>
                        Rate This Listing:
                    </Typography>
                </div>
                {Object.keys(review).map((attribute, index) => {
                    if (typeof review[attribute as keyof ReviewData] === 'number') {
                        return (
                            <RatingCard
                                key={index}
                                attribute={attribute}
                                value={review[attribute as keyof ReviewData] as number}
                                onChange={handleAttributeChange}
                            />
                        );
                    }
                    return null;
                })}
                <div className='flex justify-center'>
                    <TextField
                        multiline
                        value={review.text_review}
                        onChange={(e) => setReview({ ...review, text_review: e.target.value })}
                        placeholder="Add your review here..."
                        style={{
                            width: "800px",
                            padding: '8px',
                        }}
                        minRows={5}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link href={`/listings/${params.listingId}/`} passHref>
                        <button style={{ ...cancelButtonStyle, marginRight: '10px' }} className=" border text-rose-900 hover:text-rose-950 border-rose-900 hover:border-rose-950 mr-1">Cancel</button>
                    </Link>
                    <button
                        disabled={isDisabled || submitting}
                        style={submitButtonStyle}
                        className="bg-rose-900 hover:bg-rose-950"
                        onClick={handleSubmit}
                    >
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
            <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                    Review submitted successfully!
                </Alert>
            </Snackbar>
            <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
                    Failed to submit review. Please try again.
                </Alert>
            </Snackbar>
        </div>
    );
}