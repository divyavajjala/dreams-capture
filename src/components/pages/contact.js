import bride from "../../assests/bride2.jpg" 
function Contact() {
    return(
        <div>
            {/* <h2>Contact</h2> */}
            <div className = "contact" style={{backgroundImage:`url(${bride})`, backgroundRepeat:"no-repeat",height: 680, width: 1460}}>
                <form className="form">
                    <h5>GET IN TOUCH</h5>
                    {/* <div className="phone"> */}
                        <h5>PHONE</h5>
                        <span className="contact-Num">+91 9849075327</span>
                    {/* </div> */}
                    {/* <div className="adrs"> */}
                        <h5>REACH US</h5>
                        <span className="address">R&R colony, Vantimamidi, Telangana 502279, India</span>
                    {/* </div> */}
                    <label>First Name:
                        <input type="text"></input><br></br><br></br>
                    </label>
                    <label>Last Name:
                        <input type="text"></input><br></br><br></br>
                    </label>
                    <label>Mobile No:
                        <input type="text"></input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7114041884747!2d78.59481447481106!3d17.71108829340011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8185779f6941%3A0x4ae970020685b727!2sDreams%20capture%20photography!5e0!3m2!1sen!2sus!4v1682366802745!5m2!1sen!2sus" title="map" width="1460" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe className = "maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7114041884747!2d78.59481447481106!3d17.71108829340011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8185779f6941%3A0x4ae970020685b727!2sDreams%20capture%20photography!5e0!3m2!1sen!2sus!4v1682366802745!5m2!1sen!2sus" title = "map" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
    )
}
export default Contact;