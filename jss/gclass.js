var Queen = require("./QueenClass");

module.exports = class Wolf extends Queen {
    constructor(x, y, index) {
        super(x, y, index);
        this.genarr = ["male", "female"];
        this.gender = this.genarr[Math.floor(Math.random() * this.genarr.length)];
        this.mul = 0;
        this.goa = 0;
        this.can = [];
        this.ttd = 10;
        this.x = x;
        this.y = y;
        this.index = index;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    move(i) {
        if (this.ttd <= 0) {
            this.kill(i);
        }
        else {
            this.yntrelVandak(0);

            if (this.can.length != 0) {
                var newgy = this.can[Math.floor(Math.random() * this.can.length)];
                var x = newgy[0];
                var y = newgy[1];
                arr[y][x] = 3;
                arr[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                this.ttd--;
                this.goa = 0;
            }
            else {
                this.yntrelVandak(1);

                if (this.can.length != 0) {
                    var newgy = this.can[Math.floor(Math.random() * this.can.length)];
                    var x = newgy[0];
                    var y = newgy[1];
                    arr[y][x] = 3;
                    arr[this.y][this.x] = 1;
                    this.x = x;
                    this.y = y;
                    this.ttd--;
                    this.goa = 1;
                }
            }
        }
    }


    eat(i) {
        this.yntrelVandak(2);
        if (this.can.length != 0) {
            var newgy = this.can[Math.floor(Math.random() * this.can.length)];
            var x = newgy[0];
            var y = newgy[1];
            arr[y][x] = 3;
            for (var i in kov) {
                if (kov[i].x == x && kov[i].y == y) {
                    kov.splice(i, 1);
                }
            }
            arr[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            if (this.ttd < 10) {
                this.ttd += 2;
            }

            this.multiplying();
        }
        else {
            this.move(i);
        }
    }

    kill(i) {
        arr[this.y][this.x] = this.goa;
        gayl.splice(i, 1);
    }

    multiplying() {
        this.mul++;
        this.yntrelVandak(3);
        if (this.can.length != 0) {
            for (var i in gayl) {
                for (var i in this.can) {
                    var x = this.can[i][0];
                    var y = this.can[i][1];
                    if (gayl[i].x == x && gayl[i].y == y && gayl[i].gender != this.gender) {
                        if (this.mul >= 2) {
                            var newgy = this.can[Math.floor(Math.random() * this.can.length)];
                            var x = newgy[0];
                            var y = newgy[1];
                            arr[y][x] = 2;
                            gayl.push(new Wolf(x, y, 3));
                            this.mul = 0;

                        }
                    }
                }
            }
        }
    }
}