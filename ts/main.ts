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

/**
 * Clears all errors in the validation-summary
 */
function clearAllErrs(){
    let errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    clearAllErrs();

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{
    // display video game below the form
    let displayDiv = document.getElementById("display");
    // create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    
    // create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "This is a download only game.";
    }
    else{
        notDigitalDisplay = "You can come by a physical copy.";   
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. 
                It costs $${myGame.price.toFixed(2)}. ${notDigitalDisplay}.`
    
    // add <h2> in the <div id="display"> 
    displayDiv.appendChild(gameHeading);
    // add <p> game info
    displayDiv.appendChild(gameInfo);
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

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }
    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number.");
    }

    let rating = (<HTMLOptionElement>document.getElementById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("A rating is required.");

    }
    return isValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = document.getElementById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
