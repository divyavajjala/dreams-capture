import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assests/prewed-2.jpg"
import image2 from "../../assests/prewed-5.jpg"
import image3 from "../../assests/prewed-4.jpg"
import bride from "../../assests/wedding2.jpg"
import bride4 from "../../assests/prewed3.jpg"
// import bride2 from "../../assests/bride3.jpg"
import bride3 from "../../assests/wedding-bride.jpg"
import bride5 from "../../assests/prewed6.jpg"
import bride6 from "../../assests/prewed7.jpg"
import bride1 from "../../assests/prewed.jpg"
import bride7 from "../../assests/prewed8.jpg"
import bride8 from "../../assests/prewed9.jpg"
import bride9 from "../../assests/prewed10.jpg"
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function WeddingShootCarousel() {
    let imagesData = [
        {
            id:1,
            imgSrc: bride
        },
        {
            id:2,
            imgSrc: bride1
        },
        {
            id:3,
            imgSrc: bride1
        },
        {
            id:4,
            imgSrc: bride3
        },
        {
            id:5,
            imgSrc: bride4
        },
        {
            id:6,
            imgSrc: bride5
        },
        {
            id:7,
            imgSrc: bride6
        },
        {
            id:8,
            imgSrc: bride7
        },
        {
            id:7,
            imgSrc: bride8
        },
        {
            id:8,
            imgSrc: bride9
        }
    ]
    const[image, setImage] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc)=> {
        setTempImgSrc(imgSrc);
        setImage(true);
    }
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
        <div className={image? "image open" : "image"}>
            <img src={tempImgSrc} alt='bride'></img>
            <CloseIcon onClick={()=>setImage(false)}></CloseIcon>
        </div>
        <div className='images-section'>
            {imagesData.map((item,index)=>{
                return(
                    <div className='images' key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="wedding images"></img>
                    </div>
                )      
            })}    

            {/* <img src={bride} alt="prewed"></img>
            <img src={bride1} alt="prewed1"></img>
            <img src={bride2} alt="prewed2"></img>
            <img src={bride3} alt="prewed3"></img>
            <img src={bride4} alt="prewed4"></img>
            <img src={bride5} alt="prewed5"></img>
            <img src={bride6} alt="prewed6"></img>
            <img src={bride7} alt="prewed7"></img>
            <img src={bride8} alt="prewed8"></img>
            <img src={bride9} alt="prewed9"></img>
            <img src={bride10} alt="prewed10"></img> */}
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