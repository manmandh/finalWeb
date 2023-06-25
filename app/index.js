let next = document.getElementById("next");
let prev = document.getElementById("prev");
let list = document.querySelectorAll(".nav-resp .list");
let navToggle = document.querySelector(".nav-toggle");
let navResp = document.querySelector(".nav-resp");
let filterButton = document.querySelectorAll(".filter");

// event for set width navbar responsive is bigger
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

// next slide
next.onclick = () => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").appendChild(lists[0]);
};

// previous slide
prev.onclick = () => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// auto next slide every 5 seconds
setInterval(() => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").appendChild(lists[0]);
}, 5000);

// filter film
filterButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButton.forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });
    btn.classList.add("active");
    filterFilm(btn.getAttribute('fill'));
  });
});

let film_url = "./data/movie.json"
let cards = document.querySelector('.newFilm-list-wrapper');

function filterFilm(kind) {
  let check = false;
  cards.innerHTML = '';
  fetch(film_url)
    .then((Response) => Response.json())
    .then((data) => {
      data.forEach((element, i) => {
        if (element.category === kind && element.kind === 'new') {
          check = true;
          let card = document.createElement("div");
          card.classList.add("newFilm-item");
          card.innerHTML = `
        <div class="newFilm-img">
        <img src="${element.image.replace('.', '')}" alt="" />
        <div class="layer">
          <div class="desc">
            ${element.desc}
          </div>
          <button class="watch">Remind me</button>
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
      if (!check) {
        let noti = document.createElement('div');
        noti.style.color = '#fff';
        noti.style.textAlign = 'center';
        noti.innerText = 'Have no result';
        cards.appendChild(noti);
      }
    });
}

