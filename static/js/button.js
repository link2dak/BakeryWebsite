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
    cart_content.style.display = "flex";
    overlay.classList.add("active");
}
function closePanel(){
    cart_content.style.display = "none";
    overlay.classList.remove("active");
}

cart_button.addEventListener("click", function(){
    openPanel();
})

overlay.addEventListener("click", closePanel);
exit_button.addEventListener("click", closePanel);

