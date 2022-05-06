import './css/navbar.css';

function navbar() {
  return (
    <div class="navbar">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div class="nav_list">
        <a class="page_link selected" href="/r/">Home</a>
        <a class="page_link" href="/r/datapacks">Datapacks</a>
        <a class="page_link" href="/r/resourcepacks">Resourcepacks</a>
        <a class="page_link" href="/r/maps">Maps</a>
        <a class="page_link" href="/r/videos">Videos</a>
      </div>

    </div>
    
  );
}

export default navbar;
