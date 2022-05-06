import $ from 'jquery'

let coll = document.getElementsByClassName("collapsible_head");
//console.log(coll);
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    let next = this.nextElementSibling;
    //console.log(next);
    $(next).slideToggle(1000);

    if (this.children[0].textContent == "expand_less") {
    this.children[0].textContent = "expand_more";
    } else {
    this.children[0].textContent = "expand_less"
    }
});
}