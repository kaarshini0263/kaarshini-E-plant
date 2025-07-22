import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../components/Cart';



function FloweringPlants() {
  // Array of card data including image URLs, titles, and descriptions
  const { addToCart, toggleCart } = useCart();
 const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1408068268/photo/beautiful-shallow-focus-on-lavender-herb-blooms-in-blue-pots.jpg?s=612x612&w=0&k=20&c=84ImZ1Gi-jLp3o6Qa4YF-1sKUZT1E6JDLVnPRSDJotY=',
      title: 'Lavender',
      description: '"Calming fragrance for aromatherapy, cooking, and pollinator gardens."',
      price: 14.99
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1338762317/photo/honey-bee-pollinating-a-sunflower-stock-photo.jpg?s=612x612&w=0&k=20&c=BrL23-Jni5rFcVUAWu-gNuQiTmbrhUDhTa3E94J0yXU=',
      title: 'Sun flower',
      description: 'Produces edible seeds, oil, and brightens gardens with towering blooms',
      price: 14.99
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1501097387/photo/close-up-image-of-rows-of-yellow-and-orange-flowering-marigolds-growing-in-terracotta.jpg?s=612x612&w=0&k=20&c=9LOLq5Pf6pKM8noJBIriCJlqc1jchtVRD3rlLpoAmTs=',
      title: 'Marigold',
      description: 'Natural pest repellent with vibrant, long-lasting flowers.',
      price: 14.99
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1343240317/photo/classy-flower-with-green-fleshy-leaves-enhancing-tha-beauty-of-flower-pot.jpg?s=612x612&w=0&k=20&c=cSDMVutkJ038sbd2GGGfQzgFnTZ4oocr31pWrystlnQ=',
      title: 'Rose',
      description:'Symbol of love, used in perfumes, teas, and ornamental gardens' ,
      price: 14.99
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/1347588634/photo/tropical-hibiscus-red-flower-head-on-green-background.jpg?s=612x612&w=0&k=20&c=I0MewAowXoryAIfilKbxQ7irAgaEImKz0hxa92a3TIg=',
      title: 'Red-Hibiscus',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/937723910/photo/hibiscus-or-chinese-rose.jpg?s=612x612&w=0&k=20&c=hUfMHVliEtG33s3wOAjOvhz6HExCROSyG1bgmAjfWi4=',
      title: 'Whit-hibiscus',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/184219430/photo/red-rose-in-the-flower-pot.jpg?s=612x612&w=0&k=20&c=cufmt-8B8wp2LT7XBQ8fd3-Q7PFnR0jXgwTDEpUefX0=',
      title: 'Red rose',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/182786551/photo/geranium-seedling-plants-in-retail-plastic-container-pot-on-white.jpg?s=1024x1024&w=is&k=20&c=PokxkOwtV65SPLjZPcj8lWkr6DSXUY9egs0He69XCKk=',
      title: 'Geranium',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 9,
      imageUrl: 'https://media.istockphoto.com/id/1158028412/photo/arabian-jasmine-plants-2-jasmines-very-grown-and-others-fallen-down.jpg?s=612x612&w=0&k=20&c=-wSGYIBNTpab2rbF1r8Z20R7w5FkPOUtZdQtr9GgYqA=',
      title: 'Jasmine',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 10,
      imageUrl: 'https://media.istockphoto.com/id/1949236704/photo/tabernaemontana-divaricata-commonly-called-pinwheel-flower-crape-jasmine.jpg?s=612x612&w=0&k=20&c=FwoeD73fvSrWsgdpYOonIXDVZD9mKr8CIHmAaF67ZR0=',
      title: 'Crape-jasmine',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 11,
      imageUrl: 'https://media.istockphoto.com/id/1266038428/photo/blooming-pink-bougainvillea-flowers-in-sunlight.jpg?s=612x612&w=0&k=20&c=NvyjrV29ZzIMo6PGJ2C0IFEOp2sJsR1Jfjm6vaoZ7Vk=',
      title: 'Bougainvillea',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 12,
      imageUrl: 'https://media.istockphoto.com/id/1283172653/photo/night-flowering-jasmine.jpg?s=612x612&w=0&k=20&c=ep8mt7PqehXlEP7xMhwU4Z_i0nfCFY1-aBFEtUdJO5g=',
      title: 'Night Jasmine',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 13,
      imageUrl: 'https://media.istockphoto.com/id/963108802/photo/clitoria-ternatea-blooming-blooming-commonly-known-as-asian-pigeonwings-bluebellvine-blue-pea.jpg?s=612x612&w=0&k=20&c=BU3mi4Y3N_SQptKMce96-lzp46k8LJtlbJ-4bVhWJeQ=',
      title: 'Aparajita',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 14,
      imageUrl: 'https://media.istockphoto.com/id/473000264/photo/quisqualis-indica.jpg?s=612x612&w=0&k=20&c=x9j537Ea1--rXYuOv3fy_eFBD6iSyc80fENA5EK7UMg=',
      title: 'Madhumalti',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 15,
      imageUrl: 'https://media.istockphoto.com/id/114395326/photo/yellow-rose-flower-in-bloom-on-rose-plant.jpg?s=612x612&w=0&k=20&c=Ni6HT2Ww_tgGMr62bFfjR-M9yuHm03U5-D_yjTpI3yI=',
      title: 'Yellow-rose',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
    {
      id: 16,
      imageUrl: 'https://media.istockphoto.com/id/953762490/photo/orange-and-pink-rose-blooming-in-the-spring.jpg?s=1024x1024&w=is&k=20&c=wQEIosEF9vUKrn_eXVvpgkbaigV0iyLkosJokiPsU3Y=',
      title: 'Orangepink rose',
      description: 'Beautiful natural landscapes and scenic views from around the world.',
      price: 14.99
    },
  ];
   return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">Flowering Plants</h2>
      <p>🌸 "Flowering plants brighten spaces with colorful blooms, attracting pollinators like bees and butterflies while adding beauty to gardens and homes,🌺From seasonal annuals to perennial favorites, they vary in care needs—some thrive in full sun, while others prefer shade and moist soil."</p>
      
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

 

export default FloweringPlants;