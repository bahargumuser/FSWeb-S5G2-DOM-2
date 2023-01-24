import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document.querySelector("a").addEventListener("mouseover", function (e) {
  alert("Bana da tıkladın!");
});

document.getElementById("fname").addEventListener("focus", myFunction);

function myFunction() {
  document.getElementById("fname").style.backgroundColor = "grey";
} //focus

// resized
window.addEventListener("resize", yepyenifonskiyon);

var x = 0;
function yepyenifonskiyon() {
  var txt = (x += 1);
  document.getElementById("demo").innerHTML = txt;
}
// select

document.getElementById("myText").addEventListener("select", ucuncu);

function ucuncu() {
  document.getElementById("love").innerHTML = "You selected some text!";
}

//scroll
document.getElementById("myDIV").addEventListener("scroll", dorduncu);

function dorduncu() {
  document.getElementById("memo").innerHTML = "You scrolled in div.";
}

//dblclick
document.getElementById("semo").addEventListener("dblclick", besinci);

function besinci() {
  document.getElementById("semo").innerHTML = "I was double-clicked!";
}
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});
//load

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
document.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("drag", function (event) {
  document.getElementById("emo").innerHTML = "The text is being dragged";
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.className == "droptarget") {
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("emo").innerHTML = "The text was dropped";
  }
});
document.getElementById("thisDIV").addEventListener("wheel", yedinci);

function yedinci() {
  this.style.fontSize = "35px";
}
// WHEEL
