import backgroundImage from "../../assests/background.jpg"
import backgroundProfile from "../../assests/profile.jpg"

function About() {
    return(
        <div>
            <div className="background-image" style={{backgroundImage:`url(${backgroundProfile})`, backgroundRepeat:"no-repeat",height: 800,width: 800}}>
                <div className="about">
                    <h2>About Us</h2>
                    <p>There are many important things at a wedding, we believe that photography is most prominent among them. Because whatever captured on the wedding will be cherished for a lifetime. We are incredibly blessed to have a team of passionate photographers who always strive to capture an image that is in essence, a beautiful illustration of the moment.</p>
                    <p>Since  2018 we have been creating distinct and unique stories and we almost covered 80+ weddings. Our commitment towards providing ultimate client satisfaction makes them refer to other clients regularly. Thus expanding our client family all over India.</p>
                    <p>Rather than forced poses, we let it flow and capture moments as they unfold. Light, texture, dimension, mood, emotion, energy, romance and relationships, are the most essential elements necessary to compose exceptional photographs at your wedding. our aim is to capture the essence of who you are really.</p>
                    <p>We interact with you in every step of your wedding and assist you in choosing costumes, hairstyles and locations to deliver the finest footage. we ensure that we capture your wedding beautifully and wrap it up with our magical skills of candid photography and cinematography thus making memories that remain etched on the sands of time.</p>
                    <p>while photography continues to transform in its style and technology, we stay focused on what really matters...capturing the essence of your moment and your spirit.</p>
                    <p>In weddings, things never happen as they are planned. But our team of photographers are capable of producing better output in any kind of situations.</p>
                </div>
            </div>
            <h3>Our Records</h3>
            <div style={{backgroundImage:`url(${backgroundImage})`}}className="records-section">
                <span className="experience">5+years of experience</span>
                <span>80+weddings</span>
                <span>60+hours of shoots</span>

            </div>
        </div>
    )
}
export default About;