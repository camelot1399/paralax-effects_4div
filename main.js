let paralax = document.querySelector('.div1');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    paralax.style.backgroundPositionY = offset * (-0.4) + "px";
});