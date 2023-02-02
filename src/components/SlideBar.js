import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img3.webp'
import img3 from './images/img2.webp'
function IndividualIntervalsExample() {
  return (
    <Carousel style={{marginTop:"115px",width:"auto",zIndex : "0"}}>
      <Carousel.Item interval={3000}>
      
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{height:"30rem",width:"70%"}}
        />
        <Carousel.Caption>
          <h1 className='font-family'>Electronics</h1>
          <h3 className='font-family'>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{height:"30rem", width:"auto",objectFit:"cover" , backgroundSize:"cover"}}
        />
        <Carousel.Caption>
          <h1 className='font-family'>Toys</h1>
          <h3 className='font-family'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{height:"30rem" , width:"auto" ,objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h1 className='font-family'>Home Appliance</h1>
          <h3 className='font-family'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;