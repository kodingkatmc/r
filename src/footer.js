import './css/footer.css';
import tw_icon from './images/twitterIcon.png'
import yt_icon from './images/youtubeIcon.png'

function footer() {
  return (
    <div className="footer">
      <hr/>
      <div id="socialLinks">
        <a class="link socialLink" target="_about" href="https://twitter.com/koding_kat">
          <img alt="tw_icon" class="social" src={tw_icon}/>
          Twitter
        </a>
        <a class="link socialLink" target="_about" href="https://www.youtube.com/channel/UCSepVj6I2OwrL9jtwADY-qA">
          <img alt="yt_icon" class="social" src={yt_icon}/>
          Youtube
        </a>
      </div>
    </div>
  );
}

export default footer;