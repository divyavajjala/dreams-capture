import Carousel from 'react-bootstrap/Carousel';
import baby1 from "../../assests/baby1.JPG"
import baby2 from "../../assests/baby4.JPG"
import baby3 from "../../assests/baby3.JPG"

function BabyBump() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100" src={baby1}alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={baby2}
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={baby3}
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p className='description'>We believe that a mother is as fascinating as nature and admit kids as flowers that in a magical way bring warmth, happiness and sparkle into our lives. We seize that unique charm with care to embrace your memorable moments eternally.</p>
        </>
    );
  }
export default BabyBump;