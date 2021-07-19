var catalouge_div = document.getElementById("catalouge");

var products = [
  {
    name: "Gold Ring",
    price: 20000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UY575_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41IgLN0YAdL._SY300_SX300_.jpg",
    ],
  },
  {
    name: "Gold Chain",
    price: 40000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71TKm9wLReL._UY500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81xXTN6CONL._UY500_.jpg",
    ],
  },
  {
    name: "Gold Ring",
    price: 30000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UY575_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41IgLN0YAdL._SY300_SX300_.jpg",
    ],
  },
  {
    name: "Gold Ring",
    price: 80000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UY575_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41IgLN0YAdL._SY300_SX300_.jpg",
    ],
  },
  {
    name: "Gold Ring",
    price: 20000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UY575_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41IgLN0YAdL._SY300_SX300_.jpg",
    ],
  },
  {
    name: "Gold Ring",
    price: 20000,
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UY575_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41IgLN0YAdL._SY300_SX300_.jpg",
    ],
  },
];

if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(products));
}

function showProducts(products) {
  catalouge_div.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var product_div = document.createElement("div");
    product_div.setAttribute("class", "product");
    var img_div = document.createElement("div");
    var img = document.createElement("img");
    img.src = products[i].images[0];
    img_div.append(img);
    var button_div = document.createElement("div");
    button_div.innerHTML = `<h3>${products[i].name}</h3><p>${products[i].price}</p><button onclick="addToCart(${i})">Add to cart</button> `;

    product_div.append(img_div, button_div);
    catalouge_div.appendChild(product_div);
  }
}

function addToCart(i) {
  var cart = [];
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem("cart"));
  let isInCart = false;
  for (let j = 0; j < cart.length; j++) {
    if (products[i].name == cart[j].name) {
      isInCart = true;
      alert("already in cart");
    }
  }

  if (!isInCart) {
    let temp = {
      name: "",
      price: 0,
      images: "",
    };
    let p_name = products[i].name;
    let p_price = products[i].price;
    let p_images = products[i].images;
    temp.name = p_name;
    temp.price = p_price;
    temp.images = p_images;
    console.log(temp);
    cart.push(temp);
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function htoL() {
  console.log("htol clicked");
  products.sort(function (a, b) {
    a.price - b.price;
  });
  console.log(products + "htol");
  showProducts(products);
}

function cartClicked() {
  window.location.href = "cart.html";
}

function ltoH() {
  console.log("ltoh clicked");
  products.sort(function (a, b) {
    b.price - a.price;
  });
  console.log(products + " ltoh");
  showProducts(products);
}
