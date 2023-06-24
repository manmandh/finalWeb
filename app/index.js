let next = document.getElementById("next");
let prev = document.getElementById("prev");
let list = document.querySelectorAll(".nav-resp .list");
let navToggle = document.querySelector(".nav-toggle");
let navResp = document.querySelector(".nav-resp");

navToggle.onclick = () => {
  let toggleIcon = navToggle.querySelector("i");
  if ((toggleIcon.className == "bx bx-menu")) {
    toggleIcon.className = "fa-solid fa-xmark";
    navResp.style.width = '200px'
  } else {
    toggleIcon.className = "bx bx-menu";
    navResp.style.width = '50px'
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

next.onclick = () => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").appendChild(lists[0]);
};

prev.onclick = () => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

setInterval(() => {
  let lists = document.querySelectorAll("header .item");
  document.getElementById("slide").appendChild(lists[0]);
}, 5000);
