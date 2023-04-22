import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer () {
    return (
        <div className="footer">
            <div className='socialmedia-links'>
                <span className='socialmedia-connected-text'>STAY CONNECTED</span>
                <a className="media-icon" href="https://www.instagram.com/dreams_capture_john/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer"><InstagramIcon></InstagramIcon></a>
                <a className="media-icon" href="https://www.facebook.com/dreams_capture_john/?igshid=YmMyMTA2M2Y%3D" target='blank' rel='noreferrer'><FacebookIcon></FacebookIcon></a>
                <a className="media-icon" href="https://www.youtube.com/user/janu1292/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer"><YouTubeIcon></YouTubeIcon></a>
            </div>
            <div className='developer'>
                <span className='developer-text'>Designed and developed by divya.vajjala@outlook.com</span>
            </div>
        </div>
    )
}
export default Footer;