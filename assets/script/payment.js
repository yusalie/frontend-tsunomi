function amountItems() {
  total = JSON.parse(localStorage.getItem("cart")).length * 8;
  console.log(total);
  document.getElementById("amount-pay").innerHTML = "$" + total;
}

function pay() {
  alert("thanks for shopping with us");
  window.location.href = "./index.html";
}

function contin() {
  window.location.href = "./index.html";
}
