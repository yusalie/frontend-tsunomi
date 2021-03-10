// function checkout() {
//   localStorage.clear();
// }

function amountItems() {
  total = JSON.parse(localStorage.getItem("cart")).length * 8;
  console.log(total);
  document.getElementById("amount-pay").innerHTML = "$" + total;
}
