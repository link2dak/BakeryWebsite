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





function arrowFunc(menu, message, upArrow, downArrow, content){
    // OPEN only when hovering the message
    message.addEventListener("mouseenter", function() {
    upArrow.classList.add("active");
    downArrow.classList.remove("active");
    content.classList.add("active");
});

// CLOSE when leaving the whole container (message + dropdown)
menu.addEventListener("mouseleave", function(){
    upArrow.classList.remove("active");
    downArrow.classList.add("active");
    content.classList.remove("active");
});

// Click still works
menu.addEventListener("click", function(){
    window.location.href = menu.dataset.url;
});
}



const shop_bakery_menu = document.querySelector(".shop-bakery-container");
const shop_bakery_message = document.querySelector(".shop-bakery-message");
const arrow_icon_down = document.getElementById("down-arrow-icon-bakery");
const arrow_icon_up = document.getElementById("up-arrow-icon-bakery");
const shop_bakery_content = document.getElementById("shop-bakery-content");
arrowFunc(shop_bakery_menu, shop_bakery_message, arrow_icon_up, arrow_icon_down, shop_bakery_content);


//fix this next time
const shop_starters_menu = document.querySelector(".shop-starters-container");
const shop_starters_message = document.querySelector(".shop-starters-message");
const arrow_icon_down_starter = document.getElementById("down-arrow-icon-starter");
const arrow_icon_up_starter = document.getElementById("up-arrow-icon-starter");
const shop_starter_content = document.getElementById("shop-starters-content");

arrowFunc(shop_starters_menu, shop_starters_message, arrow_icon_up_starter, arrow_icon_down_starter, shop_starter_content);


//logic for card hover/click
const cards = document.querySelectorAll(".individual-card");

cards.forEach(card => {
    const cardLink = card.querySelector(".card-name-url");
    
    card.addEventListener("mouseenter", function() {
        console.log("this is a test and it is working");
        cardLink.classList.add("active");
    });
    card.addEventListener("mouseleave", function(){
        cardLink.classList.remove("active");
    });

    card.addEventListener("click", function(){
        window.location.href = cardLink.dataset.url;
    })
});