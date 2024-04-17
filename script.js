var val = parseInt(document.getElementById("cnt").value);

function inc_val() {
  console.log(val);
  val += 1;
  document.getElementById("cnt").value = val;
}

function dec_val() {
  console.log(val);
  val -= 1;
  document.getElementById("cnt").value = val;
}

document.getElementById("f_submit").addEventListener("submit", function (e) {
  e.preventDefault();
  var u_name = document.getElementById("u_name");
  var u_age = document.getElementById("u_age");
  var u_cell = document.getElementById("u_cell");
  console.log(u_name, u_age, u_cell);
  var y_name = document.getElementById("y_name");
  console.log(y_name.textContent);
  y_name.textContent = "Your name: " + u_name.value;
  y_age.textContent = "Your age: " + u_age.value;
  y_cell.textContent = "Your cell: " + u_cell.value;
});

function chnPara() {
  document.querySelector(".div1").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum, quia beatae explicabo voluptatibus veritatis possimus, fugit quibusdam consequuntur incidunt expedita commodi laudantium voluptatum accusamus saepe? Est animi accusantium distinctio sit accusamus, eaque fuga reprehenderit, dolorum dolor veniam harum quos?";
}
