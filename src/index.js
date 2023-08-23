import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

const body = document.querySelector("body");
window.addEventListener("load", (e) => {
  body.style.backgroundColor = "purple";
});

const head = document.querySelector("header");

head.addEventListener("mouseover", (e) => {
  head.style.backgroundColor = "red";
});
head.addEventListener("mouseleave", (e) => {
  head.style.backgroundColor = "#fff";
});

const headNav = document.getElementById("name");

headNav.addEventListener("focus", (e) => {
  headNav.style.border = "3px solid blue";
});

headNav.addEventListener("blur", (e) => {
  headNav.style.border = "1px solid blue";
});

const img = document.querySelectorAll("img");

img.forEach((i) => {
  i.addEventListener("wheel", (e) => {
    i.style.filter = "grayscale(100%)";
  });
  i.addEventListener("dblclick", (e) => {
    i.style.filter = "unset";
  });
});

const butSıl = document.querySelectorAll(".btn");

butSıl.forEach((i) => {
  i.addEventListener("click", (e) => {
    i.remove();
  });
  i.addEventListener("keydown", (e) => {
    if (e.key == 1) {
      return butSıl;
    }
  });
});
