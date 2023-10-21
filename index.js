var input_value = $("input.input");
function numberinsert(value) {
  var dfltValue = $("input.input").val();
  input_value.val(dfltValue + value);
}

function clearallinput() {
  input_value.val("");
}
function mainbtn() {
  var input_all_value = input_value.val();
  var calculate = eval(input_all_value);
  input_value.val(calculate);
}
function dblclick() {
  alert("Don't dubble click!!");
  input_value.val(input_value.val().slice(0, -1));
}
function deletebtn() {
  input_value.val(input_value.val().slice(0, -1));
}
function mahim() {
  alert("Wellcome to Mahim calculetor💘");
}
window.addEventListener("keyup", (k) => {
  var key = k.key;
  switch (key) {
    case "c":
      input_value.val("");
      break;
    case "d":
      deletebtn();
      break;
    case "=":
      mainbtn();
      break;
    case "1":
      numberinsert(1);
      break;
    case "2":
      numberinsert(2);
      break;
    case "3":
      numberinsert(3);
      break;
    case "4":
      numberinsert(4);
      break;
    case "5":
      numberinsert(5);
      break;
    case "6":
      numberinsert(6);
      break;
    case "7":
      numberinsert(7);
      break;
    case "8":
      numberinsert(8);
      break;
    case "9":
      numberinsert(9);
      break;
    case "0":
      numberinsert(0);
      break;
    case "/":
      numberinsert("/");
      break;
    case "*":
      numberinsert("*");
      break;
    case "-":
      numberinsert("-");
      break;
    case "+":
      numberinsert("+");
      break;
    case ".":
      numberinsert(".");
      break;
    case "m":
      mahim();
      break;
    default:
      var audio = new Audio("img/boom.mp3");
      audio.volume = "0.33";
      audio.play();
      setTimeout(() => {
        alert("Type right key❕");
      }, 100);
      break;
  }
});
