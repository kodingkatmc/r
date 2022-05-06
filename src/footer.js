import './css/footer.css';
import tw_icon from './images/twitterIcon.png'
import yt_icon from './images/youtubeIcon.png'

function Footer() {
  return (
    <div class="footer">
      <hr/>
      <div id="socialLinks">
        <a class="link socialLink" target="_about" href="https://twitter.com/koding_kat">
          <img alt="tw_icon" class="social" src={tw_icon}/>
          &nbsp;&nbsp;Twitter
        </a>
        <a class="link socialLink" target="_about" href="https://www.youtube.com/channel/UCSepVj6I2OwrL9jtwADY-qA">
          <img alt="yt_icon" class="social" src={yt_icon}/>
          &nbsp;&nbsp;Youtube
        </a>
      </div>
    </div>
  );
}

export default Footer;