function search() {
  const searchManga = document.getElementById("searchBar");
  fetch("https://secure-hollows-51551.herokuapp.com/manga-content/")
    .then((response) => response.json())
    .then((json) => {
      if (searchManga) {
        let searchRes = json.filter((mangaitem) => {
          return mangaitem.title == searchManga;
        });
        document.getElementById("mangas").innerHTML = "";
        if (searchRes.length > 0) {
          searchRes.forEach((json) => createManga(json));
        } else {
          document.getElementById(
            "mangas"
          ).innerHTML = `<p>No results found</p>`;
        }
      } else {
        document.getElementById("mangas");
      }
    });
}
