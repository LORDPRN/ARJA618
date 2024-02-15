const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})
navigation.addEventListener("click", () => {
    navigation.classList.toggle("active");
    menuBtn.classList.toggle("active");
})

//go to about section
$(".mouse-scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, .3);
});