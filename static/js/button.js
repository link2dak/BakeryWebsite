const pic_button = document.querySelector(".bakery-pic-button");

console.log("this is a test")
pic_button.addEventListener("click", function(){
    console.log("this was clicked opnce")
    window.location.href = pic_button.dataset.url;
})



const cart_content = document.querySelector(".cart-collapsable-content");
const cart_button = document.querySelector(".cart-icon");
const overlay = document.getElementById("overlay")
const exit_button = document.getElementById("exit-button");

function openPanel(){
    cart_content.classList.add("open");
    overlay.classList.add("active");
}
function closePanel(){
    cart_content.classList.remove("open");
    overlay.classList.remove("active");
}

cart_button.addEventListener("click", openPanel);

overlay.addEventListener("click", closePanel);
exit_button.addEventListener("click", closePanel);



const shop_bakery_menu = document.querySelector(".shop-bakery-container");
const arrow_icons = document.querySelectorAll(".arrow-icon")
const shop_bakery_content = document.getElementById("shop-bakery-content")

shop_bakery_menu.addEventListener("mouseenter", function() {

    arrow_icons.forEach(icon => {
        icon.classList.toggle("active")       
    });
    shop_bakery_content.classList.add("active")

});

shop_bakery_menu.addEventListener("mouseleave", function(){
    arrow_icons.forEach(icon => {
        icon.classList.toggle("active")       
    });
    shop_bakery_content.classList.remove("active")
});