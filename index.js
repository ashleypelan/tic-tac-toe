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
    box.className="box";

    if (i > 0 && i < 4) {
      box.style.backgroundColor = "green";
    }
    if (i > 3 && i < 7) {
      box.style.backgroundColor = "blue";
    }
    if (i > 6 && i < 10) {
      box.style.backgroundColor = "yellow";
    }
    if (i === 4 || i === 7 || i === 10) {
      box.style.clear = "left";

    }
  }
}
