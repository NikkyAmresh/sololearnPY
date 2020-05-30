// Created by Valen.H. ~

var tp = 0, left = 0, clr = "red", cnt = 11, sel, list = [], turn = "blue", enpassant;

window.onclick = function() {
    $("#turn").html("Turn : "+turn);
    $("#turn").css("color", turn);
};

window.ontouchstart = function() {
    $("#turn").html("Turn : "+turn);
    $("#turn").css("color", turn);
};

$(function() {
    tp = 0, left = 0, clr = "red", cnt = 11, sel, list = [], turn = "blue", enpassant;
    $("#turn").html("Turn : "+turn);
    $("#turn").css("color", turn);
    for (var st = 0; st < 8; st++) {
        for (var stp = 0; stp < 8; stp++) {
            var div = document.body.appendChild(document.createElement("div"));
            div.style.top = tp + "vw";
            div.style.left = left + "%";
            div.style.background = clr = (clr == "black") ? "white" : "black";
            div.id = cnt;
            var color = (div.id.match(/[12]$/)) ? "red" : "blue";
            div.tabIndex = cnt;
            tp += 12.5;
            if (cnt.toString().match(/[72]$/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='P'>&#9823;</span>";
            } else if (cnt.toString().match(/[18]{2}/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='R'>&#9820;</span>";
            } else if (cnt.toString().match(/[27][18]/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='H'>&#9822;</span>";
            } else if (cnt.toString().match(/[36][18]/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='B'>&#9821;</span>";
            } else if (cnt.toString().match(/4[18]/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='Q'>&#9819;</span>";
            } else if (cnt.toString().match(/5[18]/)) {
                div.innerHTML = "<span style='color:" + color + ";' class='K'>&#9818;</span>";
            }//ifcnt
            if (/iphone|ipad|android/im.test(navigator.userAgent)) {
                div.ontouchend = function() {
                    move(this);
                };
                div.onblur = function() {
                    for (var s = 0; s < document.getElementsByTagName("div").length; s++) {
                        document.getElementsByTagName("div")[s].style.borderColor = "black";
                        document.getElementsByTagName("div")[s].style.zIndex = this.id;
                    }//ifs
                };
            } else {
                div.onclick = function() {
                    move(this);
                };
                div.onblur = function() {
                    for (var s = 0; s < document.getElementsByTagName("div").length; s++) {
                        document.getElementsByTagName("div")[s].style.borderColor = "black";
                        document.getElementsByTagName("div")[s].style.zIndex = this.id;
                    }//fors
                };
            }//ifagent
            cnt++;
        }//forstp
        tp = 0;
        cnt += 2;
        left += 12.5;
        clr = (clr == "black") ? "white" : "black";
    }//forstp
});

function poss(ele) {
    if (ele.innerHTML != "") {
        if (ele.innerHTML.match(/color:.+?;/)[0] == "color:"+turn+";") {
            ele.style.zIndex = 100;
            if (ele.innerHTML.match(/P/)) {
                var pass = true;
                if (ele.innerHTML.match(/color:blue;/)    && (ele.id - 1).toString().match(/^[1-8]{2}$/)) {
                    if (document.getElementById(ele.id - 1).innerHTML == "") {
                        document.getElementById(ele.id - 1).style.borderColor = "red";
                        document.getElementById(ele.id - 1).style.zIndex = 100;
                    } else {
                        pass = false;
                    }//ifinner
                } else if ((Number(ele.id) + 1).toString().match(/^[1-8]{2}$/)    && ele.innerHTML.match(/color:red;/)) {
                    if (document.getElementById(Number(ele.id) + 1).innerHTML == "") {
                        document.getElementById(Number(ele.id) + 1).style.borderColor = "red";
                        document.getElementById(Number(ele.id) + 1).style.zIndex = 100;
                    } else {
                        pass = false;
                    }//ifinner
                }//ifP
                if (ele.innerHTML.match(/color:blue;/) && ele.id.match(/7$/)    && document.getElementById(ele.id - 2).innerHTML == "" && pass) {
                    document.getElementById(ele.id - 2).style.borderColor = "red";
                    document.getElementById(ele.id - 2).style.zIndex = 100;
                } else if (ele.innerHTML.match(/color:red;/) && ele.id.match(/2$/)    && document.getElementById(Number(ele.id) + 2).innerHTML == "" && pass) {
                    document.getElementById(Number(ele.id) + 2).style.borderColor = "red";
                    document.getElementById(Number(ele.id) + 2).style.zIndex = 100;
                }//ifinit
                for (var stp = -11; stp <= 9; stp += 20) {
                    if (ele.innerHTML.match(/blue/)    && (Number(ele.id) + stp).toString().match(/^[1-8]{2}$/)) {
                        if (document.getElementById(Number(ele.id) + stp).innerHTML.match(/red/) || (enpassant == ele.id - 10 && stp == -11) || (enpassant == Number(ele.id) + 10 && stp == 9)) {
                            document.getElementById(Number(ele.id) + stp).style.borderColor = "red";
                            document.getElementById(Number(ele.id) + stp).style.zIndex = 100;
                        }//ifblue
                    } else if (ele.innerHTML.match(/red/)    && (ele.id - stp).toString().match(/^[1-8]{2}$/)) {
                        if (document.getElementById(ele.id - stp).innerHTML.match(/blue/) || (enpassant == Number(ele.id) + 10 && stp == -11) || (enpassant == ele.id - 10 && stp == 9)) {
                            document.getElementById(ele.id - stp).style.borderColor = "red";
                            document.getElementById(ele.id - stp).style.zIndex = 100;
                        }//ifred
                    }//ifPK
                }//forstp
            } else if (ele.innerHTML.match(/[RHBQK]/)) {
                if (ele.innerHTML.match(/R/)) {
                    list = [10, 1, -10, -1];
                } else if (ele.innerHTML.match(/H/)) {
                    list = [ 8, 12, 21, 19, -8, -12, -21, -19 ];
                } else if (ele.innerHTML.match(/B/)) {
                    list = [9, 11, -9, -11];
                } else {
                    list = [10, 1, 9, 11, -10, -1, -9, -11];
                }//iftype
                for (var stp = 0; stp < list.length; stp++) {
                    for (var st = 1; st < 8; st++) {
                        if ((ele.id - list[stp] * st).toString().match(/^[1-8]{2}$/)) {
                            if (document.getElementById(ele.id - list[stp] * st).innerHTML == "") {
                                document.getElementById(ele.id - list[stp] * st).style.borderColor = "red";
                                document.getElementById(ele.id - list[stp] * st).style.zIndex = 100;
                            } else if (document.getElementById(ele.id - list[stp] * st).innerHTML.match(/color:.+?;/)[0] != ele.innerHTML.match(/color:.+?;/)[0]) {
                                document.getElementById(ele.id - list[stp] * st).style.borderColor = "red";
                                document.getElementById(ele.id - list[stp] * st).style.zIndex = 100;
                                break;
                            } else {
                                break;
                            }//ifinner
                            if (ele.innerHTML.match(/[HK]/)) {
                                break;
                            }//ifKH
                        } else {
                            break;
                        }//ifvalid
                    }//forst
                }//forstp
            }//ifele
        }//ifturn
    }//ifinner
}//poss

function chk(el, chs) {
    if (chs.match(/[RHBQ]/)) {
        el.innerHTML = el.innerHTML.replace("P", chs);
        switch (chs) {
            case "R":
            el.innerHTML = el.innerHTML.replace(/>.+?(?=<)/, ">&#9820;");
            break;
            case "H":
            el.innerHTML = el.innerHTML.replace(/>.+?(?=<)/, ">&#9822;");
            break;
            case "B":
            el.innerHTML = el.innerHTML.replace(/>.+?(?=<)/, ">&#9821;");
            break;
            case "Q":
            el.innerHTML = el.innerHTML.replace(/>.+?(?=<)/, ">&#9819;");
            break;
        }//switchinner
    } else {
        chk(el, prompt("Convert to R, H, B or Q?"));
    }//ifvalid
    el.dispatchEvent(new Event("blur"));
}//chk

function move(e) {
    if (e.style.borderColor == "red") {
        if (sel.innerHTML.match(/red/) && enpassant == e.id - 1 && sel.innerHTML.match(/P/)) {
            document.getElementById(enpassant).innerHTML = "";
        } else if (sel.innerHTML.match(/blue/) && enpassant == Number(e.id) + 1 && sel.innerHTML.match(/P/)) {
            document.getElementById(enpassant).innerHTML = "";
        }//enpassant
        enpassant = 0;
        if (e.innerHTML != "" && sel.innerHTML != "") {
            if (e.innerHTML.match(/color:.+?;/)[0] != sel.innerHTML.match(/color:.+?;/)[0]) {
                if (e.innerHTML.match(/K/)) {
                    alert(turn+" won!");
                    document.body.innerHTML = document.body.innerHTML.replace(/<div.*?<\/div>/gm, "");
                    document.getElementById("log").innerHTML = "";
                    window.dispatchEvent(new Event("load"));
                    return;
                }//ifK
                e.innerHTML = sel.innerHTML;
                sel.innerHTML = "";
                document.getElementById("log").innerHTML = sel.id+" -> "+e.id;
                document.getElementById("log").style.color = turn;
            }//ifcolor
        } else {
            if (e.innerHTML.match(/K/)) {
                alert(turn+" lost!");
                document.body.innerHTML = document.body.innerHTML.replace(/<div.*?<\/div>/gm, "");
                document.getElementById("log").innerHTML = "";
                window.dispatchEvent(new Event("load"));
                return;
            }//ifK
            e.innerHTML = sel.innerHTML;
            sel.innerHTML = "";
            document.getElementById("log").innerHTML = sel.id+" -> "+e.id;
            document.getElementById("log").style.color = turn;
        }//ifthis
        turn = (turn == "blue") ? "red" : "blue";
        if (e.innerHTML.match(/P/) && e.id.match(/[18]$/)) {
            chk(e, prompt("Convert to R, H, B or Q?"));
        } else if (e.innerHTML.match(/P/) && sel.id.match(/[27]$/) && e.id.match(/[45]$/)) {
            enpassant = e.id;
        }//ifP
    } else {
        sel = e;
        setTimeout(poss, 400, e);
    }//ifsel
}//move