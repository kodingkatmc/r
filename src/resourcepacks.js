import './css/page.css';


function Resourcepacks() { 
  document.title = "KodingKat - Resourcepacks";

  return (
    <div id="holder">
      <div class="content">
        <h1 class="title center">Resourcepacks</h1>
        <div class="center">
          <h3>I use several resource-packs while I play minecraft.</h3>
          <div class="content_sub">
            <div class="c_left_l">
              <ul class="hidden">
                <li>My own custom pack which has elements from several packs.</li>
                <li><a target="_blank" href="https://www.curseforge.com/minecraft/texture-packs/visual-fish-buckets">Visual Fish Buckets</a></li>
                <li><a target="_blank" href="https://www.planetminecraft.com/texture-pack/improved-netherite-by-toxteer">Improved Netherite Armor</a></li>
                <li><a target="_blank" href="https://vanillatweaks.net/picker/resource-packs">Vanilla Tweaks (pack list to the right)</a></li>
              </ul>
              <h3>I also use two resource packs for additional datapacks.</h3>
              <ul class="hidden">
                <li><a target="_blank" href="https://bronghast014.weebly.com/arcane-alchemy">Arcane Alchemy</a> by BronGhast</li>
                <li><a target="_blank" href="https://tryashtar.github.io/shulker-preview/">Shulker Preview</a> by TryAshTar</li>
              </ul>
            </div>
            <div class="c_right_s">
            <iframe class="embed" src={require("./data/resourcepacks/selected_packs.txt")}></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content_sub">
          <div class="c_left_l">
            <h2>Augment Vanilla Resourcepack</h2>
            <p>This is the resourcepack used for my Augment Vanilla datapack. It is need for the grappling bow and chorus pearl custom models.</p>
            <a class="link center" download="Augment Vanilla.zip" href={require('./data/resourcepacks/Augment Vanilla.zip')}>Download Augment Vanilla Resources</a>
          </div>
          <div class="c_right_s"><img alt="augment vanilla icon" class="pack" src={require("./images/augment.jpg")}/></div>
        </div>
      </div>
      <div class="content">
        <div class="content_sub">
          <div class="c_left_s phoneHide"><img alt="ironman icon" class="pack" src={require("./images/ironman.jpg")}/></div>
          <div class="c_right_l">
              <h2>Iron Man Resourcepack</h2>
              <p>This is the resourcepack used for my Iron Man datapack. It is need for the all of the custom models.</p>
              <a class="link center" download="Iron Man.zip" href={require("./data/resourcepacks/Iron Man.zip")}>Download Iron Man Resources</a>
          </div>
          <div class="c_left_s phone"><img alt="ironman icon"class="pack" src={require("./images/ironman.jpg")}/></div>
        </div>
      </div>
      <div class="content">
        <div class="content_sub">
          <div class="c_left_l">
              <h2>Dweller Resourcepack</h2>
              <p>This is the resourcepack used for my Dweller datapack. It is need for the custom mobs.</p>
              <a class="link center" download="Dweller.zip" href={require("./data/resourcepacks/Dweller.zip")}>Download Dweller Resources</a>
          </div>
          <div class="c_right_s"><img alt="dweller icon" class="pack" src={require("./images/dweller.jpg")}/></div>
        </div>
      </div>
      <div class="content">
        <div class="content_sub">
          <div class="c_left_s phoneHide"><img alt="wolf armor icon" class="pack" src={require("./images/wolfarmor.jpg")}/></div>
          <div class="c_right_l">
              <h2>Wolf Armor Resourcepack</h2>
              <p>This is the resourcepack used for my Wolf Armor datapack. It is need for the custom item textures.</p>
              <a class="link center" download="Wolf Armor.zip" href={require("./data/resourcepacks/Wolf Armor.zip")}>Download Wolf Armor Resources</a>
          </div>
          <div class="c_left_s phone"><img alt="wolf armor icon" class="pack" src={require("./images/wolfarmor.jpg")}/></div>
        </div>
      </div>
      
    </div>
  );
}

export default Resourcepacks;