import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assests/prewed-2.jpg"
import image2 from "../../assests/prewed-5.jpg"
import image3 from "../../assests/prewed-4.jpg"
import bride from "../../assests/wedding2.jpg"
import bride4 from "../../assests/prewed3.jpg"
import bride2 from "../../assests/bride3.jpg"
import bride3 from "../../assests/wedding-bride.jpg"
import bride5 from "../../assests/prewed6.jpg"
import bride6 from "../../assests/prewed7.jpg"
import bride1 from "../../assests/prewed.jpg"
import bride7 from "../../assests/prewed8.jpg"
import bride8 from "../../assests/prewed9.jpg"
import bride9 from "../../assests/prewed10.jpg"
import bride10 from "../../assests/prewed10.jpg"
// import bride from "../../assests/pr.jpg"
// import bride from "../../assests/wedding2.jpg"
// import image4 from "../../assests/wedding-bride.jpg"
// import image5 from "../../assests/prewed3.jpg"
// import image6 from "../../assests/wedding2.jpg"

function WeddingShootCarousel() {
  return (
    <>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100" src={image1}alt="couple haldi ceremony "
            />
            <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image2}
            alt="pre-wedding shoot"
            />

            <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image3}
            alt="wedding ceremony"
            />

            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <p className='description'>We understand the essence of your wedding story, the importance of documenting real moments and the value of capturing memories that go down generations</p>
        <div className='images-section'>

            <img src={bride} alt="prewed"></img>
            <img src={bride1} alt="prewed1"></img>
            <img src={bride2} alt="prewed2"></img>
            <img src={bride3} alt="prewed3"></img>
            <img src={bride4} alt="prewed4"></img>
            <img src={bride5} alt="prewed5"></img>
            <img src={bride6} alt="prewed6"></img>
            <img src={bride7} alt="prewed7"></img>
            <img src={bride8} alt="prewed8"></img>
            <img src={bride9} alt="prewed9"></img>
            <img src={bride10} alt="prewed10"></img>
        </div>
    </>
  );
}

export default WeddingShootCarousel;
// function Weddings() {
//     return(
//         <div>
//             <h1>Weddings</h1>
//         </div>
//     )
// }
// export default Weddings;