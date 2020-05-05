var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = document.getElementById("online");
    if (digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    return game;
}
function isAllDataValid() {
    return true;
}
