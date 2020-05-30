//CODE:

var ctx, clock, ruleSet, scale, pixSize, width, height, p;
var tentacles = new Array();
var mousePos = {x:0,y:0};

window.onload = function(){
    canvasSetup();
    start(1);
    clock = requestAnimationFrame(main);
};
function canvasSetup(){
    canvas = document.getElementById('canvas');
    width = window.innerWidth-5;
    height = window.innerHeight-5;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
}

function start(rule){
    p = {
        x:Math.random(),
        y:Math.random()
    };
    var rule = rules[rule];
    ruleSet = rule.ruleSet;
    scale = height/rule.size;
    pixSize = 1/scale;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0,width,height);
    ctx.translate(width/2, height);
    ctx.scale(scale,scale);
}

function main(){
    for(var i=0;i<1000;i++){
        var rule = getRule();
        p = {
            x: p.x*rule.a+p.y*rule.b+rule.tx,
            y: p.x*rule.c+p.y*rule.d+rule.ty
        };
        plot(p);
    }
    clock = requestAnimationFrame(main);
}

function getRule(){
    var rand = Math.random();
    for(var i=0;i<ruleSet.length;i++){
        var rule = ruleSet[i];
        if(rand<rule.weight){
            rule.index = i;
            return rule;
        }
        rand -= rule.weight;
    }
}

function plot(p){
    ctx.fillRect(p.x,-p.y,pixSize,pixSize);
}

//DATA:

var rules = [
    {
        size: 10.1,
        ruleSet: [
            {
                a: 0.85,
                b: 0.04,
                c: -0.04,
                d: 0.85,
                tx: 0,
                ty: 1.6,
                weight: 0.65
            },
            {
                a: -0.15,
                b: 0.28,
                c: 0.26,
                d: 0.24,
                tx: 0,
                ty: 0.44,
                weight: 0.12
            },
            {
                a: 0.2,
                b: -0.26,
                c: 0.23,
                d: 0.22,
                tx: 0,
                ty: 1.6,
                weight: 0.12
            },
            {
                a: 0,
                b: 0,
                c: 0,
                d: 0.16,
                tx: 0,
                ty: 0,
                weight: 0.11
            }
        ]
    },
    {
        size: 2.05,
        ruleSet: [
            {
                a: 0.05,
                b: 0,
                c: 0,
                d: 0.6,
                tx: 0,
                ty: 0,
                weight: 0.17
            },
            {
                a: 0.05,
                b: 0,
                c: 0,
                d: -0.5,
                tx: 0,
                ty: 1,
                weight: 0.17
            },
            {
                a: 0.46,
                b: -0.321,
                c: 0.386,
                d: 0.383,
                tx: 0,
                ty: 0.6,
                weight: 0.17
            },
            {
                a: 0.47,
                b: -0.154,
                c: 0.171,
                d: 0.423,
                tx: 0,
                ty: 1.1,
                weight: 0.17
            },
            {
                a: 0.433,
                b: 0.275,
                c: -0.25,
                d: 0.476,
                tx: 0,
                ty: 1,
                weight: 0.16                
            },
            {
                a: 0.421,
                b: 0.257,
                c: -0.353,
                d: 0.306,
                tx: 0,
                ty: 0.7,
                weight: 0.16
            }
        ]
    }
]