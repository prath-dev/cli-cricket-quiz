var readlineSync = require("readline-sync");
console.log("Welcome To IPl Quiz\n") ;  
var score = 0 ;
 var  userName = readlineSync.question ('what your name') ; 
  function game (question,answer) {
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer) {
      console.log("your right") ; 
      score = score + 1 ;
    } 
    else {
      console.log("your wrong") ; 
      score = score -1 ;
    }  
    console.log ("your current score"+ score) ;
  }  
  	var scoreBoard=[{
      name: "vivek: ",
      score: 1,
    },
    {
      name: "ganesh:",
      score: 5,
  }
]

    var questionOne = {question: " \n1. Who was the Orange Cap Holder of IPL 2021? \n a - KL Rahul b - Virat Kohli c - Shikhar Dhawan d - Sanju Samson\n ", answer: "a"}

var questionTwo = {question: " 2. Who was runner  of IPL 2020?\n a - Jasprit Bumrah b - Rashid Khan c - Yuzvendra Chahal d - Kagiso Rabada \n ", answer: "d"};

var questionThree = {question: " 3. Who was the sponsor IPL 2020?\n a - Byjus b - Dream11 c - Oppo d - DLF\n", answer: "b"};

var questionFour = {question: " 4. Which country was IPL 2021 held in? a - Srl Lanka b - South Africa c - UAE d - USA \n", answer: "c"};

var questionFive = {question: " 5. Which team won IPL 2014? \n a - Delhi Capitals b - Mumbai Indians c - Royal Challengers Bangalore d - Sunrisers Hyderabad \n", answer: "d"};

var questionSix = {question: " 6. Who became the most successful captain in the history of IPL by winning the cup for the 5th time? \n a - MS Dhoni b - Virat Kohli c - David Warner d - Rohit Sharma \n", answer: "d"};

var questionSeven = {question: " 7. Which new team could be added in the IPL 2021 edition? \n a - Ahemdabad b - Gujarat c - J&K d - Assam\n ", answer: "a"};

var questionEight = {question: " 8. JSW - Jindal Steel Works recently bought the ownership of which team? \n a - RCB b - DC c - MI d - KKR \n", answer: "b"};

var questionNine = {question: " 9. Which team every year changes the color of its jersey to green for one match to support environmental cause?\n a - RCB b - RR c - KXIP d - SRH \n", answer: "a"};

var questionTen = {question: " 10. How many titles has CSK won till now? \n a - 2 b - 3 c - 4 d - 5\n", answer: "b"};

var Questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]; 
  for(i=0; i<Questions.length; i=i+1){
  var currentQuestion = Questions[i];
  game(currentQuestion.question, currentQuestion.answer);
} 
console.log("your score" + score) ;
var max=0 ; 
var max=0;

for(var i=0;i<scoreBoard.length-1; i++){
     max = Math.max(scoreBoard[i].score,scoreBoard[i+1].score)
  } 
console.log("Currently the highest score  is " + max);

if(score>=max){
    console.log("Congrats You have achieved the new high score")
    console.log("Please send me a screen shot")
  }

  else{
    console.log("You missed it by " + (max-score) + " score")
  }



