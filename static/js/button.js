const pic_button = document.querySelector(".bakery-pic-button");

console.log("this is a test")
pic_button.addEventListener("click", function(){
    console.log("this was clicked opnce")
    window.location.href = pic_button.dataset.url;
})

const overlay = document.getElementById("overlay")
const exit_button = document.getElementById("exit-button");

//logic for opening and closing the cart collapsable
const cart_content = document.querySelector(".cart-collapsable-content");
const cart_button = document.querySelector(".cart-icon");

function openCartPanel(){
    cart_content.classList.add("open");
    overlay.classList.add("active");
}
function closeCartPanel(){
    cart_content.classList.remove("open");
    overlay.classList.remove("active");
}

cart_button.addEventListener("click", openCartPanel);

overlay.addEventListener("click", closeCartPanel);
exit_button.addEventListener("click", closeCartPanel);


//logic for opening and closing the search bar collabsable
const search_content = document.querySelector(".search-collapsable-content");
const search_button = document.querySelector(".search-icon");
const exit_button2 = document.getElementById("exit-button2");


function openSearchPanel(){
    search_content.classList.add("open");
    overlay.classList.add("active");
}
function closeSearchPanel(){
    search_content.classList.remove("open");
    overlay.classList.remove("active");
}

search_button.addEventListener("click", openSearchPanel);

overlay.addEventListener("click", closeSearchPanel);
exit_button2.addEventListener("click", closeSearchPanel);





const shop_bakery_menu = document.querySelector(".shop-bakery-container");
const arrow_icons = document.querySelectorAll(".arrow-icon")
const shop_bakery_content = document.getElementById("shop-bakery-content")

shop_bakery_menu.addEventListener("mouseenter", function() {

    arrow_icons.forEach(icon => {
        icon.classList.toggle("active")       
    });
    shop_bakery_content.classList.add("active");

});

shop_bakery_menu.addEventListener("mouseleave", function(){
    arrow_icons.forEach(icon => {
        icon.classList.toggle("active")       
    });
    shop_bakery_content.classList.remove("active");
});

shop_bakery_menu.addEventListener("click", function(){
    window.location.href = shop_bakery_menu.dataset.url;
})