import Carousel from 'react-bootstrap/Carousel';
function Slide(){
    return(
<Carousel>
  <Carousel.Item>
    <img style={{height:400}}
      className="d-block w-100"
      src="https://media.istockphoto.com/id/1137926596/photo/farmer-planting-seeds-in-soil.jpg?s=612x612&w=0&k=20&c=_BmdshgOU-gR8q3EwlZuQT2G77S0Ef03J6kIsDisXfc="
      alt="First slide"

    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:400}}
      className="d-block w-100"
      src="https://media.istockphoto.com/id/1207763009/photo/panoramic-photo-of-beautiful-bright-colorful-multicolored-yellow-white-red-purple-pink-tulips.jpg?s=612x612&w=0&k=20&c=4n9XG3oHgKVtth6XxIbhZXsWHo5hjFNXmKx8ElvwidQ="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:400}}
      className="d-block w-100"
      src="https://media.istockphoto.com/id/1320131720/photo/planting-spring-flowers-in-the-garden.jpg?s=612x612&w=0&k=20&c=RBFek3GPSlZ24nz6PxXlLoyiPBpPpdgoVQxUKRgRchI="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
export default Slide