import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';

function Plantpots() {
  const { addToCart, toggleCart } = useCart();

  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/2190489261/photo/group-of-terracotta-and-a-painted-clay-flower-pots-on-white-isolated-background.jpg?s=612x612&w=0&k=20&c=nAkz8aiY-WrTGvjHH9S-CWiCHAtbhtdJ_4B7U42GtfA=',
      title: 'Mud-pots',
      description: '',
      price: 12.99
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/935061656/photo/piles-of-flower-pots.jpg?s=1024x1024&w=is&k=20&c=SEnN_JJQQCnyAzNPefB7Y6boNym_Tf-1nZQ1AeWfVeg=',
      title: 'Ceramic-pots',
      description: '',
      price: 18.99
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/2209250549/photo/vibrant-flower-pots-stacked-on-a-shelf-for-gardening-lovers.jpg?s=612x612&w=0&k=20&c=cvu5cehv88dlQgzlUdT9-MwPYBvqNL5zCA7MN1iS0Pw=',
      title: 'Plastic-pots',
      description: '',
      price: 8.99
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/2057799913/photo/white-plastic-planting-bag-with-soil-stack.jpg?s=612x612&w=0&k=20&c=vGs9D7HKeGIKrnouXkRp42nDYS1ODQKeCy3JbJ950v0=',
      title: 'Grow bags',
      description: '',
      price: 14.99
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/1349699462/photo/fluffy-flower-in-a-vase-on-a-table-background-floral-still-life-concept.jpg?s=1024x1024&w=is&k=20&c=8yn9lOe1L9Iwm7X-czmBuaIp4ri4xPLMI73A7UI70Io=',
      title: 'Ceramic-flower vase',
      description: '',
      price: 24.99
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/1312612026/photo/modern-flower-business-in-city-greenhouse-and-spring-bloom-season.jpg?s=612x612&w=0&k=20&c=cLxNJn19awUZ5XX_WnYtUwildT8fauRoPajPC7FceXI=',
      title: 'Hanging pots',
      description: '',
      price: 16.99
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/947268228/photo/wick-watering-plants-in-pots-on-glasses-stand-on-a-shelf-on-a-window.jpg?s=612x612&w=0&k=20&c=-ByZhRgqM2QcbZkxIHABVoPWuL6jKB6Z4VADJ3a65_0=',
      title: 'Selfwatering pots',
      description: '',
      price: 22.99
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/1287691347/photo/the-background-of-old-plant-plastic-pot-hanging-on-metal-fence-at-garden.jpg?s=612x612&w=0&k=20&c=xktOjSmJF5G0oWlxu3iOaRRlqNecSXw0wRFDUc-ESQs=',
      title: 'Wall-Hanging pots',
      description: '',
      price: 19.99
    },
    {
      id: 9,
      imageUrl: 'https://media.istockphoto.com/id/1399160232/photo/two-new-round-peat-pots.jpg?s=612x612&w=0&k=20&c=dG69aVhsaiX2eLrXWyCvIeoteg_g1kABS64STshnxuo=',
      title: 'Biodegradeble pots',
      description: '',
      price: 10.99
    },
    {
      id: 10,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1677597801987-8188edf04791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2xhc3MlMjBwb3RzJTIwZm9yJTIwcGxhbnRzfGVufDB8fDB8fHww',
      title: 'Glass pots',
      description: '',
      price: 29.99
    },
  ];

  return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">Plant-pots</h2>
      <p>
        Succulents are hardy, water-storing plants with thick leaves or stems, perfect for dry climates and low-maintenance care. 
        They come in unique shapes and colors, thriving in bright light with minimal watering, making them ideal for both indoor and outdoor gardens. 🌵💧
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
                  ₹{card.price.toFixed(2)}
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

export default Plantpots;