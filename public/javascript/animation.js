const desc = `Hey You There. Wanna know what this all about. \n\r<br>
    This is a chat place place design for people of all walks of life to socialize.
    We have two rules: \n\r <br> Be polite and Have fun`;

const descScreen = document.querySelector(".description");
const btn = document.querySelector(".btn");
const register = document.querySelector(".register");
const close = document.querySelector(".close");

let textPos = 0;

const writeText = (text) => {
  if (textPos <= desc.length - 1) {
    if (text[textPos] == "<" && text[textPos + 3] == ">") {
      descScreen.innerHTML += "<br>";
      textPos += 4;
    }
    descScreen.innerHTML += text[textPos];
    descScreen.innerHTML = descScreen.innerHTML.replace(" |", "");
    descScreen.innerHTML += " |";
    textPos++;
  } else {
    clearInterval(anim);
    descScreen.innerHTML = descScreen.innerHTML.replace(" |", "");
    //console.log(btn.classList);
    btn.classList.add("makeVisible");
  }
};

let anim = setInterval(writeText, 50, desc);

btn.addEventListener("click", () => {
  register.style.display = "flex";
});

close.addEventListener("click", () => {
  register.style.display = "none";
});
