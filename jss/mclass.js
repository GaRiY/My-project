var Queen = require("./QueenClass");
var Grass = require("./xclass");
var Cow = require("./kclass");
var Wolf = require("./gclass");
var Brownbear = require("./aclass");

module.exports = class Human  extends Queen {
    constructor() {
		super();
        this.can = [];
        this.x = 0;
        this.y = 0;
        this.index = 5;

    }

	getNewCoordinates(){
			this.directions = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
    		[this.x - 1, this.y    ],
    		[this.x + 1, this.y    ],
    		[this.x - 1, this.y + 1],
    		[this.x    , this.y + 1],
    		[this.x + 1, this.y + 1]
	   ];
	   }



    findsiel(ind) {
        this.can = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < arr[0].length && y >= 0 && y < arr.length) {
			console.log(x,y);
                if (arr[y][x] == 0) {
                    this.can.push([x, y]);
                }
            }
        }
		if(this.can.length != 0){
        var idk = this.can[Math.floor(Math.random() * this.can.length)];
		var x = idk[0];
		var y = idk[1];
        arr[y][x] = ind;
		return(idk);
		}
    }

    yntrelVandak(ind) {
        var x = Math.floor(Math.random() * W);
        var y = Math.floor(Math.random() * H);
        if (arr[y][x] == 0) {
            arr[y][x] = 5;
			arr[0][0] = 10;
			this.x = x;
			this.y = y;
			this.getNewCoordinates();
            var newcordfc = this.findsiel(ind);
			arr[y][x] = 0;
			return(newcordfc);
        }
    }

    check() {
        if (xot.length <= 3) {
            var newcord = this.yntrelVandak(1);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			xot.push(new Grass(x,y,1));
			}
			arr[0][0] = 5;
        }
        else if (kov.length <= 4) {
            var newcord = this.yntrelVandak(2);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			kov.push(new Cow(x,y,2));
			}
			arr[0][0] = 5;
        }
        else if (gayl.length <= 1) {
            var newcord = this.yntrelVandak(3);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0
			arr[y][x] = 3;
			gayl.push(new Wolf(x,y,3));
			}
			arr[0][0] = 5;
        }
        else if (arj.length <= 1) {
            var newcord = this.yntrelVandak(4);
			if(typeof(newcord) != "undefined"){
			var x = newcord[0];
			var y = newcord[1];
			this.x = 0;
			this.y = 0;
			arj.push(new Brownbear(x,y,4));
			}
			arr[0][0] = 5;
        }

    }
}