import './css/page.css';
import splash_img from './images/background.jpg';

function page() {
  return (
    <div id="holder">
      <img alt="splash image" id="background" src={splash_img}/>
      <div class="content"></div>
      <div class="content">
        <h1 class="title center">Home</h1>
        <div class="content_sub">
          <div class="c_left_l">
            <iframe title="Youtube Video - Installing A Datapack" class='video' src='https://www.youtube.com/embed/qfSemGp22gc'></iframe>
          </div>
          <div class="c_right_s">
            <h2>How to Install a Datapack</h2>
            <p>Explains how to install my datapacks into your minecraft world.</p>
          </div>
        </div>
        <div class="content_sub">
          <div class="c_left_s">
            <h2>Submission</h2>
            <p>If you have an interesting idea for a datapack but can't create it yourself, you can submit your idea through the form on the right/below. If an interesting idea stands out, I might make it.</p>
            <br/>
            <p>It is often easier to create a datapack if the ideas fit naturally with the vanilla game</p>
            <p>OR</p>
            <p>theme your idea around a central topic or idea.</p>
            <br/>
            <p>If you would like credit please include your name and I will credit you for the idea.</p>
          </div>
          <iframe title="Idea Submission Form" class="embed c_right_l" scrolling="no" src="https://docs.google.com/forms/d/e/1FAIpQLSfzzHlBRxuQhKPUM6jgDvAs4Ax7c5wLmF-xo_iaWLzkatq-gw/viewform?embedded=true"></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
