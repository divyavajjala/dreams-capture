import backgroundImage from "../../assests/profile.jpg"
function Home() {
    return(
        <div>
            <div style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat",height: 680, width: 1460}}></div>
            <span className="tagline">Capturing Life's Priceless Moments.</span>
            <span className="tag-name">- John</span>
        </div>
    )
}
export default Home;