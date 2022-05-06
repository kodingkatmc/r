import './css/page.css';

function datapacks() {
  document.title = "KodingKat - Datapacks";

  return (
    <div id="holder">
      <div class="content"></div>
      <div class="content" id="augment">
        <h1 class="title right">Augment Vanilla</h1>
        <div class="content_sub">
          <div class="c_left_s">
            <p>This is my AugmentVanilla datapack from my improving minecraft series.  The datapack improves the vanilla minecraft games with some minor tweaks and changes.  This includes vein-miner, falling grass and dirt allowing for new traps, customization arrow trails, tweaked mobs, custom recipes, and more.</p>
            <p>In total there are well over 50 subtle changes to the minecraft gameplay.</p>
            <a class="link center" href="data/datapacks/Augment Vanilla v1.9.zip">Download Augment Vanilla</a>
          </div>
          <div class="c_right_l carousel">
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(1).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(2).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(3).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(4).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(5).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(6).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(7).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(8).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(9).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(10).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(11).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(12).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(13).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(14).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(15).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(16).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(17).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(18).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(19).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(20).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(21).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(22).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(23).jpg'/>
            <img loading="lazy" alt="augment vanilla display example" src='images/augment_vanilla/(24).jpg'/>
          </div>
        </div>
        <div class="content_sub">
          <div class="c_center_l">
            <h3 class="collapsible_head">Feature List<span class="material-icons expand">expand_more</span></h3>
            <ul class="collapsible">
              <li>Custom</li>
              <li class="hidden"><ul>
                <li>Customizable arrow trails near you.</li>
                <li>Bring more color to your world with colored campfire smoke.</li>
              </ul></li>
              <li>Danger</li>
              <li class="hidden"><ul>
                <li>Fireworks explode on impact and burn out.</li>
                <li>Breaking glass and glass panes with a bare hand hurts.</li>
                <li>The player will cause grass, dirt, and coarse dirt to cave in if the block is unsupported.</li>
                <li>Low health effects vision.</li>
                <li>Snowballs put out fires.</li>
                <li>Lightning expands to other entities in water.</li>
              </ul></li>
              <li>Custom Enchantments - Found in end loot, mine-shafts, and pillager outposts.</li>
              <li class="hidden"><ul>
                <li>Freeze enemies in their tracks with Freeze.</li>
                <li>Steal some of an enemies health with Life Steal.</li>
                <li>Collect nearby items with Magnet.</li>
                <li>Speed up travel with Speed boots.</li>
                <li>Shoot arrows without drop off with Straight Shot.</li>
                <li>Mine veins of ore with Vein Miner.</li>
                <li>Quickly chop down trees with Truncidit.</li>
              </ul></li>
              <li>Entities</li>
              <li class="hidden"><ul>
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
              <li class="hidden"><ul>
                <li>Dropped saplings get placed.</li>
                <li>Balances to food. (different foods give different effects (e.g. slowness, night vision, speed, ...))</li>
              </ul></li>
              <li>Movement</li>
              <li class="hidden"><ul>
                <li>Chorus pearls teleport you and anything they come near randomly.</li>
                <li>Grappling gun allows you to cross large gaps with flying ease.</li>
                <li>Paths give speed while gravel and sand give slowness.</li>
                <li>Sneaking gives you a larger, improved jump.</li>
              </ul></li>
              <li>Custom Recipes {'&'} Custom Smelting</li>
            </ul>
          </div>
          <div class="c_center_r">
            <h3 class="collapsible_head">Additional Notes<span class="material-icons expand">expand_more</span></h3>
            <div class="collapsible">
              <h3>Enable/Disable Features</h3>
              <p>To Disable any feature go to
              <span class="code">.minecraft/saves/{"<"}WORLD_NAME{">"}/datapacks/improvevanilla/data/augment/functions/main</span>,
              <span class="code">10_tick</span>, and
              <span class="code">20_tick</span> <span class="code">.mcfunction</span> files and put a <span class="code">#</span> in front of all occurrences of that feature.</p>
              <p>To stop villagers dropping emeralds delete <span class="code">.minecraft/saves/&ltWORLD_NAME&gl/datapacks/improvevanilla/data/minecraft/loot_tables/entities/villager.json</span>.</p>
              <p>To remove any of the custom crafting or smelting delete which ever files correspond to the recipe you would like to remove in <span class="code">.minecraft/saves/&ltWORLD_NAME&gl/datapacks/improvevanilla/data/augment/recipes.</span></p>
              <h3>Feature Notes</h3>
              <p>To change what trails your arrows have use
              <span class="code">./trigger arrowTrail set INSERTNUMBER</span></p>
              <p>The numbers correspond to </p>
              <table class="code">
                <tr>0:normal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:cloud</tr>
                <tr>1:flame &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4:ender_pearl</tr>
                <tr>2:smoke &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:water</tr>
              </table>
              <p>Endermen will still be mad at you if you wear a dragon head but they will not be able to get to you. (Sometimes minecraft bugs out and they will hit you)</p>
              <p>To use the grappling bow you must grab onto the saddle that will be pulled along.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content" id="ironman">
        <h1 class="title left">Iron Man</h1>
        <div class="content_sub">
          <div class="c_left_l carousel">
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(1).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(2).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(3).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(4).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(5).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(6).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(7).jpg'/>
            <img loading="lazy" alt="ironman display example" src='images/iron_man/(8).jpg'/>
          </div>
          <div class="c_right_s">
            <p>This is my Ironman datapack.  This datapack adds armor and weapons that transforms you into Ironman from the MCU.  Fire machine guns, activate repulsors, shoot lasers, fly, get critical statistics, and become almost invincible with this datapack.</p>
            <a class="link center" href="data/datapacks/Iron Man v1.8.zip">Download Iron Man</a>
            <h3 class="collapsible_head">Feature List<span class="material-icons expand">expand_more</span></h3>
            <ul class="collapsible">
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
          </div>
        </div>
      </div>

      <div class="content" id="caves">
        <h1 class="title right">Cave Creation</h1>
        <div class="content_sub">
          <div class="c_left_s">
            <p>Create custom cave networks with this datapack.</p>
            <p>Connect to points with the custom point to point system, or manually shape your world with single explosions.</p>
            <a class="link center" href="data/datapacks/Cave Creation v1.7.zip">Download Cave Creation</a>
          </div>
          <div class="c_right_l carousel">
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(1).jpg'/>
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(2).jpg'/>
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(3).jpg'/>
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(4).jpg'/>
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(5).jpg'/>
            <img loading="lazy" alt="caves display example" src='images/cave_creation/(6).jpg'/>
          </div>
        </div>
      </div>

      <div class="content" id="kktools">
        <h1 class="title left">Building Tools</h1>
        <div class="content_sub">
          <div class="c_left_l carousel">
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(1).jpg'/>
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(2).jpg'/>
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(3).jpg'/>
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(4).jpg'/>
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(5).jpg'/>
            <img loading="lazy" alt="building tools display example" src='images/building_tools/(6).jpg'/>
          </div>
          <div class="c_right_s">
            <p>Additional tools for building in minecraft.</p>
            <p>Randomize block placements with this datapack.  Use the <span class="code">/fill</span> command with your custom palette.</p> <p>Create a custom palette with as many blocks as you want.  The weight of the palette is reflected in the block placement.  Palette armorstands without blocks under them copy as an air block.</p>
            <a class="link center" href="data/datapacks/Building Tools v2.4.zip">Download Building Tools</a>
          </div>
        </div>
      </div>
      <div class="content" id="dweller">
        <h1 class="title right">Dweller</h1>
        <div class="content_sub">
          <div class="c_left_s">
            <p>The dweller is a hostile mob that roams caves and glows when ores are nearby.</p>
            <p>Maybe you can use this unique ability to enhance your caving experience.</p>
            <a class="link center" href="data/datapacks/Dweller v1.4.zip">Download Dweller</a>
          </div>
          <div class="c_right_l carousel">
            <img loading="lazy" alt="dweller display example" src='images/dweller/1.jpg'/>
            <img loading="lazy" alt="dweller display example" src='images/dweller/2.jpg'/>
            <img loading="lazy" alt="dweller display example" src='images/dweller/3.jpg'/>
            <img loading="lazy" alt="dweller display example" src='images/dweller/4.jpg'/>
            <img loading="lazy" alt="dweller display example" src='images/dweller/5.jpg'/>
          </div>
        </div>
      </div>
      <div class="content" id="kkwa">
        <h1 class="title left">Wolf Armor</h1>
        <div class="content_sub">
          <div class="c_left_l carousel">
            <img loading="lazy" alt="wolf armor display example" src='images/wolf_armor/1.jpg'/>
            <img loading="lazy" alt="wolf armor display example" src='images/wolf_armor/2.jpg'/>
            <img loading="lazy" alt="wolf armor display example" src='images/wolf_armor/3.jpg'/>
            <img loading="lazy" alt="wolf armor display example" src='images/wolf_armor/4.jpg'/>
          </div>
          <div class="c_right_s">
            <p>Wolf Armor allows you to equip your wolves with their own custom armor.  This allows them to accompany you on dangerous voyages and adventures without dying.</p>
            <p>Simply craft it with 2 leather 2 leads and the horse armor of your choice and receive a new wolf armor item.  Drop this item on the ground next to a wolf to equip it.  To unequip it you must sit the wolf and then shift nearby.</p>
            <a class="link center" href="data/datapacks/Wolf Armor v1.2.zip">Download Wolf Armor</a>
          </div>
        </div>
      </div>
      <div class="content" id="kill">
        <h1 class="title left">Kill Non-Player Entities</h1>
        <div class="content_sub">
          <div class="c_left_s">
            <p>Kill all non-player entities and their drops.</p>
            <a class="link center" href="data/datapacks/Kill Non-Player Entities v1.6.zip">Download Kill Non-Player Entities</a>
          </div>
          <div class="c_right_l">
            <img loading="lazy" alt="kill entities display example" src='images/kill e.jpg'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default datapacks;
