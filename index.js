
window.onload=function() {
  var array = [" X ", " O ", " X ", " O ", " X ", " O ", " X ", " O ", " X "];

  //Create my gameboard!
  for (var i = 1; i < 10; i++) {
    var box = document.createElement("div");
    document.body.appendChild(box);
    box.className = ("box" + i);

    if (i === 4 || i === 7 || i === 10) {
      box.style.clear = "left";
    }
  // console.log(box);
  }

  //Make my buttons
  for (var j = 0; j < array.length; j++) {
  }
    var counter = 0;
    box.addEventListener("click", function() {
      counter += 1;
      box.innerHTML = (array[counter - 1]);
      if (counter > array.length){
        alert("Draw! Please start over");
      }
    });
}
