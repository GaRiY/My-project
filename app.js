var express = require("express");
var app = express();
var Bear = require("./jss/aclass");
var Wolf = require("./jss/gclass");
var Cow = require("./jss/kclass");
var Human = require("./jss/mclass");
var Grass = require("./jss/xclass");

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

var arr = [];
var xot = [];
var kov = [];
var gayl = [];
var arj = [];
var human = new Human();
var H = 60;//prompt("hight");
var W = 50;//prompt("Wight");


var side = 10;
var kanachQanak = (H * W) * 30 / 100;
var cowQanak = 10;
var gaylQanak = 2;
var arjQanak = 2;

 for (var y = 0; y < H; y++) {
        arr[y] = [];
        for (var x = 0; x < W; x++) {
            arr[y].push(0);
        }

    }
	arr[0][0] = 5;

    //1
    while (kanachQanak > 0) {
        var x = Math.floor(random(W));
        var y = Math.floor(random(H));
        if (arr[y][x] == 0) {
            arr[y][x] = 1;
            kanachQanak--;
        }

    }
    //2
    while (cowQanak > 0) {
        var x = Math.floor(random(W));
        var y = Math.floor(random(H));
        if (arr[y][x] == 0) {
            arr[y][x] = 2;
            cowQanak--;
        }
    }

    //3
    while (gaylQanak > 0) {
        var x = Math.floor(random(W));
        var y = Math.floor(random(H));
        if (arr[y][x] == 0) {
            arr[y][x] = 3;
            gaylQanak--;
        }
    }

    //4
    while (arjQanak > 0) {
        var x = Math.floor(random(W));
        var y = Math.floor(random(H));
        if (arr[y][x] == 0) {
            arr[y][x] = 4;
            arjQanak--;
        }

    }

    for (var y = 0; y < arr.length; y++) {
        for (var x = 0; x < arr[y].length; x++) {
            if (arr[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                xot.push(gr);
            }
            if (arr[y][x] == 2) {
                var cw = new Cow(x, y, 2);
                kov.push(cw);
            }
            if (arr[y][x] == 3) {
                var gy = new Wolf(x, y, 3);
                gayl.push(gy);
            }
            if (arr[y][x] == 4) {
                var ar = new Brownbear(x, y, 4);
                arj.push(ar);
            }
        }
    }

}

for (var k = 0; k < arr.length; k++) {
        for (var l = 0; l < arr[k].length; l++) {

		}
}

	human.check();

    for (i in arj) {
        arj[i].eat(i);
    }
    for (i in gayl) {
        gayl[i].eat(i);
    }
    for (i in kov) {
        kov[i].eat(i);
    }
    for (i in xot) {
        xot[i].multiplying();
    }