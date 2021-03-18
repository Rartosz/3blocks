let boxes = [...document.querySelectorAll(".box")];
let shapes = [`box-circle`, `box-cross`, `box-triangle`];
let compScoreContainer = document.querySelector("#computerScore");
let playerScoreContainer = document.querySelector("#playerScore");
let playerScore = 0;
let nextMove = ["images/circle_box.svg", "images/cross_box.svg", "images/triangle_box.svg"];
let nextMoveContainer = document.querySelector(".next");


let game = document.querySelector("section");
let endGame = document.querySelector(".endGame");
let endScore = document.querySelector(".endScore");
let playAgainBtn = document.querySelector(".backToMenuBtn");


let menuBtn = document.querySelector(".hamburger-btn");
let closeMenuBtn = document.querySelector(".closeMenu");
let restartBtn = document.querySelector(".restart");
let menu = document.querySelector(".menu");



let playBtn = document.querySelector(".play");
let mainScreen = document.querySelector("#mainScreen");
let goBackToMenuFromEndGameBtn = document.querySelector(".playAgainBtn");
let goBackToMenuFromInGameBtn = document.querySelector(".exit");
let computerScore = 0; 

compOrPlayer=1;



let losowanie = () => 
{

  let temp = Math.floor((Math.random() * boxes.length) + 0);
  let whichShape = Math.floor((Math.random() * shapes.length) + 0);


  if(boxes[temp].classList.contains(shapes[0]) || boxes[temp].classList.contains(shapes[1]) || boxes[temp].classList.contains(shapes[2]))
  {
                losowanie(); 
  }
  else 
  {
    boxes[temp].className = " "; 
    boxes[temp].classList.add("box");
    boxes[temp].classList.add(shapes[whichShape]);
    check();
  }


}


let check = () => 
{
    for(let i=0; i<boxes.length; i++) 
    {
       if(boxes[i].className=="box")
       {
           
       }
       else 
       {

       
        if(i==0 || i==1 || i==4 || i==5)
        {
           if(boxes[i].className==boxes[i+1].className && boxes[i].className==boxes[i+2].className)
           {
                boxes[i].className="box";
                boxes[i+1].className="box";
                boxes[i+2].className="box";

                
                playerScore++;
                playerScoreContainer.textContent = playerScore;
           }
           else if(boxes[i].className==boxes[i+4].className && boxes[i].className==boxes[i+8].className)
           {
            boxes[i].className="box";
            boxes[i+4].className="box";
            boxes[i+8].className="box";

            playerScore++;
            playerScoreContainer.textContent = playerScore;
           }
           else if(boxes[i].className==boxes[i+5].className && boxes[i].className==boxes[i+10].className)
           {
            boxes[i].className="box";
            boxes[i+5].className="box";
            boxes[i+10].className="box";

            playerScore++;
            playerScoreContainer.textContent = playerScore;
           }
        }

        else if(i==2 || i==3 || i==6 || i==7)
        {
           if(boxes[i].className==boxes[i+4].className && boxes[i].className==boxes[i+8].className)
           {
            boxes[i].className="box";
            boxes[i+4].className="box";
            boxes[i+8].className="box";

            playerScore++;
            playerScoreContainer.textContent = playerScore;
           }
           else if(boxes[i].className==boxes[i+3].className && boxes[i].className==boxes[i+6].className)
           {
            boxes[i].className="box";
            boxes[i+3].className="box";
            boxes[i+6].className="box";

            playerScore++;
            playerScoreContainer.textContent = playerScore;
           }
        }

        else if(i==8 || i==9 || i==12 || i==13)
        {
            if(boxes[i].className==boxes[i+1].className && boxes[i].className==boxes[i+2].className)
            {
                 boxes[i].className="box";
                 boxes[i+1].className="box";
                 boxes[i+2].className="box";
 
                 playerScore++;
                 playerScoreContainer.textContent = playerScore;
            }
         
        }
        

    }


    }
}


let checkAll = function() 
{
    let temp =0; 
    for(let i=0; i<boxes.length; i++)
    {
        if(boxes[i].classList.contains("box-circle") || boxes[i].classList.contains("box-cross") || boxes[i].classList.contains("box-triangle"))
        {
            temp++;
            if(temp == boxes.length)
            {
                //game.style.display = "none";
                menu.style.display="none";
                endGame.style.display = "flex";
                endScore.innerHTML = playerScore;
            }
        }
    }
}


let actualShape = 0;
let next = 1;
for(let i=0; i<boxes.length; i++)
{
    boxes[i].addEventListener("click",function() 
    {   
        

        if(boxes[i].classList.contains(shapes[0]) || boxes[i].classList.contains(shapes[1]) || boxes[i].classList.contains(shapes[2]))
        {
            alert("POLE ZAJĘTE!");
        }
        else 
        {
            boxes[i].classList.add(shapes[actualShape]);
            nextMoveContainer.src = nextMove[next];
            if(actualShape==2)
            {
                actualShape=0;
            }
            else 
            {
                actualShape++;
            }

            if(next==2)
            {
                next=0;
            }
            else 
            {
                next++;
            }

            for(let j=0; j<boxes.length; j++) 
            {
                boxes[j].style.pointerEvents = "none";
                setTimeout(function(){boxes[j].style.pointerEvents = "auto"; }, 1000);
            }
            check();
            check();
            check();
            setTimeout(function(){ losowanie();}, 1000);
            checkAll();
            
        }


    });
}

setInterval(() => {
    checkAll();
},1000);


playAgainBtn.addEventListener("click", function() 
{

    playerScore = 0;
    for(let i=0; i<boxes.length; i++)
    {
        boxes[i].className="box";
    }
    endGame.style.display="none";
    game.style.display = "flex";
    playerScoreContainer.textContent=0;
});


menuBtn.addEventListener("click", function() 
{
    menu.style.display="flex";
});

closeMenuBtn.addEventListener("click", function() 
{
    menu.style.display = "none";
});


restartBtn.addEventListener("click", function() 
{

    playerScore = 0;
    for(let i=0; i<boxes.length; i++)
    {
        boxes[i].className="box";
    }
    menu.style.display="none";
    game.style.display = "flex";
    playerScoreContainer.textContent=0;
});



playBtn.addEventListener("click", function() 
{

    playerScore = 0;
    for(let i=0; i<boxes.length; i++)
    {
        boxes[i].className="box";
    }
    mainScreen.style.display="none";
    playerScoreContainer.textContent=0;
});


goBackToMenuFromEndGameBtn.addEventListener("click", function() 
{
    endGame.style.display="none";
    mainScreen.style.display="flex";
});

goBackToMenuFromInGameBtn.addEventListener("click", function() 
{
    menu.style.display="none";
    mainScreen.style.display="flex";
});