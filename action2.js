/*
select ship
rotate ship(if wanted)
drop ship
*/
// this section is to select the ship
var carrier = $(".carrier")
var shipLegend = $("#ship-legend1")
var currentShip = $(".current-ship")
var shipSelection = $(".ship-selection")
var toggle = true
var carrierLength = 5
var battleshipLength = 4
var cruiserLength = 3
var submarineLength = 1
var destroyerLength = 2
var selectedShip;
var bound;
carrierPlace = true;
var vertHorz = 10;
battleshipPlace = true;
battleship2Place = true;
cruiserPlace = true;
submarinePlace = true;
destroyerPlace = true; 
destroyer2Place = true;
var player1Sinks = 0;
var player2Sinks = 0;



var game = {
    player: [{name: "Enterprise"},{name:"Kriov"}],

    currentPlayer: null,
    gameStart : function () {
        game.currentPlayer = game.player[0];
        $("h2").text(game.player[0].name +", place your ships.")
        $("#player-two-grid").css("display", "none");
        $(".ship-grid2").on("mouseenter",placeShip2)
        $(".ship-grid2").on("mouseenter",enterShip2)
        $(".ship-grid1").on("mouseenter",placeShip)
        $(".ship-grid1").on("mouseenter",enterShip)
    },
    switchPlayers: function () {
        if (game.currentPlayer === game.player[0]){
            $("#player-one-grid").css("display", "none")
            $("#player-two-grid").css("display", "block")
            $("h2").text("Kriov FIRE FIRE FIRE")
            $(".ship-grid2").off("mouseenter")
             $(".ship-grid1").off("mouseenter")
        game.currentPlayer = game.player[1]
        } else if (game.currentPlayer === game.player[1]){
           $("#player-two-grid").css("display", "none")
            $("#player-one-grid").css("display", "block")
            $("h2").text("U.S.S Enterprise FIRE FIRE FIRE")
            $(".ship-grid2").off("mouseenter")
            $(".ship-grid1").off("mouseenter")
            game.currentPlayer = game.player[0]
        }
    },
    player2Ships: function () {
        if (game.currentPlayer === game.player[0]){
            carrierPlace = true;
            battleshipPlace = true;
            battleship2Place = true;
            cruiserPlace = true;
            submarinePlace = true;
            destroyerPlace = true; 
            destroyer2Place = true;
            $("#player-one-grid").css("display", "none")
            $("#player-two-grid").css("display", "block")
            $("h2").text("Kriov, set your ships")
            game.currentPlayer = game.player[1]
            $("#player2").css ("display", "none")
        }
    },
    selectShip: function (evt){
        selectedShip = $(this).attr("class").split(' ');
        $("#selected-ship").text(selectedShip[1]);
        var img = "<img id =" + selectedShip[1] + "-pic" + " src =" + "./images/" + selectedShip[1] + ".jpg>";
        $("#selected-picture").html(img);
     
    },
    selectShip2: function (evt){
        selectedShip = $(this).attr("class").split(' ');
        $("#selected-ship2").text(selectedShip[1]);
        var img = "<img id =" + selectedShip[1] + "-pic" + " src ="+ "./images/" + selectedShip[1] + ".jpg>";
        $("#selected-picture2").html(img);
    },



}
    
function highlightBox () { // highlights the boat size onto the grid 
        $this = $(this)
        $(this).css ("background-color", "grey")
        for (i = 0; i < bound ; i += 1){
            var index = $this.index()
            var $parent = $this.parent();
            var $child = $parent.children().eq(index + (i * vertHorz))
            $(this).css ("background-color", "grey")
            $child.css ("background-color", "grey")
            }
        }
function whiteBox() { //clears the hilight when the mouse leaves
        $this = $(this)
        for (i = 0; i < bound ; i += 1){
            var index = $this.index()
            var $parent = $this.parent();
            var $child = $parent.children().eq(index + (i* vertHorz))
            $(this).css ("background-color", "rgb(0, 38, 69)")
            $child.css ("background-color", "rgb(0, 38, 69)")
            }
        }
function blackBox () { // this function places the selected boat onto the grid when clicked
        $this = $(this)
        var index = $this.index()
        var $parent = $this.parent();
        if (carrierPlace === true && $("#selected-ship").text() === "carrier"){
            $(this).text($("#selected-ship").text())
         for (i = 0; i < bound ; i += 1){
            var $child = $parent.children().eq(index + (i* vertHorz))
            $(this).text($("#selected-ship").text())
            $child.text($("#selected-ship").text())
            $child.addClass("carrierClass" + game.currentPlayer.name)
            }
            carrierPlace = false;
        } else if (battleshipPlace === true && $("#selected-ship").text()=== "battleship"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("battleshipClass" + game.currentPlayer.name)
               }
            battleshipPlace = false;
        } else if (cruiserPlace === true && $("#selected-ship").text()=== "cruiser"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("cruiserClass" + game.currentPlayer.name)
               }
            cruiserPlace = false;
        } else if (submarinePlace === true && $("#selected-ship").text()=== "submarine"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("submarineClass" + game.currentPlayer.name)
               }
            submarinePlace = false;  
        } else if (destroyerPlace === true && $("#selected-ship").text()=== "destroyer"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("destroyerClass" + game.currentPlayer.name)
               }
            destroyerPlace = false;
        } else if (destroyer2Place === true && $("#selected-ship").text() === "destroyer1"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("destroyer1Class" + game.currentPlayer.name)
               }
            destroyer2Place = false;
        } else if (battleship2Place === true && $("#selected-ship").text()=== "battleship1"){
            $(this).text($("#selected-ship").text())
            for (i = 0; i < bound ; i += 1){
               var $child = $parent.children().eq(index + (i* vertHorz))
               $(this).text($("#selected-ship").text())
               $child.text($("#selected-ship").text())
               $child.addClass("battleship1Class" + game.currentPlayer.name)
               }
            battleship2Place = false;
            }
        }

