const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;
var userName = readlineSync.question('What is your name ? ');
console.log("Welcome " + userName + "! .Let's quiz you on the famous tv show 'The Office'.");
console.log(" ");

function playGame(question,answer)
{
  var UserAnswer = readlineSync.question(question);
  if(UserAnswer === answer)
  {
    console.log(chalk.green('You are right! '));
    score++;
    console.log("Your current score is " +score);
    console.log(" ");
    console.log("------------------------");
  }
  else
  {
    console.log(chalk.red('You are wrong! '));
  
    console.log("Your current score is " + score);
    console.log(" ");
  }
}



var questions=[
  {
   question: chalk.yellow(` What's Phyllis's maiden name? 
   [a] Vance
   [b] Lapin
   [c] Lanpin 
    `),
   answer: "b"
  },
  {
    question: chalk.yellow(`What's Pam's favourite flavour of yogurt? 
    [a] Vanilla
    [b]Strawberry
    [c]Mixed Berry 
     `),
    answer: "c"
  },
  {
    question: chalk.yellow(` What does Kevin suggest Dwight put in his gun holster? 
    [a] A cell phone
    [b] A banana
    [c] A toy gun 
     `),
    answer: "b"
  },
  {
   question: chalk.yellow(`Who is pam's husband ?
   [a] Dwight
   [b] Oscar
   [c] Jim
    `),
   answer:"c"
  },
  {
    question: chalk.yellow(`What did Kevin buy for himself when he got himself for secret santa?
    [a] A foot massager
    [b] A foor bath
    [c]  M&M's 
     `),
     answer: "b"
  }

]

for(var i=0;i< questions.length;i++)
{
  playGame(questions[i].question, questions[i].answer);
  console.log(" ");
}

if(score===5)
{
  console.log(chalk.green('Your total score is '+ score + ".Great job! "));

}
else
{
  console.log(chalk.green("Your total score is " + score));
}