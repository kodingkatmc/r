import './css/page.css';

function Videos() { 
  document.title = "KodingKat - Videos";

  return (
    <div id="holder">
      <h1 class="center title">Videos</h1>
      <div class="content content_sub">
        <div class="c_left_l">
          <iframe title="Youtube Video - Installing A Datapack" class='video' src='https://www.youtube.com/embed/qfSemGp22gc'></iframe>
        </div>
        <div class="c_right_s">
          <h2>How to Install a Datapack</h2>
          <p>Explains how to install my datapacks into your minecraft world.</p>
        </div>
      </div>
      <div class="content content_sub">
        <div class="c_left_s">
          <h2>Disabling Augment Vanilla Features</h2>
          <p>Wondering how to disable features in my Augment Vanilla Datapack.  Customize my datapack to your exact specifications.</p>
        </div>
        <div class="c_right_l">
          <iframe title="Youtube Video - Disabling Augment Vanilla Features" class='video' src='https://www.youtube.com/embed/OHc7o0kFYno'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
