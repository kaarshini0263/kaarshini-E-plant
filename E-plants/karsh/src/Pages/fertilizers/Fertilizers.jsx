import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fertilizers() {
  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1173520069/photo/chlorophytum-comosum-spider-plant-in-white-hanging-pot-basket-air-purifying-plants-for-home.jpg?s=612x612&w=0&k=20&c=8N083YcpKvN2toSjcSoy_cXwciNNgJm5dBF7NF-DvB0=',
      title: 'Nature View',
      description: 'Beautiful natural landscapes and scenic views from around the world.'
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1226065707/photo/view-of-the-money-plant-invasive-flowering-plant.jpg?s=612x612&w=0&k=20&c=XOAbEZOjG6eFbDk_HvTWWCLfxSsJmyHuiU5dLN0Uk20=',
      title: 'Epipremnum aureum',
      description: 'Explore the vibrant energy of metropolitan areas and urban architecture.'
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/939211414/photo/succulent-jade-or-lucky-plant-crassula-ovata.webp?a=1&b=1&s=612x612&w=0&k=20&c=oaclllNRyNoKgBR9TsWEKYPvz3Qia5_DsgK3UB90G8g=',
      title: 'Jade plant',
      description: 'The latest in technology and innovative gadget designs.'
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1304412598/photo/pilea-peperomioides-money-plant-in-the-pot.webp?a=1&b=1&s=612x612&w=0&k=20&c=DDNrBak-EcYw9TBSYfF_ZdsLFRKy2PrriekwJ-uBOvs=',
      title: 'Chinese Money Plant (Pilea peperomioides)',
      description: 'Delicious cuisine and culinary masterpieces from top chefs.'
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/2029905682/photo/epipremnum-aureum-is-a-species-in-the-arum-family-araceae-popular-house-plant-also-known-as.webp?a=1&b=1&s=612x612&w=0&k=20&c=0QVOJZygm1ch28CQTgG3zJijqZ_hTRDuef-eupXqDr4=',
      title: 'Marble queen pothos',
      description: 'Must-visit locations and hidden gems for your next adventure.'
    },
    {
        id: 5,
        imageUrl: 'https://media.istockphoto.com/id/2002585164/photo/monstera-deliciosa-or-swiss-cheese-plant-in-pot-home-gardening-and-connecting-with-nature.jpg?s=1024x1024&w=is&k=20&c=JQJvAl6I2PdQr9nZQpn3IdKhZS9zVGCCPwwq4MVJ-bM=',
        title: 'Monstera deliciosa',
        description: 'Must-visit locations and hidden gems for your next adventure.'
      },
      {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1691330201351-7eb3654a655d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pcXVlJTIwaW5kb29yJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
        title: 'Agave plant',
        description: 'Must-visit locations and hidden gems for your next adventure.'
      },
      {
        id: 6,
        imageUrl: 'https://media.istockphoto.com/id/2209864566/photo/aglaonema.jpg?s=1024x1024&w=is&k=20&c=cKIA86t3-gukLd7aNs7xJo0Nfxz5UsGfhmlAa5iD_rM=',
        title: 'Aglaonema',
        description: 'Must-visit locations and hidden gems for your next adventure.'
      },
      {
        id: 6,
        imageUrl: 'https://media.istockphoto.com/id/469525259/photo/new-bamboo-plant-in-ceramic-pot-on-white-background.jpg?s=612x612&w=0&k=20&c=lSo8b2C0RXKgCMz4_jpdniGFHPBXTORgFwLLpk5adKU=',
        title: 'Bamboo plant',
        description: 'lucky bamboo plant, feng shu backlit with blue. Blue represents energy, calm and soothing.'
      },
      {
        id: 6,
        imageUrl: 'https://media.istockphoto.com/id/1302108206/photo/sansevieria-mother-in-laws-tongue-snake-plant-plant-on-a-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=fonIYP1UmXkzxtNe7qZxCDSqETFgWXbwX3Zeb-NPqyM=',
        title: 'Snake plant',
        description: 'Sansevieria Mother-in-Laws Tongue, Snake Plant plant on a wooden background.'
      },
      {
        id: 6,
        imageUrl: 'https://media.istockphoto.com/id/2182197482/photo/thuja-occidentalis-eastern-arborvitae-in-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=iacsy3pSnAqkbbF3XOR_5tkO5OF12T7RwtaF9ncG-og=',
        title: 'Thuja plant',
        description: 'Must-visit locations and hidden gems for your next adventure.'
      },
      
   
    {
        id: 7,
        imageUrl: 'https://media.istockphoto.com/id/1313810742/photo/variegated-croton-is-a-medium-sized-evergreen-shrub-the-leaf-plates-come-in-different-colors.jpg?s=1024x1024&w=is&k=20&c=XLjaKcbVer97DG7s67QOSNcJD83SpyZixEdaKZSiicg=',
        title: 'variegated croton',
        description: 'variegated croton is a medium-sized evergreen shrub. The leaf plates come in different colors such as yellow, orange.'


      }
      
      
  ];

  return (
    <>
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">Plant Varities</h2>
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
                </Card.Text>
                <button className="btn btn-success ">
                  Shop now
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    
    </>
  );
}

export default Fertilizers;