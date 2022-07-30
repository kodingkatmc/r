import './css/page.css';

import $ from 'jquery'

import Carousel from './carousel';
import Querys from './querys';
import Dropdown from './dropdown';


function Datapacks() {
  document.title = "KodingKat - Datapacks";

  function drop(e){
    //console.log("Dropdown");
    //console.log(e.target);
    $(e.target.nextElementSibling).slideToggle(1000);

    if (e.target.children[0].textContent === "expand_less") {
      e.target.children[0].textContent = "expand_more";
    } else {
      e.target.children[0].textContent = "expand_less";
    }
  }

  return (
    <div id="holder">
      <Querys query="dp"/>
      <div className="content" id="augment">
        <h1 className="title right">Augment Vanilla</h1>
        <div className="content_sub">
          <div className="c_left_s">
            <p>This is my AugmentVanilla datapack from my improving minecraft series.  The datapack improves the vanilla minecraft games with some minor tweaks and changes.  This includes vein-miner, falling grass and dirt allowing for new traps, customization arrow trails, tweaked mobs, custom recipes, and more.</p>
            <p>In total there are well over 50 subtle changes to the minecraft gameplay.</p>
            <a className="link center" download="Augment Vanilla v1.11.zip" href={require("./data/datapacks/Augment Vanilla v1.10.zip")}>Download Augment Vanilla</a>
          </div>
          <div className="c_right_l">
            <Carousel folder="augment_vanilla"/>
          </div>
        </div>
        <div className="content_sub">
          <div className="c_center_l">
            <Dropdown title="Feature List">
              <ul className="collapsible">
                <li>Custom</li>
                <li className="hidden"><ul>
                  <li>Customizable arrow trails near you.</li>
                  <li>Bring more color to your world with colored campfire smoke.</li>
                </ul></li>
                <li>Danger</li>
                <li className="hidden"><ul>
                  <li>Fireworks explode on impact and burn out.</li>
                  <li>Breaking glass and glass panes with a bare hand hurts.</li>
                  <li>The player will cause grass, dirt, and coarse dirt to cave in if the block is unsupported.</li>
                  <li>Low health effects vision.</li>
                  <li>Snowballs put out fires.</li>
                  <li>Lightning expands to other entities in water.</li>
                </ul></li>
                <li>Custom Enchantments - Found in end loot, mine-shafts, and pillager outposts.</li>
                <li className="hidden"><ul>
                  <li>Freeze enemies in their tracks with Freeze.</li>
                  <li>Steal some of an enemies health with Life Steal.</li>
                  <li>Collect nearby items with Magnet.</li>
                  <li>Speed up travel with Speed boots.</li>
                  <li>Shoot arrows without drop off with Straight Shot.</li>
                  <li>Mine veins of ore with Vein Miner.</li>
                  <li>Quickly chop down trees with Truncidit.</li>
                </ul></li>
                <li>Entities</li>
                <li className="hidden"><ul>
                  <li>The smallest magma cubes are explosive.</li>
                  <li>Smarter mobs motion allows mobs to jump over small gaps.</li>
                  <li>Endermen flee from players wearing a dragon head.</li>
                  <li>Custom health bar for mobs.</li>
                  <li>Dropped items display how many there are.</li>
                  <li>Piglins get angry when you mine nether quartz ore.</li>
                  <li>Villager nitwits talk incoherently.</li>
                  <li>Squids blind you with ink if you get close.</li>
                  <li>Iron Golems are affected by the Looting Enchantment.</li>
            <li>Villagers drop emeralds when slain.</li>
                </ul></li>
                <li>Horticulture</li>
                <li className="hidden"><ul>
                  <li>Dropped saplings get placed.</li>
                  <li>Balances to food. (different foods give different effects (e.g. slowness, night vision, speed, ...))</li>
                </ul></li>
                <li>Movement</li>
                <li className="hidden"><ul>
                  <li>Chorus pearls teleport you and anything they come near randomly.</li>
                  <li>Grappling gun allows you to cross large gaps with flying ease.</li>
                  <li>Paths give speed while gravel and sand give slowness.</li>
                  <li>Sneaking gives you a larger, improved jump.</li>
                </ul></li>
                <li>Custom Recipes {'&'} Custom Smelting</li>
              </ul>
            </Dropdown>
          </div>
          <div className="c_center_r">
            <Dropdown title="Additional Notes">
              <div className="collapsible">
                <h3>Enable/Disable Features</h3>
                <p>To Disable any feature go to
                <span className="code">.minecraft/saves/{"<"}WORLD_NAME{">"}/datapacks/improvevanilla/data/augment/functions/main</span>,
                <span className="code">10_tick</span>, and
                <span className="code">20_tick</span> <span className="code">.mcfunction</span> files and put a <span className="code">#</span> in front of all occurrences of that feature.</p>
                <p>To stop villagers dropping emeralds delete <span className="code">.minecraft/saves/&ltWORLD_NAME&gl/datapacks/improvevanilla/data/minecraft/loot_tables/entities/villager.json</span>.</p>
                <p>To remove any of the custom crafting or smelting delete which ever files correspond to the recipe you would like to remove in <span className="code">.minecraft/saves/&ltWORLD_NAME&gl/datapacks/improvevanilla/data/augment/recipes.</span></p>
                <h3>Feature Notes</h3>
                <p>To change what trails your arrows have use
                <span className="code">./trigger arrowTrail set INSERTNUMBER</span></p>
                <p>The numbers correspond to </p>
                <table className="code listTable"><tbody>
                  <tr><td>0:normal</td><td>3:cloud</td></tr>
                  <tr><td>1:flame</td><td>4:ender_pearl</td></tr>
                  <tr><td>2:smoke</td><td>5:water</td></tr>
                </tbody></table>
                <p>Endermen will still be mad at you if you wear a dragon head but they will not be able to get to you. (Sometimes minecraft bugs out and they will hit you)</p>
                <p>To use the grappling bow you must grab onto the saddle that will be pulled along.</p>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="content" id="ironman">
        <h1 className="title left">Iron Man</h1>
        <div className="content_sub">
          <div className="c_left_l">
            <Carousel folder="iron_man"/>
          </div>
          <div className="c_right_s">
            <p>This is my Ironman datapack.  This datapack adds armor and weapons that transforms you into Ironman from the MCU.  Fire machine guns, activate repulsors, shoot lasers, fly, get critical statistics, and become almost invincible with this datapack.</p>
            <a className="link center" download="Iron Man v1.10.zip" href={require("./data/datapacks/Iron Man v1.9.zip")}>Download Iron Man</a>
            <Dropdown title="Feature List">
              <ul className="collapsible">
                <li>Custom Helmet Model</li>
                <li>Custom Armor Textures</li>
                <li>Stronger Armor</li>
                <li>Machine Gun</li>
                <li>Booster</li>
                <li>Repulsor</li>
                <li>Missile</li>
                <li>Laser</li>
                <li>Nano Shield</li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="content" id="caves">
        <h1 className="title right">Cave Creation</h1>
        <div className="content_sub">
          <div className="c_left_s">
            <p>Create custom cave networks with this datapack.</p>
            <p>Connect to points with the custom point to point system, or manually shape your world with single explosions.</p>
            <a className="link center" download="Cave Creation v1.8.zip" href={require("./data/datapacks/Cave Creation v1.7.zip")}>Download Cave Creation</a>
          </div>
          <div className="c_right_l">
            <Carousel folder="cave_creation"/>
          </div>
        </div>
      </div>
      <div className="content" id="kktools">
        <h1 className="title left">Building Tools</h1>
        <div className="content_sub">
          <div className="c_left_l">
            <Carousel folder="building_tools"/>
          </div>
          <div className="c_right_s">
            <p>Additional tools for building in minecraft.</p>
            <p>Randomize block placements with this datapack.  Use the <span className="code">/fill</span> command with your custom palette.</p> <p>Create a custom palette with as many blocks as you want.  The weight of the palette is reflected in the block placement.  Palette armorstands without blocks under them copy as an air block.</p>
            <a className="link center" download="Building Tools v2.5.zip" href={require("./data/datapacks/Building Tools v2.4.zip")}>Download Building Tools</a>
          </div>
        </div>
      </div>
      <div className="content" id="dweller">
        <h1 className="title right">Dweller</h1>
        <div className="content_sub">
          <div className="c_left_s">
            <p>The dweller is a hostile mob that roams caves and glows when ores are nearby.</p>
            <p>Maybe you can use this unique ability to enhance your caving experience.</p>
            <a className="link center" download="Dweller v1.5.zip" href={require("./data/datapacks/Dweller v1.4.zip")}>Download Dweller</a>
          </div>
          <div className="c_right_l">
            <Carousel folder="dweller"/>
          </div>
        </div>
      </div>
      <div className="content" id="kkwa">
        <h1 className="title left">Wolf Armor</h1>
        <div className="content_sub">
          <div className="c_left_l">
            <Carousel folder="wolf_armor"/>
          </div>
          <div className="c_right_s">
            <p>Wolf Armor allows you to equip your wolves with their own custom armor.  This allows them to accompany you on dangerous voyages and adventures without dying.</p>
            <p>Simply craft it with 2 leather 2 leads and the horse armor of your choice and receive a new wolf armor item.  Drop this item on the ground next to a wolf to equip it.  To unequip it you must sit the wolf and then shift nearby.</p>
            <a className="link center" download="Wolf Armor v1.4.zip" href={require("./data/datapacks/Wolf Armor v1.3.zip")}>Download Wolf Armor</a>
          </div>
        </div>
      </div>
      <div className="content" id="kill">
        <h1 className="title left">Kill Non-Player Entities</h1>
        <div className="content_sub">
          <div className="c_left_s">
            <p>Kill all non-player entities and their drops.</p>
            <a className="link center" download="Kill Non-Player Entities v1.7.zip" href={require("./data/datapacks/Kill Non-Player Entities v1.6.zip")}>Download Kill Non-Player Entities</a>
          </div>
          <div className="c_right_l">
            <img loading="lazy" alt="kill entities display example" src={require('./images/kill e.jpg')}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datapacks;
