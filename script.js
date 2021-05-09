// Connects the function "solve" to the "Input" button.
document.getElementById('button').addEventListener('click', solve)
let cirNum = 0
let areaNum = 0

function solve () {
  // Gets the number typed by user and converts to an integer.
  cirNum = document.getElementById('input').value
  cirNum = parseInt(cirNum)
  areaNum = document.getElementById('input').value
  areaNum = parseInt(areaNum)

  if (cirNum && areaNum > 0) {
    // Does the math for the circumference and area of the circle and prints the answers onto the webpage.
    cirNum = cirNum / 2
    cirNum = 2 * 3.14 * cirNum

    areaNum = areaNum / 2
    areaNum = 3.14 * areaNum * areaNum

    document.getElementById('answer-one').innerHTML = cirNum
    document.getElementById('answer-two').innerHTML = areaNum
  }

  else if (cirNum && areaNum <= 0) {
    // Alerts the user if they have entered an invalid character into the text box.
    alert('Please enter a valid number')
  }

  else {
    // Alerts the user if they have entered an invalid character into the text box.
    alert('Please enter a valid number')
  }
}
