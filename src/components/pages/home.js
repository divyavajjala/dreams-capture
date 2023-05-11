import backgroundImage from "../../assests/home banner.jpg"
// import banner from "../../assests/dp.jpg"
function Home() {
    return(
        <div>
            <div className="background-image" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat",height: 680, width: 1460}}></div>
            <div className="responsive-image" style={{backgroundImage:`url(${backgroundImage})`, width: 350, height: 680}}></div>
            {/* <span className="tagline">Capturing Life's Priceless Moments.</span>
            <span className="tag-name">- John</span> */}
        </div>
    )
}
export default Home;