import { useRouter } from 'next/router';

const Card = ({ overallRating, content, reviewCount, style }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        ...style, // Apply additional styles passed through the style prop
      }}
    >
      <h2>Overall: {overallRating}</h2>
      <p>Comment: {content}</p>
      <p>Reviews: {reviewCount}</p>
    </div>
  );
};

export default function Page({ params }: { params: { listingId: string } }) {
  const galleryImages: string[] = [];

  const categories = [
    { title: 'Overall', rating: 4.0 },
    { title: 'Reputation', rating: 4.8 },
    { title: 'Happiness', rating: 3.9 },
    { title: 'Location', rating: 3.9 },
    { title: 'Amenities', rating: 3.5 },
    { title: 'Social', rating: 3.2 },
    { title: 'Transportation', rating: 2.8 },
  ];

  return (
    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
      ListingName: {params.listingId}

      {/* Rate Me and Compare Me buttons */}
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px', fontSize: '16px', fontWeight: 'bold', backgroundColor: 'maroon', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
          Rate Me
        </button>
        <button style={{ padding: '10px', fontSize: '16px', fontWeight: 'bold', backgroundColor: 'white', color: 'maroon', border: '2px solid maroon', borderRadius: '5px', cursor: 'pointer' }}>
          Compare Me
        </button>
      </div>

      {/* Categories with star ratings */}
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

      {/* Gallery of images */}
      <div style={{ border: '5px solid #ccc', padding: '80px', marginTop: '25px' }}>
        {/* Check if there are images in the gallery */}
        {galleryImages.length > 0 ? (
          // Map over the gallery images
          galleryImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              style={{ width: '250px', height: '300px', marginRight: '15px', marginBottom: '15px' }}
            />
          ))
        ) : (
          // When there are no current pictures of the listing
          <p>No images available yet.</p>
        )}
      </div>

      {/* Reviews using Card component */}
      <div>
        <Card overallRating="1" content="Review 1" style={{ fontSize: '20px', fontWeight: 'normal' }} />
        <Card overallRating="2" content="Review 2" style={{ fontSize: '20px', fontWeight: 'normal' }} />
        <Card overallRating="3" content="Review 3" style={{ fontSize: '20px', fontWeight: 'normal' }} />
      </div>
    </div>
  );
}
