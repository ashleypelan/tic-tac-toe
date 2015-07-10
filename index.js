
window.onload=function() {
  var array = [" X ", " O ", " X ", " O ", " X ", " O ", " X ", " O ", " X "];

  for (var i = 1; i < 10; i++) {
    var box = document.createElement("div");
    document.body.appendChild(box);
    box.className = ("box" + i);

    var counter = 0;
    box.addEventListener("click", function() {
      counter += 1;
      console.log(array[counter - 1]);
      });



    if (i === 4 || i === 7 || i === 10) {
      box.style.clear = "left";

    }
  }
}
