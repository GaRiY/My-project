var socket = io.connect('http://localhost:3000');
var H = 60;//prompt("hight");
var W = 50;//prompt("Wight");
var side = 10;
function main(){
var exanakTime = 0;
var exanak;
var exanakarr = ["spring","summer","autumn","winter"];
				//[garun,amar,ashun,cmer];
var Ptag = document.getElementById('Exanak');

function changing(){
	exanakTime = Math.floor((Math.random() * 200000) + 10000);
	exanak = exanakarr[Math.floor(Math.random() * exanakarr.length)];
    Ptag.innerHTML = exanak;
	socket.emit("staci",exanakTime);

}
socket.on("gce!",changing);
}
window.onload = main


function setup() {
    frameRate(10);
    createCanvas(W * side, H * side);
    background('#acacac');
}
socket.on('matrix', gcel);
function gcel(arr) {
       for (var k = 0; k < arr.length; k++) {
        for (var l = 0; l < arr[k].length; l++) {
            if (arr[k][l] == 1) {
                fill("Green");
            }
            else if (arr[k][l] == 2) {
                fill("Yellow");
            }
            else if (arr[k][l] == 3) {
                fill("Red");
            }
            else if (arr[k][l] == 0) {
                fill("#acacac");
            }
            else if (arr[k][l] == 4) {
                fill("#935116");
            }
            else if (arr[k][l] == 5) {
                fill("#FFBF00");
            }
            else if (arr[k][l] == 10) {
                fill("#acacac");
            }
            var i = k * side;
            var o = l * side;
            rect(o, i, side, side);

        }
    }
}

