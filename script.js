function enterSite() {
  window.location.href = "main.html";
}

const messages = {
  "Open When You're Sad":
    "Hey love, I know today feels heavy. But you are stronger than every storm 💛",

  "Open When You Miss Me":
    "Distance is just space, not separation. I'm always with you.",

  "Open When You Can't Sleep":
    "Close your eyes. Imagine me holding your hand. Breathe slowly."
};

function openLetter(element) {
  element.classList.add("fall");

  const title = element.innerText;
  document.getElementById("letterText").innerText = messages[title];

  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 500);
}

function closeLetter() {
  document.getElementById("popup").style.display = "none";
}
