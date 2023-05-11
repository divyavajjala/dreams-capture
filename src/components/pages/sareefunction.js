import Carousel from 'react-bootstrap/Carousel';
import sareeceremony1 from "../../assests/sareeceremony1.jpg"
import sareeceremony2 from "../../assests/sareeceremony4.jpg"
import sareeceremony3 from "../../assests/sareeceremony3.jpg"

function SareeCeremony() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100" src={sareeceremony1}alt="saree ceremony1"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sareeceremony2}
                    alt="saree ceremony2"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sareeceremony3}
                    alt="saree ceremony3"
                />        
                </Carousel.Item>
            </Carousel>
            <p className='description'>We believe that a mother is as fascinating as nature and admit kids as flowers that in a magical way bring warmth, happiness and sparkle into our lives. We seize that unique charm with care to embrace your memorable moments eternally.</p>
        </>
    );
  }
export default SareeCeremony;