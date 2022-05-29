function animate() {
  var animates = document.querySelectorAll(".animate");

  for (var i = 0; i < animates.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animates[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      animates[i].classList.add("active");
    } else {
      animates[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", animate);
