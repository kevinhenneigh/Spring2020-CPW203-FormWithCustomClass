class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]"); 
    addBtn.onclick = addVideoGame; 
}

function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{
    // display video game below the form
}

function getVideoGame():VideoGame{
    // TODO: Create game
    // Populate with data from the form
    // Return game
}

//ADD VALIDATION
function isAllDataValid(){
    return true;
}