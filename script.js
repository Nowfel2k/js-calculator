const display = document.getElementById('display')
let zeroKey = document.getElementById('zero')
zeroKey.disabled = true


function clearAll() {
  display.value = 0;
}

let add = document.getElementById('add')
let sub = document.getElementById('subtract')
let mul = document.getElementById('multiply')
let div = document.getElementById('divide')

const disableSigns = () => {
  add.disabled = true
  mul.disabled = true
  div.disabled = true
}

const enableSigns = () => {
  add.disabled = false
  mul.disabled = false
  div.disabled = false
}

function calculate(value) {

  enableSigns() 

  if(display.value == 0) {
    display.value = ''
  }

  display.value += value;

  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // let allowZero = null
  // for(let i = 1 ; i < 10 ; i++) {
  //   if(value == i) allowZero = true
  // }
  // if(allowZero == null) allowZero = false

  if(value in numArray)  {
    // allow zero 
    zeroKey.disabled = false
  }
  else {
    // disable zero
    zeroKey.disabled = true
  }

  let signs = ['+', '-', '*', '/']
  
  // if(value in signs)  {
  //   console.log("key entered is " + value);
  //   disableSigns()
  // }
  // else {
  //   console.log("key entered is " + value + " so enabled signs...");

  //   enableSigns()
  // }


  let allowSigns = true

  for(let i = 0 ; i < 4 ; i++) {
    if(value === signs[i]) {
      allowSigns = false
    }
  }
  if(allowSigns) enableSigns()
  else disableSigns()
  
  // negative exception
  if(value == '-') {
    // let prev =  valueOfDisplay.splice(-2)
    // console.log(display.value)
  }



  // check each key
  let decKey = document.getElementById('decimal')
  if (value == '.') {
    decKey.disabled = true;
  } else {
    decKey.disabled = false;
  }


}

function getResult() {

  let ac_value = display.value

  for(let i = 0 ; ac_value[i] ; i++ ) {
    if(ac_value[i] == '.' && ac_value[i+1] == '.') {
      ac_value[i+1] = '';
    }
  }

  console.log(ac_value)
  let value = eval(ac_value)  

  // value = value.toFixed(2)
  display.value = value
}

disableSigns()


















// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.