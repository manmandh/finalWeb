let list = document.querySelectorAll(".nav-resp .list");
let navToggle = document.querySelector(".nav-toggle");
let navResp = document.querySelector(".nav-resp");

navToggle.onclick = () => {
  let toggleIcon = navToggle.querySelector("i");
  if (toggleIcon.className == "bx bx-menu") {
    toggleIcon.className = "fa-solid fa-xmark";
    navResp.style.width = "200px";
  } else {
    toggleIcon.className = "bx bx-menu";
    navResp.style.width = "50px";
  }
};

for (let i = 0; i < list.length; i++) {
  list[i].onclick = () => {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

// render card film

let film_url = "../data/movie.json";
let cards = document.querySelector(".list-wrapper");

fetch(film_url)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((element, i) => {
      if (element.kind === "popular") {
        let card = document.createElement("div");
        card.classList.add("newFilm-item");
        console.log(card);
        card.innerHTML = `
      <div class="newFilm-img">
      <img src="${element.image}" alt="" />
      <div class="layer">
        <div class="desc">
          ${element.desc}
        </div>
        <button class="watch">Watch now</button>
      </div>
      </div>
      <div class="newFilm-content">
        <div class="top">
          <span class="name">${element.name}</span>
          <span class="year">${element.year}</span>
        </div>
        <div class="bottom">
          <div class="quality">${element.quality}</div>
          <div class="desc">
            <span class="time"
              ><i class="bx bx-time"></i><span>${element.time}</span></span
            >
            <span class="rate"
              ><i class="bx bx-star"></i><span>${element.rate}</span></span
            >
          </div>
        </div>
      </div>
      `;
        cards.appendChild(card);
      }
    });
  });