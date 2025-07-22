import React from 'react';
import './imggallery.css';

const ImageGrid = () => {
  const images = [
    { 
      id: 1, 
      src: 'https://media.istockphoto.com/id/1368376033/photo/woman-planting-young-seedlings-of-lettuce-salad-in-the-vegetable-garden.jpg?s=612x612&w=0&k=20&c=Yi7t_H0pnfVqqksWrVqLPO81Q2farbDt2gOa4IhvGaU=', 
      colSpan: 2, 
      rowSpan: 2,
      title: "Bonsai Plants",
      description: "Beautiful miniature trees for your home",
      buttonText: "Shop Now"
    },
    { 
      id: 2, 
      src: 'https://plus.unsplash.com/premium_photo-1679765926730-78765a8b7802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VlZGxpbmdzfGVufDB8fDB8fHww', 
      colSpan: 2, 
      rowSpan: 1,
      title: "Seedlings",
      description: "Grow your own vegetables",
      buttonText: "View Seeds"
    },
    { 
      id: 3, 
      src: 'https://media.istockphoto.com/id/1328831048/photo/interior-design-of-retro-living-room-with-stylish-house-plants-cacti-decoration-and-copy.jpg?s=612x612&w=0&k=20&c=KC6o7YP1NA37xyVlchvx5BdzrjdDiN6e5a_8JdnlM6I=', 
      colSpan: 2, 
      rowSpan: 2,
      title: "Indoor Plants",
      description: "Perfect for home decoration",
      buttonText: "Explore"
    },
    { 
      id: 4, 
      src: 'https://media.istockphoto.com/id/1134719612/photo/planting-spring-flowers-in-the-garden.jpg?s=612x612&w=0&k=20&c=BjBZUte7F4wp-h9PIak2F92I0GfzqlrbohFg5UZDdEk=', 
      colSpan: 2, 
      rowSpan: 1,
      title: "Gardening Soil",
      description: "Premium quality soil for your plants",
      buttonText: "Learn More"
    },
  ];

  return (
    <div className="image-grid-container">
      <div className="image-grid">
        {images.map((image) => (
          <div 
            key={image.id}
            className="image-item"
            style={{
              gridColumn: `span ${image.colSpan}`,
              gridRow: `span ${image.rowSpan}`
            }}
          >
            <img 
              src={image.src} 
              alt={`Image ${image.id}`} 
              className="image-content"
            />
            <div className="image-overlay">
              <div className="image-text">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <button className="image-button">{image.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;