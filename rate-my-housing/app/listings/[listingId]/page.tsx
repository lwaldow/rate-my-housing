
import { useRouter } from 'next/router';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })
import React from "react";
import Link from "next/link"
import { ListingDTO, ReviewDTO } from '@/app/api/util/types';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';

async function getListing(listingId: string): Promise<ListingDTO> {
  const res = await fetch(`http://localhost:3000/api/get-listing?listingId=${listingId}`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const json = await res.json()
  return json.data as ListingDTO;
}

const renderAttributeSubratings = (review: ReviewDTO) => {
  const numericalAttributes: string[] = ['kitchen', 'bathroom', 'parking', 'location', 'pet', 'storage', 'laundry'];

  return (
    <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > div': {
            marginRight: '15px',
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '3px',
          },
        }}
      >
      {Object.entries(review).map(([key, value]) => {
        // Filter based on numerical attribute names
        if (numericalAttributes.includes(key)) {
          return (
            <div key={key}>
              <Typography variant="body1" fontWeight="bold">
                {key.replace(/^\w/, (c) => c.toUpperCase())}:
              </Typography>
              <Rating name={key} value={value as number} readOnly size="small" precision={0.1} />
            </div>
          );
        }
        return null;
      })}
    </Box>
  );
};

export default async function Page({ params }: { params: { listingId: string } }) {
  const listingDTO: ListingDTO = await getListing(params.listingId);
  const galleryImages: string[] = [];

  const rateButtonStyle = {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    border: 'None',
    borderRadius: '7px',
    cursor: 'pointer'
  };

  const compareButtonStyle = {
    padding: '9px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    border: '2px solid',
    borderRadius: '5px',
    cursor: 'not-allowed'
  };

  return (
    <div style={{ fontSize: '20px', fontWeight: 'bold' }} className='p-4'>
      <span className={playfair.className} style={{ fontSize: '40px' }}>
        {listingDTO.name}
      </span>
      <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '24px', marginBottom: '20px' }}>
        <Typography variant="subtitle1" fontWeight="bold" mr={1}>
          Overall Rating:
        </Typography>
        <Rating value={listingDTO.overallRating} readOnly precision={0.1} />
        <Typography variant="subtitle1" ml={1}>
          {listingDTO.overallRating.toFixed(1)}
        </Typography>
      </Box>
      <div style={{ marginTop: '20px' }}>
        <Link href={`/listings/${params.listingId}/rate`} className='mr-4 bg-rose-900 hover:bg-rose-950' style={rateButtonStyle}> Rate Me</Link>
        <Link href="/compare" style={compareButtonStyle} className=' text-rose-950 border-rose-950'>Compare Me</Link>
      </div>

      <Box sx={{
        marginTop: '50px',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Address:
        </Typography>
        <Typography variant="body1">
          {listingDTO.address}, {listingDTO.town}, {listingDTO.state}, {listingDTO.zip}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mt={2}>
          Management:
        </Typography>
        <Typography variant="body1">{listingDTO.management}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '50px',
          '& > div': {
            marginRight: '50px',
            marginBottom: '50px',
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '5px',
          },
        }}
      >
        {Object.entries(listingDTO.averageRatings).map(([category, rating], index) => (
          <div key={index}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              {category.replace(/^\w/, (c) => c.toUpperCase())}:
            </Typography>
            <Rating name={category} value={rating} readOnly size="large" precision={0.1} />
          </div>
        ))}
      </Box>

      {/* gallery of images */}
      <div style={{ border: '3px solid #ccc', padding: '175px', marginBottom: '25px' }}>
        {/* check if there are images in the gallery */}
        {galleryImages.length > 0 ? (
          // map over the gallery images
          galleryImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              style={{ width: '250px', height: '300px', marginRight: '15px', marginBottom: '15px' }}
            />
          ))
        ) : (
          // when there are no current pictures of the listing
          <p>No images available yet.</p>
        )}
      </div>
      <div>
        <Typography variant="h4" fontWeight="bold">
          Ratings
        </Typography>
        {listingDTO.reviews.map((review: ReviewDTO, index) => (
          <div style={{ border: '1px solid #ccc', marginTop: '20px' }}>
            <div key={index} style={{ padding: '20px' }}>
              <h2>Review {index + 1}</h2>
              <Rating value={review.overallRating} readOnly size="large" precision={0.1} />
              <p className=' text-base font-normal'>{review.text_review}</p>
            </div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Subreviews
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {renderAttributeSubratings(review)}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>

    </div>
  );
}
