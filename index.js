
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

    //Make divs clickable and make X's and O's
    var counter = 0;
    box.addEventListener("click", function(){
      counter += 1;
      for (var j = 0; j < array.length; j++) {
        this.innerHTML = (array[counter - 1]);
      }

      var answers = [];
      var b1 = (document.getElementsByClassName("box1")[0].innerHTML)
      var b2 = (document.getElementsByClassName("box2")[0].innerHTML)
      var b3 = (document.getElementsByClassName("box3")[0].innerHTML)

      var b4 = (document.getElementsByClassName("box4")[0].innerHTML)
      var b5 = (document.getElementsByClassName("box5")[0].innerHTML)
      var b6 = (document.getElementsByClassName("box6")[0].innerHTML)

      var b7 = (document.getElementsByClassName("box7")[0].innerHTML)
      var b8 = (document.getElementsByClassName("box8")[0].innerHTML)
      var b9 = (document.getElementsByClassName("box9")[0].innerHTML)

      // X Wins First Row
      if (b1 === array[0] && b2 === array[0] && b3 === array[0]){
        alert("X Wins the first row!")
      }

      var combinations = [[array[0], array[0], array[0]],
      ]
      // O Wins First Row
      // if (b1 === array[0] && b2 === array[0] && b3 === array[0]){
      //   alert("X Wins the first row!")
      // }

      // X Wins Second Row
      // O Wins Second Row
      // X Wins third Row
      // O Wins Third Row
      // X Wins First Column
      // O Wins First Column
      // X Wins Second Column
      // O Wins Second Column
      // X Wins Third Column
      // O Wins Third Column
      // X Wins Diagonal Left - right
      // O Wins Diagonal Left - right
      // X Wins Diagonal right - Left
      // O Wins Diagonal right - left
















      if (b4 === array[0] && b5 === array[0] && b6 === array[0]){
        alert("X Wins the first row!")
      }

      if (counter > array.length - 1){
      alert("Draw! Please start over");
      }

    });
  }
}
