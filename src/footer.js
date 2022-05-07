import './css/footer.css';
import tw_icon from './images/twitterIcon.png'
import yt_icon from './images/youtubeIcon.png'

function Footer() {
  return (
    <div className="footer">
      <hr/>
      <div id="socialLinks">
        <a className="socialLink" target="_about" href="https://twitter.com/koding_kat">
          <img alt="tw_icon" className="social" src={tw_icon}/>
          <span>Twitter</span>
        </a>
        <a className="socialLink" target="_about" href="https://www.youtube.com/channel/UCSepVj6I2OwrL9jtwADY-qA">
          <img alt="yt_icon" className="social" src={yt_icon}/>
          <span>Youtube</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;