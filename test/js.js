let el = document.getElementById("my-div");
console.log(el);

el.onclick = function () {
  el.classList.add("test-class");
};
