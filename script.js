
const header = document.getElementById('header');

// const input = document.getElementById('search-bar');
// const searchbar = document.getElementById('searchbar');


window.addEventListener("scroll", showNav);
// function showNav(){
//     if(window.scrollY > 150){
//         header.style.display = "block";
//     } else {
//         header.style.display = "none";
//     }
// }
function showNav(){
    header.classList.toggle('visible', window.scrollY > 150);
}
