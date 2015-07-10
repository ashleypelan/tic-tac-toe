// window.onLoad = function() {
//   for (var i = 1; i < 10; i++) {
//    var box = document.createElement("div");
//    document.body.appendChild(box);
//    box.className = "boxClassName";
//   }
// }
window.onload=function() {
  for (var i = 1; i < 10; i++) {
    var box=document.createElement("div");
    document.body.appendChild(box);
    box.className = ("box" + i);

    box.addEventListener("click", function() {
      alert("you got it!");
    });

    if (i === 4 || i === 7 || i === 10) {
      box.style.clear = "left";

    }
  }
}
