var row, col, s, dat, txt, cols = [];

window.onload = function() {
    if (txt != null) {
        dat = txt;
        s = true;
        exp();
    }//txtif
};

function exe() {
    document.getElementsByTagName("table")[0].innerHTML = "<thead><caption/></thead><tbody/><tfoot/>";
    tab(document.getElementsByTagName("textarea")[0].value);
}//exe

function tab(txt) {
    var head = txt.match(/^\((?!\\)(.|\n)*?(?=\)(?!\\))/m);
    if (head != null) {
        head = head[0].replace(/^\(/m, "").match(/(^|~)(?!\\)(.|\n)*?(?=(~(?!\\)|$))/gm);
        for (var stp = 0; stp <= head.length - 1; stp++) {
            document.getElementsByTagName("caption")[0].appendChild(th = document.createElement("th"));
            th.innerHTML = head[stp].replace(/(^~|\\(?!\\))/gm, "");
        }//thfor
    }//thif
    txt = txt.replace(/^\((?!\\)(.|\n)*?\)(?!\\)/m, "");
    var rows = txt.match(/(^|\|(?!\\))(.|\n)*?(?=(\|(?!\\)|$))/gm);
    if (rows != null) {
        for (var stp = 0; stp <= rows.length - 1; stp++) {
            rows[stp] = rows[stp].replace(/^\|/m, "");
            document.getElementsByTagName("tbody")[0].appendChild(row = document.createElement("tr"));
            cols[stp] = rows[stp].match(/:(?!\\)(.|\n)*/m);
            rows[stp] = rows[stp].replace(/(:(?!\\)(.|\n)*|\\(?!\\))/gm, "");
            row.innerHTML = rows[stp];
            if (cols[stp] != null) {
                cols[stp] = cols[stp][0].replace(/(^:|\\(?!\\))/gm, "").match(/(^|~(?!\\))(.|\n)*?(?=(~(?!\\)|$))/gm);
                for ( var st = 0; st <= cols[stp].length - 1; st++) {
                    document.getElementsByTagName("tr")[stp].appendChild(col = document.createElement("td"));
                    cols[stp][st] = cols[stp][st].replace(/^~/m, "");
                    col.innerHTML = cols[stp][st];
                }//colsfor
            }//colsif
        }//rowsfor
    }//rowsif
}//tab

function exp() {
    if (!s) {
        s = true;
        dat = document.getElementsByTagName("textarea")[0].value;
        document.getElementsByTagName("textarea")[0].value = "<table border='3%'>"    + document.getElementsByTagName("table")[0].innerHTML.replace(/(<thead><\/thead>|<thead.?\/>|<tfoot><\/tfoot>|<tfoot.?\/>|<caption><\/caption>|<caption.?\/>)/gm,     "").replace(/<tr>((.|\n)*?)(?=(<td>|<\/tr>))/gm, "<tr><td>$1</td>").replace(/(<tr><\/tr>|<td><\/td>)/gm, "") + "</table>";
    } else if (typeof dat != "undefined") {
        s = false;
        document.getElementsByTagName("textarea")[0].value = dat;
        exe();
    }//sif
}//exp