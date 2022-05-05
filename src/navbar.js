import './css/navbar.css';

function navbar() {
  return (
    <div class="navbar">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div class="nav_list">
        <a class="page_link selected">Home</a>
        <a class="page_link" href="datapacks.html">Datapacks</a>
        <a class="page_link" href="resourcepacks.html">Resourcepacks</a>
        <a class="page_link" href="maps.html">Maps</a>
        <a class="page_link" href="videos.html">Videos</a>
      </div>

    </div>
  );
}

export default navbar;
