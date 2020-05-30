// Created by Andre Daniel

var cubeSize = 40;
var yOffSet = 150, xOffSet = 120;
var block = {width:cubeSize, height:cubeSize, length:cubeSize};
var world = {width:35, height:30, length:35};
var x = -150, y = 150, z = -150, rx = 20, ry = -45, rz = -20, ijk=45;
var seed, seedP, generate;
var flowerTypes = ["rose","dandelion","tulip"];
var defaultMethod = "Simplex";
var width, height, length;
var canvas, ctx, grd;

requestSizes(isMobile());
var cube = new Array(world.width);
for (var i = 0; i < cube.length; i++) {
    cube[i] = new Array(world.height);
    for (var j = 0; j < cube[i].length; j++) {
        cube[i][j] = new Array(world.length);
    }
}

window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    grd = ctx.createRadialGradient(0, canvas.height/2, 0, 0, canvas.height/3, canvas.height/(2/2));
    grd.addColorStop(1, "#7EC0EE");
    grd.addColorStop(0, "#4B90BB");
     
    width = canvas.width;
    height = canvas.height;
    length = 500;
    xOffSet = width  / 2;
    yOffSet = height / 2;
    
    //generate world
    for(var i = world.width-1; i >= 0; i--)
        for(var j = world.height-1; j >= 0; j--)
            for(var k = world.length-1; k >= 0; k--)
                newWorld(i, j, k, block.width, block.height, block.length);
    
    seedP = document.getElementById("seed");
    
    ctx.translate(xOffSet, yOffSet);
    
    setSeed(0);
}
function typeToColour(type) {
    colour = new Array(6);
    switch(type) {
        case "air":
            colour = ["transparent", "transparent", "transparent", "transparent", "transparent", "transparent"];
            break;
        case "dirt":
            colour = ["#784800", "#784800", "#784800", "#784800", "#784800", "#784800"];
            break;
        case "grass":
            colour = ["#784800", "#784800", "#784800", "#784800", "#228B22", "#784800"];
            break;
        case "sand":
            color = ["#F5DEB3", "#F5DEB3", "#F5DEB3", "#F5DEB3", "#F5DEB3", "#F5DEB3"];
            break;        
        case "stone":
            colour = ["#8B8D7A", "#8B8D7A", "#8B8D7A", "#8B8D7A", "#8B8D7A", "#8B8D7A"];
            break;
        case "wood":
            colour = ["#a76b29", "#a76b29", "#a76b29", "#a76b29", "#DAA520", "#DAA520"];
            break;
        case "leaf":
            colour = ["#4da83b", "#4da83b", "#4da83b", "#4da83b", "#4da83b", "#4da83b"];
            break;
        case "tulip":
            colour = ["pink", "pink", "pink", "pink", "pink", "pink"];
            break;
        case "dandelion":
            colour = ["orange", "orange", "orange", "orange", "orange", "orange"];
            break;
        case "rose":
            colour = ["red", "red", "red", "red", "red", "red"];
            break;
        case "water":
            //colour = ["#74e7ee", "#74e7ee", "#74e7ee", "#74e7ee", "#74e7ee", "#74e7ee"];
            var alp = 0.8;
            colour = ["rgba(116, 231, 238, "+alp+")", "rgba(116, 231, 238, "+alp+")", "rgba(116, 231, 238, "+alp+")", "rgba(116, 231, 238, "+alp+")", "rgba(116, 231, 238, "+alp+")", "rgba(116, 231, 238, "+alp+")"];
            break;
        case "vine":
            colour = ["#708237", "#708238", "#708238", "#708238", "#708238", "#708238"];
            break;
        case "oakwood":
            colour = ["#966F33", "#966F33", "#966F33", "#966F33", "#966F33", "#966F33"];
            break;
        case "birchwood":
            colour = ["#f8dfa1", "#f8dfa1", "#f8dfa1", "#f8dfa1", "#f8dfa1", "#f8dfa1"];
            break;
        case "wooddoor":
            colour = ["#cd8500", "#cd8500", "#cd8500", "#cd8500", "#cd8500", "#cd8500"];
            break;
        case "cobblestone":
            colour = ["#72745e", "#72745e", "#72745e", "#72745e", "#72745e", "#72745e"];
            break;
        case "window":
            var alp = 0.7;
            colour = ["rgba(246, 254, 255, "+alp+")", "rgba(246, 254, 255, "+alp+")", "rgba(246, 254, 255, "+alp+")", "rgba(246, 254, 255, "+alp+")", "rgba(246, 254, 255, "+alp+")", "rgba(246, 254, 255, "+alp+")"];
            break;
        default:
            colour = ["transparent", "transparent", "transparent", "transparent", "transparent", "transparent"];
    }
    return colour;
}
function newWorld(x, y, z, w, h, l) {
    var i = x, j = y, k = z;
    x*=w;
    y*=h;
    z*=l;
    
    cube[i][j][k] = {};
    cube[i][j][k].coords = makeVertices(x, y, z, w, h, l);
    cube[i][j][k].exist = true;
}
function makeVertices(x, y, z, w, h, l) {
    var vertexes = [];
    //8 edges first
    vertexes[0] = make3DPoint(x, y, z);
    vertexes[1] = make3DPoint(x, y + h, z);
    vertexes[2] = make3DPoint(x + w, y + h, z);
    vertexes[3] = make3DPoint(x + w, y, z);
    vertexes[4] = make3DPoint(x, y, z + l);
    vertexes[5] = make3DPoint(x, y + h, z + l);
    vertexes[6] = make3DPoint(x + w, y + h, z + l);
    vertexes[7] = make3DPoint(x + w, y, z + l);
    //top midpoints
    vertexes[8] = make3DPoint(x + w/2, y, z);
    vertexes[9] = make3DPoint(x, y + h/2, z);
    vertexes[10] = make3DPoint(x + w/2, y + h/2, z);
    vertexes[11] = make3DPoint(x + w, y + h/2, z);
    vertexes[12] = make3DPoint(x + w/2, y + h, z);
    //middle midpoints
    vertexes[13] = make3DPoint(x, y, z + l/2);
    vertexes[14] = make3DPoint(x + w/2, y, z + l/2);
    vertexes[15] = make3DPoint(x + w, y, z + l/2)
    vertexes[16] = make3DPoint(x, y + h/2, z + l/2);
    vertexes[17] = make3DPoint(x + w/2, y + h/2, z + l/2);
    vertexes[18] = make3DPoint(x + w, y + h/2, z + l/2);
    vertexes[19] = make3DPoint(x, y + h, z + l/2);
    vertexes[20] = make3DPoint(x + w/2, y + h, z + l/2);
    vertexes[21] = make3DPoint(x + w, y + h, z + l/2);
    //bottom midpoints
    vertexes[22] = make3DPoint(x + w/2, y, z + l);
    vertexes[23] = make3DPoint(x, y + h/2, z + l);
    vertexes[24] = make3DPoint(x + w/2, y + h/2, z + l);
    vertexes[25] = make3DPoint(x + w, y + h/2, z + l);
    vertexes[26] = make3DPoint(x + w/2, y + h, z + l);
    //inner flower points
    vertexes[27] = make3DPoint(x + w/3, y, z + l/3);
    vertexes[28] = make3DPoint(x + w/3, y + h/3, z + l/3);
    vertexes[29] = make3DPoint(x + (w - (w/3)), y + h/3, z + l/3);
    vertexes[30] = make3DPoint(x + (w - (w/3)), y, z + l/3);
    vertexes[31] = make3DPoint(x + w/3, y, z + (l - l/3));
    vertexes[32] = make3DPoint(x + w/3, y + h/3, z + (l - l/3));
    vertexes[33] = make3DPoint(x + (w - (w/3)), y + h/3, z + (l - l/3));
    vertexes[34] = make3DPoint(x + (w - (w/3)), y, z + (l - l/3));
    //vines
    vertexes[35] = make3DPoint(x + w/3, y + h, z + l/3);
    vertexes[36] = make3DPoint(x + (w - w/3), y + h, z + l/3);
    vertexes[37] = make3DPoint(x + w/3, y + h, z + (l - l/3));
    vertexes[38] = make3DPoint(x + (w - w/3), y + h, z + (l - l/3));
    return vertexes;
}
function convertPoints(points, r){//from 3D to 2D
    var TransformedPointsArray = [];
    var radx = (Math.PI / 180) * r.x;
    var rady = (Math.PI / 180) * r.y;
    var radz = (Math.PI / 180) * r.z;
    var sinx = Math.sin(radx);
    var siny = Math.sin(rady);
    var sinz = Math.sin(radz);
    var cosx = Math.cos(radx);
    var cosy = Math.cos(rady);
    var cosz = Math.cos(radz);
    var x, y, z, xx, xy, xz, yx, yy, yz, zx, zy, zz, xxx, yyy, zzz;
    var tx, ty, tz;
    var i = points.length;
    
    //X axis
    xx = cosy*cosz;
    xy = -cosy*sinz*cosx+siny*sinx;
    xz = cosy*sinz*sinx+siny*cosx;

    //Y axis
    yx = sinz;
    yy = cosz*cosx;
    yz = -cosz*sinx;

    //Z axis
    zx = -siny*cosz;
    zy = siny*sinz*cosx+cosy*sinx;
    zz = -siny*sinz*sinx+cosy*cosx;

    while (i--) {
        tx = points[i].x - this.x;
        ty = points[i].y - this.y;
        tz = points[i].z - this.z;
        
        xxx = tx*xx + ty*xy + tz*xz ;
        yyy = tx*yx + ty*yy + tz*yz ;
        zzz = tx*zx + ty*zy + tz*zz ;

        
        z = length/(length + zzz);
        x = xxx*z;
        y = yyy*z;

        TransformedPointsArray[i] = make2DPoint(x, y);
    }
    return TransformedPointsArray;
}
function shape(points, col, type) {
    if(type === "flower"){
    //front
    square("black", col[0], points[27], points[28], points[29], points[30]);
    square("black", col[0], points[28], points[17], points[17], points[29]);
    //back
    square("black", col[1], points[32], points[31], points[34], points[33]);
    square("black", col[0], points[17], points[32], points[33], points[17]);
    //left
    square("black", col[2], points[31], points[32], points[28], points[27]);
    square("black", col[0], points[32], points[17], points[17], points[28]);
    //right
    square("black", col[3], points[30], points[29], points[33], points[34]);
    square("black", col[0], points[29], points[17], points[17], points[33]);
    //top
    square("black", col[4], points[31], points[27], points[30], points[34]);
    //bottom
    square("black", col[5], points[17], points[20], points[20], points[17]);
    } else if(type ==="vine") {
    //front
    square("black", col[0], points[27], points[35], points[36], points[30]);
    //back
    square("black", col[1], points[37], points[31], points[34], points[38]);
    //left
    square("black", col[2], points[31], points[37], points[35], points[27]);
    //right
    square("black", col[3], points[30], points[36], points[38], points[34]);
    //top
    square("black", col[4], points[31], points[27], points[30], points[34]);
    //bottom
    square("black", col[5], points[35], points[37], points[38], points[36]);
    } else if(type ==="slabfront") {
    //front
    square("black", col[0], points[13], points[19], points[21], points[15]);
    //back
    square("black", col[1], points[5], points[4], points[7], points[6]);
    //left
    square("black", col[2], points[4], points[5], points[19], points[13]);
    //right
    square("black", col[3], points[15], points[21], points[6], points[7]);
    //top
    square("black", col[4], points[4], points[13], points[15], points[7]);
    //bottom
    square("black", col[5], points[19], points[5], points[6], points[21]);
    } else if(type ==="slableft") {
    //front
    square("black", col[0], points[8], points[12], points[2], points[3]);
    //back
    square("black", col[1], points[26], points[22], points[7], points[6]);
    //left
    square("black", col[2], points[22], points[26], points[12], points[8]);
    //right
    square("black", col[3], points[3], points[2], points[6], points[7]);
    //top
    square("black", col[4], points[22], points[8], points[3], points[7]);
    //bottom
    square("black", col[5], points[12], points[26], points[6], points[2]);
    } else if(type ==="slabbottom") {
    //front
    square("black", col[0], points[9], points[1], points[2], points[11]);
    //back
    square("black", col[1], points[5], points[23], points[25], points[6]);
    //left
    square("black", col[2], points[23], points[5], points[1], points[9]);
    //right
    square("black", col[3], points[11], points[2], points[6], points[25]);
    //top
    square("black", col[4], points[23], points[9], points[11], points[25]);
    //bottom
    square("black", col[5], points[1], points[5], points[6], points[2]);
    } else {
    //square("black", "transparent", points[], points[], points[], points[]);
    //front
    square("black", col[0], points[0], points[1], points[2], points[3]);
    //back
    square("black", col[1], points[5], points[4], points[7], points[6]);
    //left
    square("black", col[2], points[4], points[5], points[1], points[0]);
    //right
    square("black", col[3], points[3], points[2], points[6], points[7]);
    //top
    square("black", col[4], points[4], points[0], points[3], points[7]);
    //bottom
    square("black", col[5], points[1], points[5], points[6], points[2]);
    }
}
function square(stroke,fill,p1,p2,p3,p4) {
    if(isVisibleBetween(p1, p2, p3) && fill!="transparent") {
    begin();
    color(stroke, fill);
    draw("move", p1);
    draw("line", p2);
    draw("line", p3);
    draw("line", p4);
    draw("line", p1);
    end();
    }
}
function draw(type, p) {
    if(type==="move")
        ctx.moveTo(p.x, p.y);
    else if(type==="line")
        ctx.lineTo(p.x, p.y);
}
function isVisibleBetween(A, B, C) {
    var visibility;
    if (((B.y-A.y)/(B.x-A.x) - (C.y-A.y)/(C.x-A.x) < 0) ^ (A.x <= B.x == A.x > C.x)) {
        visibility = false;
    } else {
        visibility = true;
    }
    return visibility;
}

