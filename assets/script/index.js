let mangaBooks = [];

fetch("https://secure-hollows-51551.herokuapp.com/manga-content/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    mangaBooks = json;
    json.forEach((manga) => {
      createCard(manga);
      createModal(manga);
    });
  });

function createCard(manga) {
  let book = `
      <div class="manga">
        <h4>${manga.title}</h4>
        <img src=${manga.img} alt=${manga.title} id="mangaCard"/>
        <button id="viewbtn" type="button" name="button"" onclick="disMod(${manga.id})">View Info</button>
      </div>
    `;
  let body = document.getElementById("mangas");
  body.innerHTML += book;
}

function createModal(manga) {
  let modal = `
      <div class="modal" modal=${manga.id} id="mangamodal" style="top: -100%">
        <img src=${manga.img} id="manga_img" alt=${manga.title}/>
        <div class="manga">
          <p1 id="manga_title">Title: ${manga.title}</p1>
          <p1 id="titleJp">Japanese: ${manga.titleJp}</p1>
          <p1 id="price">Price:$8</p1>
          <p1 id="wirtten">Written By: ${manga.written_by}</p1>
          <p1 id="published">Published By: ${manga.published_by}</p1>
          <p1 id="genre">Genre: ${manga.genre}</p1>
          <p1 id="syn">Synopsis: ${manga.synopsis}</p1>
          <button id="cartBtn" type="button" name="button" onclick="add(${manga.id})">Add to cart</button>
        </div>
        <p onclick="disMod(${manga.id})" id="close">X</p>
      </div>
    `;
  let body = document.getElementById("modal");
  body.innerHTML += modal;
}

function disMod(id) {
  let modal = document.querySelectorAll(`[modal='${id}']`)[0];
  if (modal.style.top == "-100%") {
    modal.style.top = "10%";
  } else {
    modal.style.top = "-100%";
  }
}
