function toggleMode() {
    var body = document.body;
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.style.backgroundColor = "#f0f0f0"; // Light mode background color
    } else {
      body.classList.add("dark-mode");
      body.style.backgroundColor = "#333"; // Dark mode background color
    }
  }

  function playMusic(){
    var music = new Audio("SRC/PH Intro.mp3");
    music.play();
    }