function placeShip () { // this hilights the current ship over player 1 grid
if ($("#selected-ship").text() === "carrier"){
    bound = carrierLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
    
} else if ($("#selected-ship").text() === "battleship"){
    bound = battleshipLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}else if ($("#selected-ship").text() === "cruiser"){
    bound = cruiserLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}else if ($("#selected-ship").text() === "submarine"){
    bound = submarineLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}else if ($("#selected-ship").text() === "destroyer"){
    bound = destroyerLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}else if ($("#selected-ship1").text() === "destroyer1"){
    bound = destroyerLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}else if ($("#selected-ship").text() === "battleship1"){
    bound = battleshipLength
    $(".ship-grid1").mouseenter(highlightBox)
    $(".ship-grid1").mouseleave(whiteBox)
}
}

function enterShip () { // enters the ship onto the grid for player one
        $(".ship-grid1").on("click",blackBox)
    
}

function enterShip2 () { // enters the ship onto the grid for player two
    $(".ship-grid2").click(blackBox)
    
}
    
function placeShip2 () { // this function highlights the selected boat over player 2 ship grid
    
    if ($("#selected-ship2").text() === "carrier"){
            bound = carrierLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
            
        } else if ($("#selected-ship2").text() === "battleship"){
            bound = battleshipLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }else if ($("#selected-ship2").text() === "cruiser"){
            bound = cruiserLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }else if ($("#selected-ship2").text() === "submarine"){
            bound = submarineLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }else if ($("#selected-ship2").text() === "destroyer"){
            bound = destroyerLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }else if ($("#selected-ship2").text() === "destroyer1"){
            bound = destroyerLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }else if ($("#selected-ship").text() === "battleship1"){
            bound = battleshipLength
            $(".ship-grid2").mouseenter(highlightBox)
            $(".ship-grid2").mouseleave(whiteBox)
        }
}
function rotateBoat (e) { //this function is called by pressing r which rotates the boat
    var keyCode = e.keyCode
    e.preventDefault();
    if (toggle === true){
        if (keyCode === 82){
            vertHorz = 1
            toggle = false
            $(".ship-grid1").css("background-color","rgb(0, 38, 69)")
            $(".ship-grid2").css("background-color","rgb(0, 38, 69)")
        }
    } else if (toggle === false){
        if (keyCode === 82){
            vertHorz = 10
            toggle = true
            $(".ship-grid1").css("background-color","rgb(0, 38, 69)")
            $(".ship-grid2").css("background-color","rgb(0, 38, 69)")
        }
    }
}

// $(".bomb-grid1").click(function () {
//     // console.log($(this).parent().children())
//     console.log($(this).index())
//     console.log($("#player-two-ship-grid").children().eq($(this).index()).html())
//     // if ( $(".ship-grid2"))
// })
function carrierSunk () {
   if ( $(".carrierClassEnterprise").children().length === 5){
        $("h2").text("Enterprise's CARRIER SUNK!")
        $(".ship-grid1").removeClass("carrierClassEnterprise")
        player2Sinks += 1;
   }else if ($(".carrierClassKriov").children().length === 5){
        $("h2").text(" Kriov's CARRIER SUNK!")
        $(".ship-grid2").removeClass("carrierClassKriov")
        player1Sinks += 1;
   }
}
function cruiserSunk () {
    if ( $(".cruiserClassEnterprise").children().length === 3){
        $("h2").text("Enterprise's CRUISER SUNK!")
        $(".ship-grid1").removeClass("cruiserClassEnterprise")
        player2Sinks += 1;
   }else if ($(".cruiserClassKriov").children().length === 3){
        $("h2").text(" Kriov's CRUISER SUNK!")
        $(".ship-grid2").removeClass("cruiserClassKriov")
        player1Sinks += 1;
        
   }
}
function submarineSunk() {
    if ( $(".submarineClassEnterprise").children().length === 1){
        $("h2").text("Enterprise's SUBMARINE SUNK!")
        $(".ship-grid1").removeClass("submarineClassEnterprise")
        player2Sinks += 1;
   }else if ($(".submarineClassKriov").children().length === 1){
        $("h2").text(" Kriov's SUBMARINE SUNK!")
        $(".ship-grid2").removeClass("submarineClassKriov")
        player1Sinks += 1;
        
   }
}
function battleshipSunk () {
    if ( $(".battleshipClassEnterprise").children().length === 4){
        $("h2").text("Enterprise's BATTLESHIP SUNK!")
        $(".ship-grid1").removeClass("battleshipClassEnterprise")
        player2Sinks += 1;
   }else if ($(".battleshipClassKriov").children().length === 4){
        $("h2").text(" Kriov's BATTLESHIP SUNK!")
        $(".ship-grid2").removeClass("battleshipClassKriov")
        player1Sinks += 1;
        
   }
}

