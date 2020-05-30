function api(q, n) {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://api-ipc.herokuapp.com/api/v1/" + q,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        },
        success: function(data) {
            switch (n) {
                case 1:
                    for (var i = 0; i < data['data']['result'].length; i++) {
                        $("#fill-chap").append("<li><a onclick=chapter('" + data['data']['result'][i]['number'] + "') href=#> Chapter " + data['data']['result'][i]['number'] + " </a> (section " + data['data']['result'][i]['from'] + " )- <small>" + data['data']['result'][i]['title'] + "</small></li><br>")
                    }
                    break;
                case 2:
                    for (var i = 0; i < data['data']['result'].length; i++) {
                        $("#fill-sec").append("<li><a onclick='section(" + data['data']['result'][i]['number'] + ")' href='#'> Section " + data['data']['result'][i]['number'] + "</a>-<small> <a href='#' onclick=chapter('" + data['data']['result'][i]['chapter'] + "')>  (Chapter " + data['data']['result'][i]['chapter'] + " ) </a></small></li>")
                    }
                    break;
                case 3:
                    $("#sec").append("<h3>Section " + data['data']['number'] + "</h3><h5 class=text-center><a onclick=chapter('" + data['data']['result'][0]['chapter'] + "') href='#'>Chapter  " + data['data']['result'][0]['chapter'] + "</a><small> (Section " + data['data']['result'][0]['from'] + " )</small></h5>" + data['data']['result'][0]['title'] + "<hr><p class=text-justify> " + data['data']['result'][0]['text'] + " </p>")
                    break;
                case 4:
                    $("#chap").html("<h3 class=text-center>Chapter " + data['data']['number'] + "<small> (Section" + data['data']['from'] + ")</small></h3>" + data['data']['description'] + "<p><hr>")
                    for (var i = 0; i < data['data']['result'].length; i++) {
                        $("#chap").append("<h5><a onclick=section('" + data['data']['result'][i]['number'] + "') href=#>Section" + data['data']['result'][i]['number'] + "</a></h5><p class=text-justify>" + data['data']['result'][i]['text'] + "</p><hr>")
                    }
                    break;
                case 5:
                    $("#sn").html(data['data']['result'].length + " results found with KeyWord '" + data['data']['q'] + "'")
                    for (var i = 0; i < data['data']['result'].length; i++) {
                        $("#fill-search").append("<p><a onclick=section('" + data['data']['result'][i]['number'] + "') href=#>Section" + data['data']['result'][i]['number'] + " - </a>" + data['data']['result'][i]['title'] + "</p><hr>")
                    }
                    break;
            }
        }
    })
}

function section(n) {
    api("section/" + n, 3)
    $("#load").html($("#section").html())
    $("#main").hide()
}

function chapter(n) {
    api("chapter/" + n, 4)
    $("#load").html($("#chapter").html())
    $("#main").hide()
}
$(function() {
    $("#home-btn").click(function() {
        $("#load").html("")
        $("#main").show()
    })
    $("#chapter-btn").click(function() {
        api("chapter/", 1)
        $("#load").html($("#chapters").html())
        $("#main").hide()
    })
    $("#section-btn").click(function() {
        api("section/", 2)
        $("#load").html($("#sections").html())
        $("#main").hide()
    })
    $("#search-btn").click(function() {
        api("search/" + $("#q").val(), 5)
        $("#load").html($("#search").html())
        $("#main").hide()
    })
    $("#credit-btn").click(function() {
        $("#load").html($("#credit").html())
        $("#main").hide()
    })
})