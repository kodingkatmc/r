document.documentElement.dataset.scroll = window.scrollY;
document.addEventListener('scroll', () => {
    if(window.scrollY>25){
    document.documentElement.dataset.scroll = window.scrollY;
    }else{
    document.documentElement.dataset.scroll = 0;
    }
});