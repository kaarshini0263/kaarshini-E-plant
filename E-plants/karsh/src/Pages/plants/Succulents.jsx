import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';

function Succulents() {
  const { addToCart, toggleCart } = useCart();
  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20=',
      title: 'Aloe-vera',
      description: '',
       price: 14.99
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1320236592/photo/crassula-ovata-commonly-known-as-jade-plant-lucky-plant-money-plant-or-money-tree-is-a.jpg?s=612x612&w=0&k=20&c=dA33gFF6bVGwRW2oyB79w0vu46jDzkpFWosArtoG9p4=',
      title: 'Jade plant',
      description: '',
       price: 14.99
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/2169762903/photo/top-view-of-stunning-rosette-formation-in-echeveria-succulent-plant-photo-taken-in-sonada.jpg?s=612x612&w=0&k=20&c=4ag0PQl9L15SnYlYhIv-GR9dnm1RijqoLUoh--O6RKk=',
      title: 'Echeveria plant',
      description: '',
       price: 14.99
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1276837334/photo/haworthia-attenuata-var-caespitosa-haworthia-fasciata-alba-succulent-plants-with-bright-white.jpg?s=612x612&w=0&k=20&c=Rvo36QoIz00O0cihZLcKs9O9HN5N_gRQPYDgNLVDpmU=',
      title: 'Haworthia',
      description: '',
       price: 14.99
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/1458373761/photo/sedum-stonecrop-beautiful-herbal-abstract-background-of-nature-spring-landscape.jpg?s=1024x1024&w=is&k=20&c=xHFTntYtNvTiETPE5oIV7upvHpinDYVbdcmt32mKoQI=',
      title: 'Sedum (Stonecrop)',
      description: '',
       price: 14.99
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/1448751033/photo/burros-tail.jpg?s=612x612&w=0&k=20&c=xQBNacPlp19y4b02on0YoBxRDLaHLycb4CxyGqExoAA=',
      title: 'Burro’s Tail ',
      description: '',
       price: 14.99
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/1341841562/photo/haworthiopsis-attenuata-is-an-agave-like-succulent-plant-striped-like-a-zebra-it-is-commonly.jpg?s=612x612&w=0&k=20&c=ULWIszHQ9nlRSvoCi3Ap-GjO316cXZhQEKc6AhdV-wo=',
      title: 'Zebra Plant (Haworthiopsis)',
      description: '',
       price: 14.99
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/2202071521/photo/beautiful-kalanchoe-tomentosa-plant-in-a-pot-in-a-greenhouse.jpg?s=1024x1024&w=is&k=20&c=8RsQCAHydOWZRl4na9P7WC4GhtR5rBuVaq3r1H7TZYg=',
      title: 'Panda Plant (Kalanchoe tomentosa) ',
      description: '',
       price: 14.99
    },
    
  ];
 

  return (
    <>
      <div className="container-fluid p-4">
        <h2 className="text-center mb-4">Succulents</h2>
        <p>Succulents are hardy, water-storing plants with thick leaves or stems, perfect for dry climates and low-maintenance care,They come in unique shapes and colors, thriving in bright light with minimal watering, making them ideal for both indoor and outdoor gardens. 🌵💧

</p>
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
      </>
    );
  }
  
  
         

export default Succulents;