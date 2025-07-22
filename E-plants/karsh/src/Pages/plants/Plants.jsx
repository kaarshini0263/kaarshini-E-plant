import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Plants() {
  // Array of card data including image URLs, titles, and descriptions
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/154918669/photo/lemons.jpg?s=1024x1024&w=is&k=20&c=d9VB6GRdrm5Enonst-r3QmK-yEc2LTuGBcxV86we_LU=',
      title: 'Lemon',
      description: ''
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1276649082/photo/falling-monsoon-rain-on-green-neem-tree-plant-leaf-raindrop-on-leaves-picture-beautiful-rainy.jpg?s=612x612&w=0&k=20&c=rCScShlyUVtaK3kOFbUdHcpG3RUn97NzKpx4ljMUT5U=',
      title: 'Neem',
      description: ''
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1284566295/photo/closeup-of-raw-green-curry-tree-an-aromatic-plant-used-in-indian-cuisine.jpg?s=612x612&w=0&k=20&c=-OD9TMnWIagFkBaSZ-afN2Gh92X53cHNrY-Fd3_ftKU=',
      title: 'Curry leaves',
      description: ''
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1485007664/photo/small-mango-tree-with-flowers-and-fruit-sprouts.jpg?s=612x612&w=0&k=20&c=QQfvizuNlCiy9RKkOMKS8Pysx8CMgcywNShRtQEVrGs=',
      title: 'Mango',
      description: ''
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/465214353/photo/popular-green-betel-leaf-eating-edible-culture-of-southeast-asia.jpg?s=612x612&w=0&k=20&c=F2ilCp9eu_UtTh6wXx10whPGexk8SdQYhNVV7p21OIY=',
      title: 'Betel leaf',
      description: ''
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/2030583667/photo/night-blooming-jasmine-flower-with-details-texture.jpg?s=1024x1024&w=is&k=20&c=1DVBmtBMNMGtdx01jsG62iB2uKB9kNzz21XSCEYipb8=',
      title: 'Night booming jasmine',
      description: ''
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/1475030487/photo/close-up-image-of-tropical-purple-bougainvillea-flowers-bracts-summer-climbing-ornamental.jpg?s=1024x1024&w=is&k=20&c=VNbkvEyXOZShDYeDTljCx6KPo1DYT12Th-AEC7wz21g=',
      title: 'purple bougainvillea',
      description: ''
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/1256125259/photo/pink-roses-in-garden.jpg?s=612x612&w=0&k=20&c=_Ook5Blxe5_k5g8J3Y8KkUQPO8lo53SGVKWb53F-sPQ=',
      title: 'Pink rose',
      description: ''
    },
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1302108206/photo/sansevieria-mother-in-laws-tongue-snake-plant-plant-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=faBFKgFfCxFAfvcZQyqL55pIMqk533Eg8SS8KbpQwHU=',
      title: 'Snake plant',
      description: ''
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/2158516111/photo/zz-plant-in-a-gray-pot.jpg?s=1024x1024&w=is&k=20&c=mZJFy7sFZeEEB-mzVGQQa4hKYIuGC4fM1c5E6ZiW8KY=',
      title: 'ZZ plant',
      description: ''
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1904600640/photo/epipremnum-aureum-is-a-species-of-flowering-plant-in-the-arum-family-araceae-the-plant-has-a.jpg?s=1024x1024&w=is&k=20&c=9KVbuFpVCzHAxKgo6Pn1bXNC6-0EXb7GzQVXkvgMjZc=',
      title: 'Golden pothos',
      description: ''
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/2170549755/photo/chlorophytum-comosum-variegated-spidergrass-plants-in-red-pot.jpg?s=612x612&w=0&k=20&c=-djnUyL4okeNctFnHd5rVUW1iwfsyx_SBGSJbw0Ry3Y=',
      title: 'Spider plant',
      description: ''
    },
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20=',
      title: 'Aloe-vera',
      description: ''
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1320236592/photo/crassula-ovata-commonly-known-as-jade-plant-lucky-plant-money-plant-or-money-tree-is-a.jpg?s=612x612&w=0&k=20&c=dA33gFF6bVGwRW2oyB79w0vu46jDzkpFWosArtoG9p4=',
      title: 'Jade plant',
      description: ''
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/2169762903/photo/top-view-of-stunning-rosette-formation-in-echeveria-succulent-plant-photo-taken-in-sonada.jpg?s=612x612&w=0&k=20&c=4ag0PQl9L15SnYlYhIv-GR9dnm1RijqoLUoh--O6RKk=',
      title: 'Echeveria plant',
      description: ''
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1276837334/photo/haworthia-attenuata-var-caespitosa-haworthia-fasciata-alba-succulent-plants-with-bright-white.jpg?s=612x612&w=0&k=20&c=Rvo36QoIz00O0cihZLcKs9O9HN5N_gRQPYDgNLVDpmU=',
      title: 'Haworthia',
      description: ''
    },
    {
      id: 3,
      imageUrl: 'https://media.istockphoto.com/id/1284566295/photo/closeup-of-raw-green-curry-tree-an-aromatic-plant-used-in-indian-cuisine.jpg?s=612x612&w=0&k=20&c=-OD9TMnWIagFkBaSZ-afN2Gh92X53cHNrY-Fd3_ftKU=',
      title: 'Curry leaves',
      description: ''
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1485007664/photo/small-mango-tree-with-flowers-and-fruit-sprouts.jpg?s=612x612&w=0&k=20&c=QQfvizuNlCiy9RKkOMKS8Pysx8CMgcywNShRtQEVrGs=',
      title: 'Mango',
      description: ''
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/465214353/photo/popular-green-betel-leaf-eating-edible-culture-of-southeast-asia.jpg?s=612x612&w=0&k=20&c=F2ilCp9eu_UtTh6wXx10whPGexk8SdQYhNVV7p21OIY=',
      title: 'Betel leaf',
      description: ''
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/2030583667/photo/night-blooming-jasmine-flower-with-details-texture.jpg?s=1024x1024&w=is&k=20&c=1DVBmtBMNMGtdx01jsG62iB2uKB9kNzz21XSCEYipb8=',
      title: 'Night booming jasmine',
      description: ''
    },
    {
      id: 7,
      imageUrl: 'https://media.istockphoto.com/id/1475030487/photo/close-up-image-of-tropical-purple-bougainvillea-flowers-bracts-summer-climbing-ornamental.jpg?s=1024x1024&w=is&k=20&c=VNbkvEyXOZShDYeDTljCx6KPo1DYT12Th-AEC7wz21g=',
      title: 'purple bougainvillea',
      description: ''
    },
    {
      id: 8,
      imageUrl: 'https://media.istockphoto.com/id/1256125259/photo/pink-roses-in-garden.jpg?s=612x612&w=0&k=20&c=_Ook5Blxe5_k5g8J3Y8KkUQPO8lo53SGVKWb53F-sPQ=',
      title: 'Pink rose',
      description: ''
    },
    {
      id: 5,
      imageUrl: 'https://media.istockphoto.com/id/1359561042/photo/beautiful-potted-boston-ferns-or-green-lady-houseplant-on-floor-by-brick-wall-in-living-room.jpg?s=612x612&w=0&k=20&c=Vm4gXKBfhg2CjfWP375LcT7Te4DRTJTIF5EEtdnEwrU=',
      title: 'Boston fern',
      description: ''
    },
    {
      id: 6,
      imageUrl: 'https://media.istockphoto.com/id/2159032650/photo/howea-palm-indoor-plant-in-a-pot.jpg?s=612x612&w=0&k=20&c=LCMeLVYHMxHxgZR3Oa1g9obVcR8uSCGz5IRdoulMGvY=',
      title: 'Kentia palm',
      description: ''
    },
    
  ];

  return (
    <>
      <div className="container-fluid p-4">
        <h2 className="text-center mb-4">Exciting Plants</h2>
        <p>"Outdoor plants thrive in open spaces, adding beauty and freshness to gardens, balconies, and landscapes with their vibrant colors and lush foliage. They include flowers, shrubs, trees, and climbers, each suited to different climates and care needs,From sun-loving roses to hardy succulents, outdoor plants enhance curb appeal, attract pollinators, and can even provide shade, fruits, or herbs for everyday use. 🌿🌞</p>
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
                  <div className="d-flex justify-content-between mt-2">
                    <button className="btn btn-success flex-grow-1 me-2">
                      View Cart
                    </button>
                    <button className="btn btn-success flex-grow-1">
                      Add to Cart
                    </button>
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

export default Plants;