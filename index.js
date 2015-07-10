// for (var i = 1; i < 10; i++) {
//   // boxes.setAttribute("id", "boxes" + i);
//   var boxes = document.createElement("div");
//   boxes.className = "boxes";
//   document.getElementByID("board");
//   board.appendChild(boxes);
//
// }


var clickedBox;
var box = document.getElementsByClassName("box");
for (var i = 1; i < 10; i++) {
  var boxDiv =  document.createElement("div");
  boxDiv.className = "box";
  boxDiv.setAttribute("id", "box" + i);
  boxDiv.style.margin = "50px";
  boxDiv.style.position = "relative";

  main.appendChild(boxDiv);
}
