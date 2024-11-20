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
  
  // Function to change slides every few seconds
  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length; 
      showSlide(currentIndex);
  }, 3000); 