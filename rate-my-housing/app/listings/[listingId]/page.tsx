import { useRouter } from 'next/router';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })
import React from "react";
import Link from "next/link"

const Card = ({ overallRating, content, reviewCount, style }) => {
  const forNow = 3;

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        ...style,
      }}
    >
     <h2>Overall: {overallRating}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {[...Array(forNow)].map((_, i) => (
          <img
            key={i}
            src="/staricon.png"
            alt="star"
            style={{ width: '20px', height: '20px', marginRight: '5px' }}
          />
        ))}
      </div>
      <p>Comment: {content}</p>
      <p>Reviews: {reviewCount}</p>
    </div>
  );
};

export default function Page({ params }: { params: { listingId: string } }) {
  const galleryImages: string[] = [];

  //can change later with what is being rated
  const categories = [
    { title: 'Overall', rating: 4.0 },
    { title: 'Reputation', rating: 4.8 },
    { title: 'Happiness', rating: 3.9 },
    { title: 'Location', rating: 3.9 },
    { title: 'Amenities', rating: 3.5 },
    { title: 'Social', rating: 3.2 },
    { title: 'Transportation', rating: 2.8 },
  ];

  const rateButtonStyle = {
    padding: '10px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    backgroundColor: 'maroon', 
    color: 'white', 
    border: 'None', 
    borderRadius: '7px', 
    cursor: 'pointer'
  };

  const compareButtonStyle = {
    padding: '10px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    backgroundColor: 'white', 
    color: 'maroon', 
    border: '2px solid maroon', 
    borderRadius: '5px', 
    cursor: 'pointer'
  };

  return (
    <div style={{fontSize: '20px', fontWeight: 'bold' }}>
      <span className={playfair.className} style={{ fontSize: '40px' }}>
        ListingName: {params.listingId}
      </span>
      {/* create rate and compare pages */}
      {/* rate me and compare me buttons */}
      <div style={{ marginTop: '20px' }}>
        <Link href="/rate" style={rateButtonStyle}> Rate Me</Link>
        <Link href="/compare" style={compareButtonStyle}>Compare Me</Link>
      </div>

      {/* categories with star ratings */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '50px' }}>
        {categories.map((category, index) => (
          <div key={index} style={{ marginRight: '50px', marginBottom: '50px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{category.title}:</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(Math.floor(category.rating))].map((_, i) => (
                <img
                  key={i}
                  src="/staricon.png"
                  alt="star"
                  style={{ width: '30px', height: '30px', marginRight: '5px' }}
                />
              ))}
              {category.rating % 1 >= 0.5 ? (
                <img
                  src="/halfstar.png"
                  alt="half star"
                  style={{ width: '30px', height: '30px', marginRight: '5px' }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* gallery of images */}
      <div style={{ border: '5px solid #ccc', padding: '80px', marginTop: '25px' }}>
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

      {/* reviews using card component */}
      <div>
        <Card overallRating="1" content="Review 1" style={{ fontSize: '20px', fontWeight: 'normal' }} />
        <Card overallRating="2" content="Review 2" style={{ fontSize: '20px', fontWeight: 'normal' }} />
        <Card overallRating="3" content="Review 3" style={{ fontSize: '20px', fontWeight: 'normal' }} />
      </div>
    </div>
  );
}
