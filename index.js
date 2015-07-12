
window.onload=function() {
  var array = [" X ", " O ", " X ", " O ", " X ", " O ", " X ", " O ", " X "];

  for (var i = 1; i < 10; i++) {
    var box = document.createElement("div");
    document.body.appendChild(box);
    box.className = ("box" + i);
      if (i === 4 || i === 7 || i === 10) {
        box.style.clear = "left";
      }

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

      // var combinations = [[array[0], array[0], array[0]],
      // ] turn this into a matrix to make logix less code

      // X Wins First Row
      if (b1 === array[0] && b2 === array[0] && b3 === array[0]){
        alert("X Wins the first row!")
      }

      // O Wins First Row
      if (b1 === array[1] && b2 === array[1] && b3 === array[1]){
        alert("O Wins the first row!")
      }

      // X Wins Second Row
      if (b4 === array[0] && b5 === array[0] && b6 === array[0]){
        alert("X Wins the second row!")
      }

      // O Wins Second Row
      if (b4 === array[1] && b5 === array[1] && b6 === array[1]){
        alert("O Wins the second row!")
      }

      // X Wins third Row
      if (b7 === array[0] && b8 === array[0] && b9 === array[0]){
        alert("X Wins the third row!")
      }

      // O Wins Third Row
      if (b7 === array[1] && b8 === array[1] && b9 === array[1]){
        alert("O Wins the third row!")
      }

      // X Wins First Column
      if (b1 === array[0] && b4 === array[0] && b7 === array[0]){
        alert("X Wins the first column!")
      }

      // O Wins First Column
      if (b1 === array[1] && b4 === array[1] && b7 === array[1]){
        alert("O Wins the first column!")
      }

      // X Wins Second Column
      if (b2 === array[0] && b5 === array[0] && b8 === array[0]){
        alert("X Wins the second column!")
      }

      // O Wins Second Column
      if (b2 === array[1] && b5 === array[1] && b8 === array[1]){
        alert("O Wins the second column!")
      }

      // X Wins Third Column
      if (b3 === array[0] && b6 === array[0] && b9 === array[0]){
        alert("X Wins the third column!")
      }

      // O Wins Third Column
      if (b3 === array[1] && b6 === array[1] && b9 === array[1]){
        alert("O Wins the third column!")
      }

      // X Wins Diagonal Left - right
      if (b1 === array[0] && b5 === array[0] && b9 === array[0]){
        alert("X Wins diagonally!")
      }

      // O Wins Diagonal Left - right
      if (b1 === array[1] && b5 === array[1] && b9 === array[1]){
        alert("X Wins diagonally!")
      }

      // X Wins Diagonal right - Left
      if (b3 === array[0] && b5 === array[0] && b7 === array[0]){
        alert("X Wins diagonally!")
      }

      // O Wins Diagonal right - left
      if (b3 === array[1] && b5 === array[1] && b7 === array[1]){
        alert("O Wins diagonally!")
      }



      if (counter > array.length - 1){
      alert("Draw! Please start over");
      }

    });
  }
}