function color(stroke, fill) {
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
}
function begin() {
    ctx.beginPath();
    ctx.lineWidth = 1;
}
function end() {
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function make3DPoint(x, y, z) {
    var point = {};
    point.x = x;
    point.y = y;
    point.z = z;
    return point;
}
function make2DPoint(x, y){
    var point = {};
    point.x = x;
    point.y = y;
    return point;
}
function getY(val, theH) {
    var center, range, value, y;
    center = Math.round(theH / 2);
    range = theH - (theH / 4);
    value = Math.round(val*(range/2));
    y = center + value;
    return y;
}
function setType(x, y, z, col, type )  {
    try {
        cube[x][y][z].id = col;
        cube[x][y][z].type = type;
    } catch(e) {}
    
}

function sameType(x, y, z, type) {
    try {
        return cube[x][y][z].id==type;
    } catch(e) {}
}
function freeType(x, y, z, col, w, l) {
    for(var i=  x; i <= (x+w); i++) {
        for(var j= z; j <= (z+l); j++) {
            if(!sameType(i, y, j, col))
                return false
        }
    }
    return true;
}
function inBounds(x, y) {
    try {
        return cube[x][y][0].exist;
    } catch(e) {}
}
function randomSeed() {
    setSeed(rand(65536));
}
function setSeed(num) {
    if(num===undefined)
        seed = seedP.value;
    else {
        seed = num;
        seedP.value = num;
    }
    generateWorld(defaultMethod);
}
function rand(num1, num2) {
    if(num2===undefined)
        var random = Math.round(Math.random() * num1);
    else {
        var range = num2 - num1;
        var random = Math.round(Math.random() * range) + num1;
    }
    return random;
}
function help() {
    alert("There are 65536 different worlds, represented by seeds.\nType a number or click the 'Random Seed' button.\nThe two generation buttons regenerate trees and flowers based on the current seed and algorithm.");
    alert("Give it about 15 - 30 seconds to load on mobile and about 10 seconds on pc.\n\nAfter that, each new generation will take about 4 - 8 seconds on mobile and about 2 seconds on pc.\n\n(If it takes too long, lower the world's width and length)");
    alert("My favourite seeds are:\nSimplex-\n18818\n15733\n18518\n2556\n\nPerlin-\n2652\n36138\n57702\n\nComment yours below!");
}
function changelog() {
    alert("Version 1.0\n\nAdded:\n-Generation!");
    alert("Version 1.1 [50 upvotes]\n\nAdded:\n-Trees!\n-Flowers!");
    alert("Version 1.2 [100 upvotes]\n\nAdded:\n-Houses!\n-Vines!\n-Flat World!\n\nChanged:\n-Reduced default world size (for mobile's sake)");
    alert("Version 1.3 [250 upvotes]\n\nChanged:\n-Choose your own world size.\n-Default methods:\n    Browser- Perlin\n    Mobile- Simplex");
    alert("Version 1.4 [500 upvotes]\n\nPlanned:\n-Wells\nComment more suggestions below!");
}
function drawMethod(s, boardCtx, width, height) {
        s = "Method: " + s;
        var h = width/(500/18);
        boardCtx.font = h+"pt Arial";
        var w = boardCtx.measureText(s).width;
        var x = 5;
        
        boardCtx.fillStyle = "#8FD4FF";
        boardCtx.strokeStyle = "none";
        boardCtx.lineWidth = 2;
        boardCtx.beginPath();
        boardCtx.rect((width/2)-w - x,(height/2)-h - x,w,h);
        boardCtx.closePath(); boardCtx.fill(); boardCtx.stroke();
        
        boardCtx.fillStyle = "black";
        boardCtx.fillText(s, (width/2)-w -x, height/2 -x);
}
function generateWorld(method) {
    var ran, hj;
    generate = (method === "Simplex") ? noise.simplex3 : noise.perlin3;
    var cubePoints, cubeTypes, x, y, z, i;
    noise.seed(seed);
    //clearing world
    for(x = 0; x < world.width; x++)
        for(y = 0; y < world.height; y++)
            for(z = 0; z < world.length; z++)
                setType(x,y,z,"air");

    //generating grass
    for ( x = 0; x < world.width; x++)
        for ( z = 0; z < world.length; z++) {
            y = method==="Flat"?Math.floor(world.height/2):getY(generate(x / ijk, z / ijk, 0),world.height); 
            generateGrass(x,y,z);
        }
    //generating houses
    for ( x = 0; x < world.width; x++)
        for ( z = 0; z < world.length; z++) {
            y = method==="Flat"?Math.floor(world.height/2):getY(generate(x / ijk, z / ijk, 0),world.height);
            if(rand(1000) < 5) generateHouse(x, y, z, 6, 4, 6, ["grass", "air"], ["oakwood", "birchwood", "wooddoor", "window", "cobblestone"]);
        }
    //generating fauna
    for ( x = 0; x < world.width; x++)
        for ( z = 0; z < world.length; z++) {
            y = method==="Flat"?Math.floor(world.height/2):getY(generate(x / ijk, z / ijk, 0),world.height);
            if(rand(100) < 1) generateTrees(x,y,z);
            if(rand(1000) < 6) generateFlowers(x,y,z,rand(flowerTypes.length-1), method);
        }
            
                  
    //borders
    for(x = 0; x < world.width; x++) {
        ran = rand(2,4); hj = 0;
        for(y = 0; y < world.height; y++)
            if((sameType(x,y-1,0, "grass") || sameType(x,y-1,0, "dirt") || sameType(x, y-1, 0, "wood") || sameType(x,y-1,0, "stone")) && sameType(x,y,0,"air")) {
                hj++;
                if(hj <= ran)
                    setType(x,y,0, "dirt");
                else
                    setType(x,y,0, "stone");
            }
    }
    for(z = 0; z < world.length; z++) {
        ran = rand(2,4); hj = 0;
        for(y = 0; y < world.height; y++)
            if((sameType(0,y-1,z, "grass") || sameType(0,y-1,z, "dirt") || sameType(0, y-1, z, "wood") || sameType(0,y-1,z, "stone")) && sameType(0,y,z,"air")) {
                hj++;
                if(hj <= ran)
                    setType(0,y,z, "dirt");
                else
                    setType(0,y,z, "stone");
            }
    }
    
    ctx.fillStyle = grd;                
    ctx.fillRect(-xOffSet, -yOffSet, canvas.width, canvas.height); 
    //show world
    for(var i = world.width-1; i >= 0; i--)
        for(var j = world.height-1; j >= 0; j--)
            for(var k = world.length-1; k >= 0; k--) {
                cubePoints = convertPoints(cube[i][j][k].coords, {x:rx, y:ry, z:rz});
                cubeColours = typeToColour(cube[i][j][k].id);
                    
                cubeTypes = cube[i][j][k].type;
                    
                shape(cubePoints, cubeColours, cubeTypes);
            }
       
     drawMethod(method, ctx, canvas.width, canvas.height);   
     ctx.strokeStyle = "black";
     ctx.lineWidth = 5;
     ctx.strokeRect(-xOffSet, -yOffSet, canvas.width, canvas.height);
}
function generateGrass(x, y, z) {
    setType(x,y,z,"grass");
}
function generateTrees(x, y, z) {
    if(sameType(x, y, z, "grass") && sameType(x, y-1, z, "air")) {
        var k = rand(2) + 7;
        var vl = 4;
        for(i = 1; i < k; i++) {
            setType(x, y-i, z, "wood");
            if(i==(k-1)) {
                y -= i;
                //center
                setType(x,y-1,z,"leaf");
                //center fill (with points)
                setType(x-1,y-1,z, "leaf");
                setType(x-1,y-1,z-1, "leaf");
                setType(x,y-1,z-1, "leaf");
                setType(x+1,y-1,z-1, "leaf");
                setType(x+1,y-1,z, "leaf");
                setType(x+1,y-1,z+1, "leaf");
                setType(x,y-1,z+1, "leaf");
                setType(x-1,y-1,z+1, "leaf");
                setType(x-2,y-1,z, "leaf");
                setType(x+2,y-1,z, "leaf");
                setType(x,y-1,z-2, "leaf");
                setType(x,y-1,z+2, "leaf");
                //1 layer down (with points)
                setType(x-1,y,z, "leaf");
                setType(x-1,y,z-1, "leaf");
                setType(x,y,z-1, "leaf");
                setType(x+1,y,z-1, "leaf");
                setType(x+1,y,z, "leaf");
                setType(x+1,y,z+1, "leaf");
                setType(x,y,z+1, "leaf");
                setType(x-1,y,z+1, "leaf");
                setType(x-2,y,z, "leaf");
                setType(x+2,y,z, "leaf");
                setType(x,y,z-2, "leaf");
                setType(x,y,z+2, "leaf");
                //2 layer down (except for edges)
                setType(x-1,y+1,z, "leaf");
                for(var j = 1; j < rand(1,vl); j++)
                    if(sameType(x-1,y+1+j, z, "air"))
                        setType(x-1,y+1+j, z, "vine", "vine");
                    else
                        break;
                setType(x,y+1,z-1, "leaf");
                for(var j = 1; j < rand(1,vl); j++)
                    if(sameType(x,y+1+j, z-1, "air"))
                        setType(x,y+1+j, z-1, "vine", "vine");
                    else
                        break;
                setType(x+1,y+1,z, "leaf");
                for(var j = 1; j < rand(1,vl); j++)
                    if(sameType(x+1,y+1+j, z, "air"))
                        setType(x+1,y+1+j, z, "vine", "vine");
                    else
                        break;
                setType(x,y+1,z+1, "leaf");
                for(var j = 1; j < rand(1,vl); j++)
                    if(sameType(x,y+1+j, z+1, "air"))
                        setType(x,y+1+j, z+1, "vine", "vine");
                    else
                        break;
                //1 layer up (with center and points)
                setType(x,y-2,z, "leaf");
                setType(x-1,y-2,z, "leaf");
                setType(x-1,y-2,z-1, "leaf");
                setType(x,y-2,z-1, "leaf");
                setType(x+1,y-2,z-1, "leaf");
                setType(x+1,y-2,z, "leaf");
                setType(x+1,y-2,z+1, "leaf");
                setType(x,y-2,z+1, "leaf");
                setType(x-1,y-2,z+1, "leaf");
                setType(x-2,y-2,z, "leaf");
                setType(x+2,y-2,z, "leaf");
                setType(x,y-2,z-2, "leaf");
                setType(x,y-2,z+2, "leaf");
                //2 layer up (with center except for edges)
                setType(x,y-3,z, "leaf");
                setType(x-1,y-3,z, "leaf");
                setType(x,y-3,z-1, "leaf");
                setType(x+1,y-3,z, "leaf");
                setType(x,y-3,z+1, "leaf");
            }
        }
    }
}
function generateFlowers(x,y,z,type, method) {
    var pos = {};
    for(var i = 0; i < 10; i++) {
        pos = {x:x,y:y,z:z};
        
        for(var j = 0; j < 5; j++) {
            pos.x = pos.x + rand(6) - rand(6);
            pos.z = pos.z + rand(6) - rand(6);
            
            if(inBounds(pos.x, pos.z)) {
                pos.y = method==="Flat"?Math.floor(world.height/2):getY(generate(pos.x / ijk, pos.z / ijk, 0),world.height);
                
                if(sameType(pos.x, pos.y, pos.z, "grass") && sameType(pos.x, pos.y - 1, pos.z, "air"))
                    setType(pos.x, pos.y-1, pos.z, flowerTypes[type], "flower");
            }
        }
    }
}
function generateHouse(x, y, z, w, h, l, conditions, types) {
    if(freeType(x, y, z, conditions[0], w, l) && freeType(x, y-1, z, conditions[1], w, l)){
        var order = rand(1);
        makeFrame(x, y-1, z, w, h, l, types[0]);
        makeWall(x, y-1, z, w, h, l, [types[1], types[2], types[3], types[0]], "front", order);
        makeWall(x, y-1, z, w, h, l, [types[1]], "back");
        makeWall(x, y-1, z, w, h, l, [types[1], types[3]], "left", order);
        makeWall(x, y-1, z, w, h, l, [types[1]], "right");
        makeWall(x, y-1, z, w, h, l, [types[4]], "top");
        makeWall(x, y-1, z, w, h, l, [types[4]], "bottom");
    }
}

function makeFrame(x, y, z, w, h, l, type) {
    for(var i = x;i <= (x+w); i++)
        for(var j = y;j >= (y-h); j--)
            for(var k = z;k <= (z+l); k++) {
                if((i==x&&j==y)||(i==(x+w)&&j==y)||(i==x&&j==(y-h))||(i==(x+w)&&j==(y-h)) || (i==x&&k==z)||(i==(x+w)&&k==z)||(i==x&&k==(z+l))||(i==(x+w)&&k==(z+l)) || (j==y&&k==z)||(j==(y-h)&&k==z)||(j==y&&k==(z+l))||(j==(y-h)&&k==(z+l)))
                    setType(i, j, k, type);
            }
                
}
function  makeWall(x, y, z, w, h, l, type, position, order) {
    if(position==="front") {
        var door, wind;
        if(order==0) {
            if(rand(100)>50) {
                door = x + 2;
                wind = x + 4;
            } else {
                door = x + 4;
                wind = x + 2;
            }
            for(var i = (x+1);i < (x+w); i++)
                for(var j = (y-1);j > (y-h); j--)
                    if((i==door&&j>=(y-2)))
                        setType(i, j, z, type[1], "slabfront");
                    else if(i==wind&&j==(y-2))
                        setType(i, j, z, type[2], "slabfront");
                    else
                        setType(i, j, z, type[0]);
            setType(door, y, (z-1), type[3], "slabbottom");
        } else if(order==1) {
            if(rand(100)>50) {
                door = z + 2;
                wind = z + 4;
            } else {
                door = z + 4;
                wind = z + 2;
            }
            for(var k = (z+1);k < (z+l); k++)
                for(var j = (y-1);j > (y-h); j--)
                    if((k==door&&j>=(y-2)))
                        setType(x, j, k, type[1], "slableft");
                    else if(k==wind&&j==(y-2))
                        setType(x, j, k, type[2], "slableft");
                    else
                        setType(x, j, k, type[0]);
            setType((x-1), y, door, type[3], "slabbottom");
        }
    } else if(position==="back") {
        for(var i = (x+1);i < (x+w); i++)
            for(var j = (y-1);j > (y-h); j--)
                    setType(i, j, (z+l), type[0]);
    } else if(position==="left") {
        if(order==0)
            for(var k = (z+1);k < (z+l); k++)
                for(var j = (y-1);j > (y-h); j--)
                    if(k > (z+1) && k < (z+l-1)&&j==(y-2))
                        setType(x, j, k, type[1], "slableft");
                    else
                        setType(x, j, k, type[0]);
        else if(order==1)
            for(var i = (x+1);i < (x+w); i++)
                for(var j = (y-1);j > (y-h); j--)
                    if(i > (x+1) && i < (x+w-1)&&j==(y-2))
                        setType(i, j, z, type[1], "slabfront");
                    else
                        setType(i, j, z, type[0]);
    } else if(position==="right") {
        for(var k = (z+1);k < (z+l); k++)
            for(var j = (y-1);j > (y-h); j--)
                    setType((x+w), j, k, type[0]);
    } else if(position==="top") {
        for(var k = (z+1);k < (z+l); k++)
            for(var i = (x+1);i < (x+w); i++)
                    setType(i, (y-h), k, type[0]);
    } else if(position==="bottom") {
        for(var k = (z+1);k < (z+l); k++)
            for(var i = (x+1);i < (x+w); i++)
                    setType(i, y, k, type[0]);
    }
    
}

function requestSizes(mob) {
    var sW = 10, sH = 30, sL = 10;
    var mW = mob? 40 : 75, mH = mob? 30 : 50, mL = mob? 40 : 75;
    var dW = 30, dH = 30, dL = 30;
    
    var w = Math.round(parseInt(prompt("Enter world width ["+sW+":"+mW+"]", mW)));
    var h = mob?mH:Math.round(parseInt(prompt("Enter world height ["+sH+":"+mH+"]", mH)));
    var l = Math.round(parseInt(prompt("Enter world length ["+sL+":"+mL+"]", mL)));
    
    if(w<sW) w = sW;
    if(w>mW) w = mW;
    if(isNaN(w)) w = dW;
    
    if(h<sH) h = sH;
    if(h>mH) h = mH;
    if(isNaN(h)) h = dH;
    
    if(l<sL) l = sL;
    if(l>mL) l = mL;
    if(isNaN(l)) l = dL;
    
    defaultMethod = mob?"Simplex":"Perlin";
    world = {width:w, height:h, length:l};
}
function isMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if ((/windows phone/i.test(userAgent))||(/android/i.test(userAgent))||(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        return true;
    }

    return false;
}