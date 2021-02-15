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
  }


}





let button = document.querySelector("button");

button.addEventListener("click", losowanie);
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

            setTimeout(function(){ losowanie(); }, 1000);
           
            
        }
    });
}