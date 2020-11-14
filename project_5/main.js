// document.documentElement.offsetHeight // wysokość całej strony
// window.scrollY - wlasciwosc o która skrolowaliśmy naszą stronę
// window.innerHeight -- wysokość okna przeglądarki
const divStatus = document.querySelector('.status');
const statusBar = () => {
    let currentScroll =  Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    divStatus.style.width = currentScroll + "%";
}
window.addEventListener("scroll", statusBar);


