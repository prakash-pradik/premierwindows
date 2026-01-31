document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");

  if (searchBar && searchOverlay && closeSearch) {
    searchBar.addEventListener("click", (e) => {
      e.preventDefault();
      searchOverlay.classList.remove("translate-y-full");
    });

    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.add("translate-y-full");
    });
  }


  
});