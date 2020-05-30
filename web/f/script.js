// Created by Ranjan

window.onload = function() {

var can = document.createElement("canvas");
    can.height = window.innerHeight;
    can.width = window.innerWidth;
    document.body.appendChild(can);
var ctx = can.getContext("2d");
var x0,y0,x_pos,y_pos;
var pY = 200;


function fern(ctx) {
    with(ctx){
    fillStyle = 'green';
    translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
    var that = this;
    
    with(this){
    maxIt = 100000;
    x = 0;
    y = 0;

    main = function () {
        for (var i = 0; i < maxIt; i++) {
            var rand = Math.random() * 100;
            if (rand < 1) {
                that.f1();
            } else if (rand < 85) {
                that.f2();
            } else if (rand < 94) {
                that.f3();
            } else {
                that.f4();
            }
        }
    }

    f1 = function () {
    with(this){
        x0 = that.x;
        y0 = that.y;
        x_pos = 0;
        y_pos = 0.16 * y0;
        }
        that.draw(x_pos, y_pos);
    }

    f2 = function () {
    with(this){
        x0 = that.x;
        y0 = that.y;
        x_pos = 0.85 * x0 + 0.04 * y0;
        y_pos = -0.04 * x0 + 0.85 * y0 + 1.6;
        }
        that.draw(x_pos, y_pos);
    }

    f3 = function () {
    with(this){
        x0 = that.x;
        y0 = that.y;
        x_pos = 0.2 * x0 - 0.26 * y0;
        y_pos = 0.23 * x0 + 0.22 * y0 + 1.6;
        }
        that.draw(x_pos, y_pos);
    }

    f4 = function () {
    with(this){
        x0 = that.x;
        y0 = that.y;
        x_pos = -0.15 * x0 + 0.28 * y0;
        y_pos = 0.26 * x0 + 0.24 * y0 + 0.44;
        }
        that.draw(x_pos, y_pos);
    }

    draw = function (x0, y0) {
        that.x = x0;
        that.y = y0;

        ctx.fillRect(x0*40, -y0*40+pY, 1, 1);
    }

    main();
}
}

fern(ctx);

}