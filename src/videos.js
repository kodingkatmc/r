import './css/page.css';
import Querys from './querys';

function Videos() { 
  document.title = "KodingKat - Videos";

  return (
    <div id="holder">
      <Querys query="vd"/>
      <h1 className="center title">Videos</h1>
      <div className="content content_sub" id="install">
        <div className="c_left_l">
          <iframe title="Youtube Video - Installing A Datapack" className='video' src='https://www.youtube.com/embed/qfSemGp22gc'></iframe>
        </div>
        <div className="c_right_s">
          <h2>How to Install a Datapack</h2>
          <p>Explains how to install my datapacks into your minecraft world.</p>
        </div>
      </div>
      <div className="content content_sub" id="disable">
        <div className="c_left_s">
          <h2>Disabling Augment Vanilla Features</h2>
          <p>Wondering how to disable features in my Augment Vanilla Datapack.  Customize my datapack to your exact specifications.</p>
        </div>
        <div className="c_right_l">
          <iframe title="Youtube Video - Disabling Augment Vanilla Features" className='video' src='https://www.youtube.com/embed/OHc7o0kFYno'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
