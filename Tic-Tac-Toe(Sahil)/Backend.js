let Player = "X";
let a1 = [" ", " ", " ", " ", " ", " ", " ", " "];
//let a2 = [];
let result;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function PlayerChange() {
    document.getElementById("Turn").innerHTML = Player + "'s turn";
}

PlayerChange();

function handleClick(Event) {
    // let cell = Event.target;
    let id = Event.getAttribute("id");
    //console.log("id : ", id)
    let text = document.getElementById(id).innerHTML;
    //console.log("text : ", text)
    if (text !== "X" && text !== "O") {
        if (Player === "X") {
            document.getElementById(id).innerHTML = Player;
            a1[id] = Player;
            //a2.push(Player);
            Result();
            Player = "O";
            document.getElementById("Turn").innerHTML = Player + "'s turn";

        } else {
            document.getElementById(id).innerHTML = Player;
            a1[id] = Player;
            //a2.push(Player);
            Result();
            Player = "X";
            document.getElementById("Turn").innerHTML = Player + "'s turn";
        }


    } else {
        window.alert("Invalid Click.");
    }
    //console.log(a1);
    //console.log(a2);


}


// function handlePlayerTurn() {
//     document.getElementById("Turn").innerHTML = Player + "'s turn";
// }

function Result() {
    for (let i = 0; i <= 7; i++) {
        let check = winningConditions[i];
        let l = a1[check[0]];
        let m = a1[check[1]];
        let n = a1[check[2]];
        if (l === " " || m === " " || n === " ") {

            continue;
        }

        if (l === m && m === n) {
            result = "Won the game";
            document.getElementById("Result").style.display = "block";
            document.getElementById("Result").innerHTML = Player + " " + result;
            document.getElementById("Turn").style.display = "none";
            handleEmptyCell();

        }
        handleDraw();
        // for (let i = 0; i <= 8; i++) {
        //     let a = a1[i];
        //     //console.log("a : ", a);
        //     if (a !== " " & a !== undefined) {
        //         result = "Game has been drawn";
        //         document.getElementById("Result").style.display = "block";
        //         document.getElementById("Result").innerHTML = result;
        //         document.getElementById("Turn").style.display = "none";
        //     }
        // }


        //handlePlayerTurn();
    }

}

function handleDraw() {
    let a = a1.filter(f => f == " ");
    //console.log("Filter : ", a);
    if (a.length == 0) {
        result = "Game has been drawn";
        document.getElementById("Result").style.display = "block";
        document.getElementById("Result").innerHTML = result;
        document.getElementById("Turn").style.display = "none";
    }
}

function Restart() {
    Player = "X";
    a1 = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("Turn").style.display = "block";
    document.getElementById("Turn").innerHTML = Player + "'s turn";
    document.getElementById("Result").style.display = "none";
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerHTML = "";
    }
    window.location.reload();
}

function handleEmptyCell() {
    for (let i = 0; i <= 8; i++) {
        let b = a1[i];
        //console.log("b : ", b);
        if (b !== "X" && b !== "O") {
            document.getElementById(i).removeAttribute("onclick");
        }
    }
}