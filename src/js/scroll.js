document.documentElement.dataset.scroll = window.scrollY;
document.addEventListener('scroll', () => {
    if(window.scrollY>25){
    document.documentElement.dataset.scroll = window.scrollY;
    }else{
    document.documentElement.dataset.scroll = 0;
    }
});


//NO IDEA what this was meant to do but afraid to delete it.
/*
function menu() {
    var x = document.getElementById("");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
*/