import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';


function OutdoorPlants() {
  const { addToCart, toggleCart } = useCart();
  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/154918669/photo/lemons.jpg?s=1024x1024&w=is&k=20&c=d9VB6GRdrm5Enonst-r3QmK-yEc2LTuGBcxV86we_LU=',
      title: 'Lemon',
      description: '',
      price: 14.99
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1276649082/photo/falling-monsoon-rain-on-green-neem-tree-plant-leaf-raindrop-on-leaves-picture-beautiful-rainy.jpg?s=612x612&w=0&k=20&c=rCScShlyUVtaK3kOFbUdHcpG3RUn97NzKpx4ljMUT5U=',
      title: 'Neem',
      description: '',
      price: 14.99
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1284566295/photo/closeup-of-raw-green-curry-tree-an-aromatic-plant-used-in-indian-cuisine.jpg?s=612x612&w=0&k=20&c=-OD9TMnWIagFkBaSZ-afN2Gh92X53cHNrY-Fd3_ftKU=',
      title: 'Curry leaves',
      description: '',
      price: 14.99
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1485007664/photo/small-mango-tree-with-flowers-and-fruit-sprouts.jpg?s=612x612&w=0&k=20&c=QQfvizuNlCiy9RKkOMKS8Pysx8CMgcywNShRtQEVrGs=',
      title: 'Mango',
      description: '',
      price: 14.99
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/465214353/photo/popular-green-betel-leaf-eating-edible-culture-of-southeast-asia.jpg?s=612x612&w=0&k=20&c=F2ilCp9eu_UtTh6wXx10whPGexk8SdQYhNVV7p21OIY=',
      title: 'Betel leaf',
      description: '',
      price: 14.99
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/2030583667/photo/night-blooming-jasmine-flower-with-details-texture.jpg?s=1024x1024&w=is&k=20&c=1DVBmtBMNMGtdx01jsG62iB2uKB9kNzz21XSCEYipb8=',
      title: 'Night booming jasmine',
      description: '',
      price: 14.99
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/1475030487/photo/close-up-image-of-tropical-purple-bougainvillea-flowers-bracts-summer-climbing-ornamental.jpg?s=1024x1024&w=is&k=20&c=VNbkvEyXOZShDYeDTljCx6KPo1DYT12Th-AEC7wz21g=',
      title: 'purple bougainvillea',
      description: '',
      price: 14.99
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/1256125259/photo/pink-roses-in-garden.jpg?s=612x612&w=0&k=20&c=_Ook5Blxe5_k5g8J3Y8KkUQPO8lo53SGVKWb53F-sPQ=',
      title: 'Pink rose',
      description: '',
      price: 14.99
    },
    
  ];
  return (
      <div className="container-fluid p-4">
        <h2 className="text-center mb-4">Outdoor Plants</h2>
        <p>Outdoor plants thrive in open spaces, adding beauty and freshness to gardens, balconies, and landscapes with their vibrant colors and lush foliage. They include flowers, shrubs, trees, and climbers, each suited to different climates and care needs.</p>
        
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
  
  

export default OutdoorPlants;