// //  Progressbar

let progress = document.getElementById("progress");

let inputs = document.querySelectorAll(
  'input[type="text"], select, input[type="radio"]'
);

inputs.forEach((input) => {
  input.addEventListener("input", updateProgressBar);
});


function updateProgressBar(val = 0) {
  let flag2 = 0;
  let flag1 = 0;
  let filledInputs = 0;
  inputs.forEach((input) => {
    if (
      (input.type === "text" && input.value.length >= 3) ||
      (input.type === "radio" && input.checked)
    ) {
      filledInputs++;
    }
  });
 
 
  if (val == 2) {
    if (flag2 == 0) {
      filledInputs++;
      flag2++;
    }
  }

  if (val == 1) {
    if (flag1 == 0) {
      filledInputs++;
      flag1++;
    }
  }


  const steps = (filledInputs / 6) * 100;
  progress.style.width = `${steps}%`;

  if (steps == 50) {
    formChange();
  }
}

// //  Drop Down....
function refblock() {
  return false;
}

function dd1click() {
  let ddbox = document.getElementById("ddbox1");
  let symbol = document.getElementById("symbol1");
  let x = "|||";
  let y = "X";

  if (symbol.innerText === x) {
    ddbox.style.display = "block";
    ddbox.style.transform = "translateY(60%)";
    symbol.innerText = y;
  } else {
    ddbox.style.display = "none";
    ddbox.style.transform = "translateY(60%)";
    symbol.innerText = x;
  }
}

function dd2click() {
  const ddbox = document.getElementById("ddbox2");
  let symbol = document.getElementById("symbol2");
  let x = "|||";
  let y = "X";

  if (symbol.innerText === x) {
    ddbox.style.display = "block";
    ddbox.style.transform = "translateY(60%)";

    symbol.innerText = y;
  } else {
    ddbox.style.display = "none";
    ddbox.style.transform = "translateY(60%)";

    symbol.innerText = x;
  }
}

// //  Form change....
function formChange() {
  let Form1 = document.getElementById("form1");
  let Form2 = document.getElementById("form2");

  try {
    Form1.style.display = "none";
    Form2.style.display = "block";
  } catch (e) {
    console.log(e);
  } finally {
    Form2.style.display = "block";
    event.preventDefault();
  }
}

//   Drop Down....
//  drop down selection

function dd1select(value) {
  let dd1lbl = document.getElementById("dd1lbl");
  dd1lbl.innerText = value;
}

function dd2select(value) {
  let dd2lbl = document.getElementById("dd2lbl");
  dd2lbl.innerText = value;
}
