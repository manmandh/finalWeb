window.onload = () => {
  // Lấy ID sản phẩm từ Query Parameters
  var queryParams = new URLSearchParams(window.location.search);
  var productId = queryParams.get("name");

  let mainFilm = document.querySelector(".main-film");

  // Tải dữ liệu JSON
  fetch("../data/movie.json")
    .then((Response) => Response.json())
    .then((products) => {
      // Tìm sản phẩm theo ID
      var product = products.find((p) => {
        return p.name == productId;
      });

      let mainBg = document.createElement("div");
      mainBg.classList.add("main-bg");
      mainBg.innerHTML = `
      <div class="img">
        <img src="${product.image}" alt="" />
        <button id="play-btn" class="play-btn"><i class="fa-solid fa-play"></i></button>
      </div>
      <div class="main-content">
        <h3 class="name">${product.name}</h3>
        <div class="info">
          <span class="quality">${product.quality}</span>
          <span class="time"><i class="bx bx-time"></i>${product.time}</span>
          <span class="rate"><i class="bx bx-star"></i>${product.rate}</span>
        </div>
        <p class="desc">
          ${product.desc}
        </p>
      </div>
      
      
      <div class="video-cotainer">
        <div class="video">
          <video id="video" src="${product.mp4}" controls></video>
        </div>
        <div class="close-video-btn" id="close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      `;
      mainFilm.appendChild(mainBg);

      let playBtn = document.getElementById("play-btn");
      let video = document.querySelector(".video-cotainer");
      let close = document.getElementById("close");
      console.log(close);

      playBtn.addEventListener("click", () => {
        video.style.zIndex = "2";
      });

      close.addEventListener("click", () => {
        video.style.zIndex = "-1";
      });
    });
};

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
