var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue('Avengers End Game'));
var userName = readlineSync.question('Give you name? ');
console.log(chalk.yellow('Welcome! '+ userName));
console.log(chalk.yellow('Lets Begin!'));
var score = 0;
function endGame(ques, ans){
  var userAns = readlineSync.question(ques);
  if(userAns == ans){
    score = score + 1;
    console.log(chalk.green('Right!'));

    console.log(score);
  } 
  else{
    score = score - 1;
    console.log(chalk.red('Wrong!'));
    console.log(score);

  }

}

var questions =[{
  ques : " Which planet must be visited to claim one of the Infinity Stones? a.Morag b.Sakaar c.Knowhere ",
  ans : "a"
},
{
  ques : "Who sacrifices themselves for the Soul Stone? a. a. Clint Barton b. Natasha Romanoff c. Nebula ",
  ans : "b"
},
{
  ques : "What happens to Thor in the years following the Snap? a. He goes to counselling b. Returns to Asgard c. Gains weight ",
  ans :"c"
},
{
  ques : "Who is the director? a. Joe Russo b. Kevin Feige c. Chris Evans ",
  ans :"a"
}
]

for(var i=0; i<questions.length; i=i+1){
  var currentQues = questions[i];
  endGame(currentQues.ques,currentQues.ans);
}
console.log("Final score = "+ score);
console.log(chalk.blue("Thanks for playing! "+ userName));