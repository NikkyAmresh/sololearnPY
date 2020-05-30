alert("Hope you like it");
alert("Click black blocks only, avoid clicking the background");

var left = 0, tp = [-10], vis = 0, t = [], diva = [], dd = 0;

onload = drop;

function drop() {
    var div;
    left = Math.round(Math.random() * 3);
    if (left == 0) {
        left = 0;
    } else if (left == 1) {
        left = 25;
    } else if (left == 2) {
        left = 50;
    } else if (left == 3) {
        left = 75;
    }
    document.body.appendChild(div = document.createElement("div"));
    div.id = vis++;
    div.style.left = left + "%";
    tp[vis] = -10;
    div.style.zIndex = 10000 - vis + 1;
    move(div);
    if (!Math.round(Math.random()*10)) {
        t[vis] = setTimeout(drop,1700+Math.random()*100);
    }
    div.ontouchstart = function() {
        document.body.removeChild(this);
        diva[this.id] = true;
        dd++;
    };
}

function move(div) {
    if (!Math.round(Math.random()*2500)) {
        t[vis] = setTimeout(drop,1600+Math.random()*100);
    }
    if (diva[div.id]) {
        t[vis] = setTimeout(drop,100*Math.random()+10);
        return;
    }
    div.style.top = tp[div.id]+++"%";
    if (tp[div.id] >= window.innerHeight/4) {
        lost();
        return;
    }
    t[div.id] = setTimeout(move,15,div);
}

window.ontouchstart = function(e) {
    e.preventDefault();
    if (e.target == document.documentElement) {
        lost();
    }
};

function lost() {
    alert("You Lost!… ~_~\nScore : " + dd);
    document.body.innerHTML = document.body.innerHTML.match(/<(audio.*?>|hr).*?>/gmi).join("");
    if (!dd) {
        alert("Please refresh if it's malfunctioning...")
    }
    for (var stp = 0; stp < t.length; stp++) {
        clearTimeout(t[stp]);
    }
    document.getElementsByTagName("audio")[0].play();
    left = 0;
    tp = [-10];
    vis = 0;
    t = [];
    diva = [];
    dd = 0;
    setTimeout(drop,100*Math.random());
}