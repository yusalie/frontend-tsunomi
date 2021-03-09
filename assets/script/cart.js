function add(id) {
  fetch("https://secure-hollows-51551.herokuapp.com/manga-content/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let cartItem = json.filter((product) => {
        return product.id == id;
      });
      amount = document.getElementById("amount");
      amountcart = document.getElementById("cartAmount");
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart ? cart : (cart = []);

      cart.push(cartItem[0]);
      amount.innerHTML = cart.length;

      if (cartItem == 1) {
        amountcart.innerHTML += 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = []);

  let cartContent = document.getElementById("cartList");
  cartContent.innerHTML = "";

  cart.forEach((item) => {
    cartContent.innerHTML += `
    <img src=${item.img} alt=${item.titleJp} id="cartImg"/>
    <p id="cartFont">${item.title}</p>
    <p id="cartAmount">1</p>
    <button type="button" name="button" onclick="remCart()" id="remBtn">
      Remove
    </button>
    `;
  });
}

function showCart() {
  let checkout = document.getElementById("checkout");
  let cart = document.getElementById("cartMenu");
  cart.classList.toggle("show");
}

function remCart() {
  let cartList = document.getElementById("cartList");
  products = [];
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    products = mangaBooks.filter((book) => {
      return book.id == item;
    });
    products
      ? products.forEach((product) => {
          cartList.innerHTML -= `

      <li id="cartFont"><img src=${product.img} alt=${product.title} id="cartImg"/>${product.title}<label id="amount_cart"></label></br>
      <button type="button" name="button" onclick="remCart()" id="remBtn">
        Remove
      </button></li>
      `;
        })
      : (cartList.innerHTML -= `

    <li id="cartFont">Nothing in cart</li>
    `);
  });
}
