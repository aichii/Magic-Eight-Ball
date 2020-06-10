let userName = " "

userName = "Bunny"

if (userName) {
  console.log(`Hey ${userName}!`)
}
else {
  console.log("Hello!")
}

//question user wants to ask magic ball.
let userQuestion = " " ;

userQuestion = "When will I get to go to the beach again?"
console.log(`${userName} asked Magic Eight Ball: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = randomNumber

function eightBallResponses () = {

if (randomNumber == 0) {
  console.log('It is certain')
}
else if (randomNumber == 1) {
  console.log('It is decidedly so')
}
else if (randomNumber == 2) {
  console.log('Reply hazy try again')
}
else if (randomNumber == 3) {
  console.log('Cannot predict now')
}
else if (randomNumber == 4) {
  console.log('Cannot predict now')
}
else if (randomNumber == 5) {
  console.log('Do not count on it')
}
else if (randomNumber == 6) {
  console.log('My sources say no')
}
else if (randomNumber == 7) {
  console.log('Outlook not so good')
}
else if (randomNumber == 8) {
  console.log('It is decidedly so')
}
console.log(eightBall) ;
}

// let button = document.querySelector('button');
// let answer = document.querySelector('#answer');

//add a click event to the submit button

button.addEventListener('click', function (){
   eightBallResponses ();
})
