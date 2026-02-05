function toggle(box) {
  box.classList.toggle("selected");
}

function verify() {
  const selected = document.querySelectorAll(".img-box.selected");

  if (selected.length >= 3) {
    window.location.href = "thanks.html";
  } else {
    alert("CAPTCHA salah 😆");
  }
}
document.querySelector(".icon").onclick = () => {
  document.querySelectorAll(".img-box img").forEach(img => {
    img.style.order = Math.floor(Math.random() * 9);
  });
};
