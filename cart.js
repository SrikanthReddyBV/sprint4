var catalouge_div = document.getElementById("catalouge");
function showcart(cart) {
  //   localStorage.setItem("cart", null);

  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  var cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  for (var i = 0; i < cart.length; i++) {
    var product_div = document.createElement("div");
    product_div.setAttribute("class", "product");
    var img_div = document.createElement("div");
    var img = document.createElement("img");
    img.src = cart[i].images[0];
    img_div.append(img);
    var button_div = document.createElement("div");
    button_div.innerHTML = `<h3>${cart[i].name}</h3><button onclick="addToCart(${i})">Add to cart</button> `;

    product_div.append(img_div, button_div);
    catalouge_div.appendChild(product_div);

    //  for right

    var right = document.getElementById("right");
    let cart_total = 0;
    let cart_price = 0;
    for (let i = 0; i < cart.length; i++) {
      cart_total++;
      cart_price += cart[i].price;
    }
    right.innerHTML = `<h3>Cart Items  : ${cart_total}</h3>
                          <h5 id="cart_price">Cart price : ${cart_price} </h5>
                          <p>Enter Promocode</p>
                         <input id="promobox" type="text" />
                         <button id="checkout" onclick="checkout(${cart_price})">Checkout</button>`;
  }
}
showcart();

function checkout() {
  var promobox = document.getElementById("promobox").value;
  if (promobox == "masai30") {
    var cart = JSON.parse(localStorage.getItem("cart"));
    alert("promotion applied");
    let cart_price = 0;
    for (let i = 0; i < cart.length; i++) {
      cart_price += cart[i].price;
    }
    cart_price -= cart_price * 0.3;
    //   console.log(cart_price);
    var right = document.getElementById("right");
    right.innerHTML += `<h3>Updated price : ${cart_price}</h3>`;
    window.location.href = "checkout.html";
  } else {
    alert("wrong promo code");
  }
}
