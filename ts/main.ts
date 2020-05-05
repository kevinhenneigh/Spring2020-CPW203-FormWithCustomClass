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

/**
 * Gets all game data from the form
 * and returns it in a video game object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    
    // Populate with data from the form
    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    if(digitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }
    return game;
}

//ADD VALIDATION
function isAllDataValid(){
    return true;
}