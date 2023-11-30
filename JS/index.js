
let nav = document.querySelector("nav");
let Header = document.querySelector("header");
let list = document.querySelectorAll("#navlist");
let navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        Header.style.display = "none";
        navbar.style.padding = "10px 0px";
        list.forEach(item => {
            item.style.color = "white";
            item.style.opacity = "1";
        });
    } else {
        Header.style.display = "flex";
        nav.style.color = "black";
        nav.style.backgroundColor = "white";
        navbar.style.padding = "20px 0px";
        list.forEach(item => {
            item.style.color = "black";
        });
    }

});
let mouse = document.querySelector(".bi-mouse");
let pngCart = document.querySelector("#png-cart");
mouse.addEventListener("click", (event) => {
    event.preventDefault();
    pngCart.scrollIntoView({
        behavior: "smooth"
    })
})

let CartAnimals = [
    { image: "../Image/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png", heading: "Teddy Bear", price: "$ 30.00 USD" },
    { image: "../Image/hippon.png", heading: "Mega Plush Toys", price: "$ 38.00 USD" },
    { image: "../Image/dog.png", heading: "Cute Dog", price: "$ 24.00 USD" },
    { image: "../Image/cat.png", heading: "Little Friend", price: "$ 27.00 USD" }
]
let inAnimalsCart = document.querySelector(".in-animals-cart");
CartAnimals.forEach(item => {
    let animal = document.createElement("div");
    animal.classList.add("carts");
    animal.innerHTML = `<div class="image">
    <img src="${item.image}">
</div>
<h4>${item.heading}</h4>
<span class="toyImg">${item.price}</span>`;
    inAnimalsCart.appendChild(animal);
})

let CartAnimals2 = [
    { image: "../Image/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png", heading: "Happy Flower", price: "$ 30.00 USD" },
    { image: "../Image/machine.png", heading: "Lift Machine", price: "$ 38.00 USD" },
    { image: "../Image/camera.png", heading: "Wooden Camera", price: "$ 24.00 USD" },
    { image: "../Image/Rabbit.png", heading: "Little Rabbit", price: "$ 27.00 USD" }
]


let inAnimalsCart2 = document.querySelector(".animals-cart2");
let countCart = document.querySelector(".count");
let myCart = document.querySelector(".myCart");
let clickCount = 0;
CartAnimals2.forEach(item2 => {
    let animals = document.createElement("div");
    animals.classList.add("carts");
    animals.innerHTML = `<div class="image">
        <img src="${item2.image}">
    </div>
    <h4>${item2.heading}</h4>
    <span class="toyImg">${item2.price}</span>`;
    inAnimalsCart2.appendChild(animals);
});

let carts = document.querySelectorAll(".toyImg");

carts.forEach(cart => {
    cart.addEventListener("click", () => {
        clickCount++;
        countCart.innerHTML = `${clickCount}`;
    });

});



let finishToys = document.querySelector("#finish-toys");
let toysImage = [
    { image: "../Image/toy1.jpg" },
    { image: "../Image/toy2.jpg" },
    { image: "../Image/toy3.jpg" },
    { image: "../Image/toy4.jpg" },
    { image: "../Image/toy5.jpg" },
    { image: "../Image/toy6.jpg" }
];
toysImage.forEach(item2 => {
    let toy = document.createElement("div");
    toy.classList.add("image");
    toy.innerHTML = `<div class="image">
    <img src="${item2.image}">
</div>`
    finishToys.appendChild(toy);
});

let menu = document.querySelector(".bi-list");
let lists = document.querySelector(".lists");

menu.addEventListener("click", () => {
    if (lists.style.height === "0px") {
        lists.style.display = "block";
        lists.style.height = lists.scrollHeight + "px";
    } else {
        lists.style.height = "0";
        setTimeout(() => {
            lists.style.display = "none";
        }, 300);
    }
});


let Count = document.querySelectorAll(".toycart");
let cartClick = document.querySelector(".cartClick");
Count.forEach(item=>{
    item.addEventListener("click", () => {
        setTimeout(() => {
            cartClick.style.display = "block";
        }, 100);
    });
    let closeCart = document.querySelector(".bi-x-lg");
    closeCart.addEventListener("click", () => {
        setTimeout(() => {
            cartClick.style.display = "none";
        }, 100);
    })
})





