// function checkout() {
//   localStorage.clear();
// }

function amountItems() {
  cart = localStorage.getItem("cart");
  console.log(cart);
  length = cart.length;
  console.log(length);
  total = length * 8;
  console.log(total);
  document.getElementById("amount-pay").innerHTML = "$" + total;
}
