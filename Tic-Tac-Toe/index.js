const cells=document.querySelectorAll(".cell");
const result = document.querySelector("#result");
const reset=document.querySelector("#reset");

const wincondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=["","","","","","","","",""];
let currentPlayer="X";
let running=false;
initiateGame();
function initiateGame()
{
    // console.log("it called");
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    reset.addEventListener("click", restartGame);
    result.textContent=`${currentPlayer}'s turn`;
    running=true;
}
function cellClicked(){
    const cellIndex=this.getAttribute("cellIndex");
    if(options[cellIndex]!="" || !running)
    {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index]=currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer()
{
    if(currentPlayer=="X")
    {
        currentPlayer="O";
    }
    else
    {
        currentPlayer="X";
    }
    result.textContent=`${currentPlayer}'s turn`;
}
function checkWinner()
{
    let roundwon=false;
    for(let i=0; i<wincondition.length; i++)
    {
        const condition=wincondition[i];
        const cellA=options[condition[0]];
        const cellB=options[condition[1]];
        const cellC=options[condition[2]];
        if(cellA=="" ||cellB=="" || cellC=="")
        {
            continue;
        }
        if(cellA==cellB && cellB==cellC)
        {
            roundwon=true;
            break;
        }
    }
    if(roundwon)
    {
        result.textContent=`${currentPlayer}'s wins!`;
        running=false;
    }
    else if(!options.includes(""))
    {
        result.textContent=`Draw!`;
        running=false;
    }
    else{
        changePlayer();
    }
}
function restartGame()
{
    options=["","","","","","","","",""];
    currentPlayer="X";
    result.textContent=`${currentPlayer}'s turn`;
    cells.forEach(cell=> cell.textContent="");
    running=true;
}
// initiateGame();
 //console.log(cells, result, reset);