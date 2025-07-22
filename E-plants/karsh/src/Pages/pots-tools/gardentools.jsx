import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';


function Gardentools() {
  const { addToCart, toggleCart } = useCart();
 

  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 11, // Starting from 11 to avoid conflicts with Plantpots IDs
      imageUrl: 'https://media.istockphoto.com/id/165831199/photo/gardening-hand-trowel-and-fork-standing-in-garden-soil.jpg?s=612x612&w=0&k=20&c=FB8N-usuAp3amegZuZOOkxjZWJ1NgWTcw59Ip9pQ5qs=',
      title: 'Trowel-tool',
      description: 'For digging small holes, transplanting seedlings, and planting bulbs.',
      price: 14.99
    },
    {
      id: 12,
      imageUrl: 'https://media.istockphoto.com/id/168857847/photo/garden-hand-tools.jpg?s=612x612&w=0&k=20&c=w9Pn4YQzS9JdjDXvtF2pRmydqwUp3_2ZZwjzZw-JmQg=',
      title: 'Hand fork',
      description: 'Loosens soil, removes weeds, and breaks up clumps.',
      price: 12.99
    },
    {
      id: 13,
      imageUrl: 'https://media.istockphoto.com/id/1530910658/photo/gloves-for-garden-cleaning-and-repair-work-on-a-white-isolated-background.jpg?s=612x612&w=0&k=20&c=s7G_ehWPdbX9Fe9ka4ihNlOm181k1izkZrQoMtqhFLA=',
      title: 'Garden gloves',
      description: 'Protects hands from thorns, dirt, and blisters.',
      price: 9.99
    },
    {
      id: 14,
      imageUrl: 'https://media.istockphoto.com/id/1328928118/photo/small-garden-rake-with-green-plastic-handle-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=akSuNLq5ibOWtmwdkKDt1IJ30EG-1DgMAsgEa15jrdE=',
      title: 'Weeder',
      description: 'Helps remove deep-rooted weeds like dandelions.',
      price: 11.99
    },
    {
      id: 15,
      imageUrl: 'https://media.istockphoto.com/id/515199567/photo/lawn-watering.jpg?s=612x612&w=0&k=20&c=ocAOZxliKMK0DHIL2EpJSEtr-dlTvYM5BV0ILgRiK0E=',
      title: 'Garden hose',
      description: 'For larger areas and adjustable spray settings',
      price: 29.99
    },
    {
      id: 16,
      imageUrl: 'https://media.istockphoto.com/id/638155104/photo/water-sprinklers.jpg?s=612x612&w=0&k=20&c=uD2a0x8RWaDhPizGvvpNSzw5wi8zgAuArrxg166gXkQ=',
      title: 'Sprinkler',
      description: 'Automated watering for lawns and large gardens.',
      price: 24.99
    },
    {
      id: 17,
      imageUrl: 'https://media.istockphoto.com/id/2206912137/photo/close-up-of-geared-garden-loppers-trimming-water-sprout-sucker-on-bare-fruit-tree-branch.jpg?s=612x612&w=0&k=20&c=wmLFJbI1JSPlW_DpazygOmJT_1zgPwVFCpGfIre_FM0=',
      title: 'Loppers tool',
      description: 'Cuts thicker branches (up to 2 inches)',
      price: 19.99
    },
    {
      id: 18,
      imageUrl: 'https://media.istockphoto.com/id/1195272256/photo/a-humanoid-robot-mows-grass-with-a-lawn-mower-future-concept-with-robotics-and-artificial.jpg?s=612x612&w=0&k=20&c=zgDxJQ7ny98KvwURtwT44mSH8DRjkLHlcmOEas9RtlA=',
      title: 'Lawn Mower',
      description: 'For grass cutting.',
      price: 199.99
    },
  ];

  return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">Gardening Tools</h2>
      
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

export default Gardentools;