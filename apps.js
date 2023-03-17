const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerSelection = "";
let computerSelection = "";
rock.addEventListener("click", function(){
    
    playerSelection="ROCK"
    computerSelection = getComputerChoice(3);
    game(playerSelection, computerSelection);
    
})
paper.addEventListener("click", function(){
   
    playerSelection="PAPER"
    computerSelection = getComputerChoice(3);
    game(playerSelection, computerSelection);
})
scissors.addEventListener("click", function(){
    
    playerSelection="SCISSORS"
    computerSelection = getComputerChoice(3);
    game(playerSelection, computerSelection);
})

  let playerScore = 0;
  let computerScore =0;
 
  
    function game(playerSelection, computerSelection){
        console.log("playerselection to start is = " + playerSelection)
        
        let playerSelectionFE = document.getElementById("playerSelection");
        let computerSelectionFE = document.getElementById("computerSelection");
        console.log("playerselection now is = " + playerSelection)
        
        if(playerSelection=="ROCK"){
            
            playerSelectionFE.innerHTML= "You selected:";
            console.log("made it to rock. playerSelection = " + playerSelection)
            document.getElementById("playerSelection").innerHTML = '<i class="fas fa-hand-rock"></i>'
        }
        else if(playerSelection=="PAPER"){
             
            playerSelectionFE.innerHTML= "You selected:";
            console.log("made it to paper. playerSelection = " + playerSelection)
            document.getElementById("playerSelection").innerHTML = '<i class="fas fa-hand-paper"></i>'
            
        }
        else if(playerSelection=="SCISSORS") {
            playerSelectionFE.innerHTML= "You selected:";
            document.getElementById("playerSelection").innerHTML = '<i class="fas fa-hand-scissors"></i>'
        }
        console.log("Comp selection: " +computerSelection)
        if(computerSelection=="ROCK"){
            console.log("Comp selection: " +computerSelection)
            computerSelectionFE.innerHTML= "Computer selected:";
            document.getElementById("computerSelection").innerHTML = '<i class="fas fa-hand-rock"></i>'
        }
        else if(computerSelection=="PAPER"){
            console.log("Comp selection: " +computerSelection)
            computerSelectionFE.innerHTML= "Computer selected:";
            document.getElementById("computerSelection").innerHTML = '<i class="fas fa-hand-paper"></i>'
        }
        else if(computerSelection=="SCISSORS"){
            console.log("Comp selection: " +computerSelection)
            computerSelectionFE.innerHTML= "Computer selected:";
            document.getElementById("computerSelection").innerHTML = '<i class="fas fa-hand-scissors"></i>'
        }
    
 
        playRound(playerSelection, computerSelection);
        let playerElement = document.getElementById("playerScore")
        playerElement.innerHTML= "You: " + playerScore;
        let computerElement = document.getElementById("computerScore")
        computerElement.innerHTML= "Computer: " + computerScore;
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
          //computerSelectionFE.innerHTML= "Computer selected:";
          document.getElementById("outcomeMessage").innerHTML = 'You win because ROCK always beats SCISSORS'
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("green");
          
          playerScore ++;
      }   
      else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because ROCK always beats SCISSORS");
          document.getElementById("outcomeMessage").innerHTML = "You lose because ROCK always beats SCISSORS"
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("red");
          computerScore ++;
      }
      if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You win because SCISSORS always beats paper");
          document.getElementById("outcomeMessage").innerHTML = "You win because SCISSORS always beats paper"
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("green");
          playerScore ++;
      }   
      else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because SCISSORS always beats PAPER");
          document.getElementById("outcomeMessage").innerHTML = "You lose because SCISSORS always beats PAPER"
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("red");
          computerScore ++;
      }
      if (playerSelection == "PAPER" && computerSelection == "ROCK"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You win because paper always beats ROCK");
          document.getElementById("outcomeMessage").innerHTML = "You win because paper always beats ROCK"
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("green");
          playerScore ++;
      }   
      else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("You lose because paper always beats ROCK");
          document.getElementById("outcomeMessage").innerHTML = "You lose because paper always beats ROCK"
          document.getElementById("outcomeMessage").innerHTML = document.getElementById("outcomeMessage").innerHTML.fontcolor("red");
          computerScore ++;
      }
      else if (playerSelection == computerSelection) {
          console.log("User input:" + (playerSelection));
          console.log("Computer input: " + (computerSelection));
          console.log("TIE!");
          document.getElementById("outcomeMessage").innerHTML = "Tie!"
        }
    }
     
    
  
    
  
  
  