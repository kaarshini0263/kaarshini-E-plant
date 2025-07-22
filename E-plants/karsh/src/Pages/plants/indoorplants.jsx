import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';

function IndoorPlants() {
   const { addToCart, toggleCart } = useCart();
  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1302108206/photo/sansevieria-mother-in-laws-tongue-snake-plant-plant-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=faBFKgFfCxFAfvcZQyqL55pIMqk533Eg8SS8KbpQwHU=',
      title: 'Snake plant',
      description: '',
       price: 14.99
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/2158516111/photo/zz-plant-in-a-gray-pot.jpg?s=1024x1024&w=is&k=20&c=mZJFy7sFZeEEB-mzVGQQa4hKYIuGC4fM1c5E6ZiW8KY=',
      title: 'ZZ plant',
      description: '',
       price: 14.99
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1904600640/photo/epipremnum-aureum-is-a-species-of-flowering-plant-in-the-arum-family-araceae-the-plant-has-a.jpg?s=1024x1024&w=is&k=20&c=9KVbuFpVCzHAxKgo6Pn1bXNC6-0EXb7GzQVXkvgMjZc=',
      title: 'Golden pothos',
      description: '',
       price: 14.99
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/2170549755/photo/chlorophytum-comosum-variegated-spidergrass-plants-in-red-pot.jpg?s=612x612&w=0&k=20&c=-djnUyL4okeNctFnHd5rVUW1iwfsyx_SBGSJbw0Ry3Y=',
      title: 'Spider plant',
      description: '',
       price: 14.99
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/1359561042/photo/beautiful-potted-boston-ferns-or-green-lady-houseplant-on-floor-by-brick-wall-in-living-room.jpg?s=612x612&w=0&k=20&c=Vm4gXKBfhg2CjfWP375LcT7Te4DRTJTIF5EEtdnEwrU=',
      title: 'Boston fern',
      description: '',
       price: 14.99
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/2159032650/photo/howea-palm-indoor-plant-in-a-pot.jpg?s=612x612&w=0&k=20&c=LCMeLVYHMxHxgZR3Oa1g9obVcR8uSCGz5IRdoulMGvY=',
      title: 'Kentia palm',
      description: '',
       price: 14.99
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/1318399887/photo/topical-philodendron-verrucosum-houseplant-with-dark-green-veined-velvety-leaves.jpg?s=1024x1024&w=is&k=20&c=h53lBr999ND2Co2HQsCgQfFqbfNIupmLunEBdEkikQI=',
      title: 'Philodendron Verrucosum',
      description: '',
       price: 14.99
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/1869335830/photo/epipremnum-aureum-is-a-species-of-flowering-plant-in-the-arum-family-aracear-the-plant-has-a.jpg?s=612x612&w=0&k=20&c=0wDxCiJe8lLjtm_EIsugY1QZ1UKDk7AXTGI2TzgOZq0=',
      title: 'Money plant',
      description: '',
       price: 14.99
    },
    
  ];
  return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">Indoor Plants</h2>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cardsData.map((card) => (
          <Col key={card.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={card.imageUrl} 
                alt={card.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {card.description}
                  <div className="mt-2 fw-bold">₹{card.price.toFixed(2)}</div>
                </Card.Text>
                <div className="d-flex justify-content-between mt-2">
                  <Button 
                    variant="outline-success" 
                    className="flex-grow-1 me-2"
                    onClick={toggleCart}
                  >
                    View Cart
                  </Button>
                  <Button 
                    variant="success" 
                    className="flex-grow-1"
                    onClick={() => {
                      addToCart(card);
                      window.alert(`${card.title} has been added to your cart.`);
                    }}
                   

                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

  

export default IndoorPlants;