const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerSelection = "";
rock.addEventListener("click", function(){
    
    playerSelection="ROCK"
    game(playerSelection);
    
})
paper.addEventListener("click", function(){
   
    playerSelection="PAPER"
    game(playerSelection);
})
scissors.addEventListener("click", function(){
    
    playerSelection="SCISSORS"
    game(playerSelection);
})

  let playerScore = 0;
  let computerScore =0;
 
  
    function game(playerSelection){
 
      const computerSelection = getComputerChoice(3);
      alert("You went with: " + playerSelection + " and the computer went with: " + computerSelection)
      playRound(playerSelection, computerSelection);
     
      alert("Player Score " + playerScore + " Computer Score " + computerScore);
      console.log("Computer Score " + computerScore)
      
      
  }
      
    
  
  function getComputerChoice(num) {
      let choice = Math.floor(Math.random() * num);
  
      if (choice == 1)
          return "PAPER"
      else if (choice == 2)
          return "ROCK"
      else return "SCISSORS"
    }
  
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You win because ROCK always beats SCISSORS")
          playerScore ++;
      }   
      else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because ROCK always beats SCISSORS");
          computerScore ++;
      }
      if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You win because SCISSORS always beats paper");
          playerScore ++;
      }   
      else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because SCISSORS always beats PAPER");
          computerScore ++;
      }
      if (playerSelection == "PAPER" && computerSelection == "ROCK"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You win because paper always beats ROCK");
          playerScore ++;
      }   
      else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because paper always beats ROCK");
          computerScore ++;
      }
      else if (playerSelection == computerSelection) {
          console.log("User input:" + (playerSelection));
            console.log("Computer input: " + (computerSelection));
          console.log("TIE!")
        }
    }
     
    
  
    
  
  
  