function battleship1Sunk () {
    if ( $(".battleship1ClassEnterprise").children().length === 4){
        $("h2").text("Enterprise's BATTLESHIP SUNK!")
        $(".ship-grid1").removeClass("battleship1ClassEnterprise")
        player2Sinks += 1;
   }else if ($(".battleship1ClassKriov").children().length === 4){
        $("h2").text(" Kriov's BATTLESHIP SUNK!")
        $(".ship-grid2").removeClass("battleship1ClassKriov")
        player1Sinks += 1;
        
   }
}

function destroyerSunk () {
    if ( $(".destroyerClassEnterprise").children().length === 2){
        $("h2").text("Enterprise's DESTROYER SUNK!")
        $(".ship-grid1").removeClass("destroyerClassEnterprise")
        player2Sinks += 1;
   }else if ($(".destroyerClassKriov").children().length === 2){
        $("h2").text(" Kriov's DESTROYER SUNK!")
        $(".ship-grid2").removeClass("destroyerClassKriov")
        player1Sinks += 1;
        
   }
}

function destroyer1Sunk () {
    if ( $(".destroyer1ClassEnterprise").children().length === 2){
        $("h2").text("Enterprise's DESTROYER SUNK!")
        $(".ship-grid1").removeClass("destroyer1ClassEnterprise")
        player2Sinks += 1;
   }else if ($(".destroyer1ClassKriov").children().length === 2){
        $("h2").text(" Kriov's DESTROYER SUNK!")
        $(".ship-grid2").removeClass("destroyer1ClassKriov")
        player1Sinks += 1;
        
   }
}
function whoWins () {
    if (player2Sinks === 6) {
    $("h2").text("KRIOV WINS!")
    location.reload()
    } else if (player1Sinks === 6){
    $("h2").text("ENTERPRISE WINS!")
    location.reload()
    }


}

function bombsAway () {
    if ($("#player-two-ship-grid").children().eq($(this).index()).html() !== ""){
        $(this).html('<img class = "explosion" src="./images/hit.gif">');
        $("#player-two-ship-grid").children().eq($(this).index()).html('<img class = "explosion" src="./images/fire.gif">');
        carrierSunk();
        cruiserSunk();
        submarineSunk();
        battleshipSunk();
        battleship1Sunk ();
        destroyerSunk ();
        whoWins();
        
    } else if ($("#player-two-ship-grid").children().eq($(this).index()).html() === "") {
        $(this).html('<img class = "explosion" src="./images/missed.gif">')
        $("#player-two-ship-grid").children().eq($(this).index()).html('<img class = "explosion" src="./images/miss.gif">')
        $("h2").text(game.currentPlayer.name + " missed!")
        $(".bomb-grid1").off("click",bombsAway)
        $(".bomb-grid2").on("click",bombsAway2)
    }

}
function bombsAway2 () {
    if ($("#player-one-ship-grid").children().eq($(this).index()).html() !== ""){
        $(this).html('<img class = "explosion" src="./images/hit.gif">')
        $("#player-one-ship-grid").children().eq($(this).index()).html('<img class = "explosion" src="./images/fire.gif">')
        carrierSunk();
        cruiserSunk();
        submarineSunk();
        battleshipSunk();
        battleship1Sunk ();
        destroyer1Sunk ();
        whoWins();
    } else if ($("#player-one-ship-grid").children().eq($(this).index()).html() === "") {
        $(this).html('<img class = "explosion" src="./images/missed.gif">')
        $("#player-one-ship-grid").children().eq($(this).index()).html('<img class = "explosion" src="./images/miss.gif">')
        $(".bomb-grid2").off("click",bombsAway2)
        $(".bomb-grid1").on("click",bombsAway)
    }
}


// $(".ship-grid2").on("mouseenter",placeShip2)
// $(".ship-grid2").on("mouseenter",enterShip2)
// $(".ship-grid1").on("mouseenter",placeShip)
// $(".ship-grid1").on("mouseenter",enterShip)
$(".bomb-grid1").on("click",bombsAway)

$(".switch").click(game.switchPlayers)
$("#player2").click(game.player2Ships)
$(document).on("keydown",rotateBoat)
shipSelection.on("click", game.selectShip)
shipSelection.on("click", game.selectShip2)
game.gameStart()













