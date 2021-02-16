let boxes = [...document.querySelectorAll(".box")];
let shapes = [`box-circle`, `box-cross`, `box-triangle`];

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
           return 0;
       }
       else 
       {

       
        if(i==0 || i==1 || i==4 || i==5)
        {
           if(boxes[i].className==boxes[i+1].className && boxes[i].className==boxes[i+2].className)
           {
               alert("BRAWO! POZIOMO!");
           }
           else if(boxes[i].className==boxes[i+4].className && boxes[i].className==boxes[i+8].className)
           {
            alert("BRAWO! PIONOWO!");
           }
           else if(boxes[i].className==boxes[i+5].className && boxes[i].className==boxes[i+10].className)
           {
            alert("BRAWO! NA UKOS!");
           }
        }

        else if(i==2 || i==3 || i==6 || i==7)
        {
           if(boxes[i].className==boxes[i+4].className && boxes[i].className==boxes[i+8].className)
           {
            alert("BRAWO! PIONOWO!");
           }
           else if(boxes[i].className==boxes[i+3].className && boxes[i].className==boxes[i+6].className)
           {
            alert("BRAWO! NA UKOS!");
           }
        }

        else if(i==8 || i==9 || i==12 || i==13)
        {
           if(boxes[i].className==boxes[i+1].className && boxes[i].className==boxes[i+2].className)
           {
               alert("BRAWO! POZIOMO!");
           }
         
        }
        

    }


    }
}





let actualShape = 0;
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
            if(actualShape==2)
            {
                actualShape=0;
            }
            else 
            {
                actualShape++;
            }

            for(let j=0; j<boxes.length; j++) 
            {
                boxes[j].style.pointerEvents = "none";
                setTimeout(function(){boxes[j].style.pointerEvents = "auto"; }, 1000);
            }
            check();
            setTimeout(function(){ losowanie();}, 1000);
           
            
        }
    });
}