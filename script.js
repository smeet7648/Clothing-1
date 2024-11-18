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