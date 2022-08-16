let counter = 0;
const images = [
    {
        url: 'https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        line1: "FRESH AND ORGANIC",
        line2: "Delicious Seasonal Fruits"
    },
    {
        url: "https://images.unsplash.com/photo-1623433961026-367e4c761977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        line1: "FRESH EVERYDAY",
        line2: "100% Organic Collection"
    },
    {
        url: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        line1: "MEGA SALE GOING ON !",
        line2: "Get December Discount"
    }
]

const leftSlider = document.getElementById("arrow-left");
const rightSlider = document.getElementById("arrow-right");
const line1 = document.getElementById('header-content-line1');
const line2 = document.getElementById('header-content-line2');
const mainHeader = document.getElementsByClassName("main-header");

leftSlider.addEventListener("click", function (event) {
    counter--;
    if (counter == -1) {
        counter = images.length - 1;
    }
    mainHeader[0].style.backgroundImage = `url(${images[counter].url})`;
    line1.innerText = images[counter].line1;
    line2.innerText = images[counter].line2;
});

rightSlider.addEventListener("click", function (event) {

    counter++;
    if (counter == images.length) {
        counter = 0;
    }
    mainHeader[0].style.backgroundImage = `url(${images[counter].url})`;
    line1.innerText = images[counter].line1;
    line2.innerText = images[counter].line2;
});
