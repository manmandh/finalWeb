window.onload = () => {

  // Lấy ID sản phẩm từ Query Parameters
  var queryParams = new URLSearchParams(window.location.search);
  var productId = queryParams.get('name');

  // // Tải dữ liệu JSON
  // fetch('../data/movie.json')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then((products) => {
  //     // Tìm sản phẩm theo ID
  //     var product = products.find((p) => {
  //       return p.name == productId;
  //     });

  //     // Cập nhật thông tin sản phẩm trên trang web
  //     var productInfo = document.body;
  //     document.title = product.name + ' - Invite your friend join with you';
  //     productInfo.innerHTML = '<h2>' + product.name + '</h2>' +
  //                             '<p>' + product.image + '</p>'
  //   });
}

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

let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video-cotainer')
let close = document.getElementById('close')
console.log(close);

playBtn.addEventListener('click', () => {
  video.style.zIndex = '2';
})

close.addEventListener('click', () => {
  video.style.zIndex = '-1';
})