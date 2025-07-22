const rotatingWords = ["Apps", "Websites", "Hosting"];
let index = 0;
const rotator = document.getElementById("rotateWords");

setInterval(() => {
  rotator.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % rotatingWords.length;
    rotator.textContent = rotatingWords[index];

    // cycle colors
    const colors = ["#00f2fe", "#4facfe", "#a18cd1"];
    rotator.style.color = colors[index % colors.length];
    rotator.style.opacity = 1;
  }, 400);
}, 2000);
