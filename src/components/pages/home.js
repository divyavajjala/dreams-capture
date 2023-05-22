import backgroundImage from "../../assests/banner1.jpg"
// import responsive from "../../assests/responsive.jpg"
function Home() {
    return(
        <div>
            <div className="background-image" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"repeat"}}>
                <span className="tagline">Capturing Life's Priceless Moments.</span>
                <span className="tag-name">- John</span>
            </div>
        </div>
    )
}
export default Home;