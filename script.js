document.getElementById("imghide").addEventListener("click", function () {
  document.getElementById("none").style.display = "block";
  document.getElementById("imgshow").style.display = "block";
  document.getElementById("imghide").style.display = "none";
});
document.getElementById("imgshow").addEventListener("click", function () {
  document.getElementById("none").style.display = "none";
  document.getElementById("imgshow").style.display = "none";
  document.getElementById("imghide").style.display = "block";
});

let currentIndex = 0;
const slides = document.querySelectorAll('.f4 div img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

document.getElementById("next11").addEventListener("click", function () {
  let a = document.getElementById("sh1");
  let b = document.getElementById("sh2");
  let c = document.getElementById("sh3");
  let d = document.getElementById("sh4");

  a.style.display = "none";
  b.style.marginLeft = "142px";
  b.style.marginTop = "53px"
  c.style.marginLeft = "585px";
  d.style.display = "block";
});

document.getElementById("prev11").addEventListener("click", function () {
  let a = document.getElementById("sh1");
  let b = document.getElementById("sh2");
  let c = document.getElementById("sh3");
  let d = document.getElementById("sh4");

  a.style.display = "block";
  b.style.marginLeft = "585px";
  b.style.marginTop = "-387px";
  c.style.marginLeft = "1035px";
  d.style.display = "none";
});

document.getElementById("next13").addEventListener("click", function () {
  let a = document.getElementById("kw1");
  let b = document.getElementById("kw2");
  let c = document.getElementById("kw3");
  let d = document.getElementById("kw4");

  a.style.display = "none";
  b.style.marginLeft = "142px";
  b.style.marginTop = "53px";
  c.style.marginLeft = "585px";
  d.style.display = "block";
});

document.getElementById("prev12").addEventListener("click", function () {
  let a = document.getElementById("kw1");
  let b = document.getElementById("kw2");
  let c = document.getElementById("kw3");
  let d = document.getElementById("kw4");

  a.style.display = "block";
  b.style.marginLeft = "585px";
  b.style.marginTop = "-387px"
  c.style.marginLeft = "1035px";
  d.style.display = "none";
});

document.getElementById("next94").addEventListener("click", function () {
  let a = document.getElementById("ht1");
  let b = document.getElementById("ht2");
  let c = document.getElementById("ht3");
  let d = document.getElementById("ht4");

  a.style.display = "none";
  b.style.marginLeft = "142px";
  b.style.marginTop = "53px"
  c.style.marginLeft = "585px";
  d.style.display = "block";
});

document.getElementById("prev92").addEventListener("click", function () {
  let a = document.getElementById("ht1");
  let b = document.getElementById("ht2");
  let c = document.getElementById("ht3");
  let d = document.getElementById("ht4");

  a.style.display = "block";
  b.style.marginLeft = "585px";
  b.style.marginTop = "-387px"
  c.style.marginLeft = "1035px";
  d.style.display = "none";
});


document.getElementById("next56").addEventListener("click", function () {
  let a = document.getElementById("sk1");
  let b = document.getElementById("sk2");
  let c = document.getElementById("sk3");
  let d = document.getElementById("sk4");

  a.style.display = "none";
  b.style.marginLeft = "142px";
  b.style.marginTop = "53px"
  c.style.marginLeft = "585px";
  d.style.display = "block";
});

document.getElementById("prev52").addEventListener("click", function () {
  let a = document.getElementById("sk1");
  let b = document.getElementById("sk2");
  let c = document.getElementById("sk3");
  let d = document.getElementById("sk4");

  a.style.display = "block";
  b.style.marginLeft = "585px";
  b.style.marginTop = "-387px"
  c.style.marginLeft = "1035px";
  d.style.display = "none";
});

document.getElementById("next25").addEventListener("click", function () {
  let a = document.getElementById("tk1");
  let b = document.getElementById("tk2");
  let c = document.getElementById("tk3");
  let d = document.getElementById("tk4");

  a.style.display = "none";
  b.style.marginLeft = "142px";
  b.style.marginTop = "53px"
  c.style.marginLeft = "585px";
  d.style.display = "block";
});

document.getElementById("prev23").addEventListener("click", function () {
  let a = document.getElementById("tk1");
  let b = document.getElementById("tk2");
  let c = document.getElementById("tk3");
  let d = document.getElementById("tk4");

  a.style.display = "block";
  b.style.marginLeft = "585px";
  b.style.marginTop = "-387px"
  c.style.marginLeft = "1035px";
  d.style.display = "none";
});
