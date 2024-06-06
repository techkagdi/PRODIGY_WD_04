let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
       if(turn0){
        box.innerHTML = "X";
        turn0 = false;
       }
       else{
        box.innerHTML ="0";
        turn0 = true;
       }
       box.disabled = true;
       checkwinner();
    })
});

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
        document.getElementById("msg").innerHTML = "";
    })
})

const checkwinner = () => {
    for(pattern of winPatterns) {
     let pos1val =  boxes[pattern[0]].innerText;
     let pos2val =  boxes[pattern[1]].innerText;
     let pos3val =  boxes[pattern[2]].innerText;
    
      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
         document.getElementById("msg").innerHTML = "Winner is - "+String(pos1val);
        }
      }
    }
}


