menu = document.getElementById("menu");
links = menu.getElementsByTagName("ul")[0];
function menuOpen() {
  console.log(links);
  if (links.style.left == "-100%") {
    links.style.left = "0";
  } else {
    links.style.left = "-100%";
  }
}
