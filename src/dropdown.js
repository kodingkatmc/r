import './css/dropdown.css';

import $ from 'jquery'

function Dropdown(props) {   
    
    function toggle(e){
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
        <div>
            <h3 className="collapsible_head" onClick={toggle}>{props.title}<span className="material-icons expand">expand_more</span></h3>
            {props.children}
        </div>
    );
}

export default Dropdown;