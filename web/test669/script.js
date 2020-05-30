$(function(){
function test(words) { var n = words.split(" "); return n[n.length - 1]; }

    $("button").click(function(){
    var str=$("#con").val().trim()
    var cod=test(str)
    var lastIndex = str.lastIndexOf(" "); 
    var con=str.substring(0, lastIndex)
       $("body").append("&lt;option value='"+cod+"'&gt;"+con+"&lt;/option&gt;<br>")
        $("#con").val("");
        $("#code").val("");
        $("#con").focus()
    })
})

var str = "I want to remove the last word.";
var lastIndex = str.lastIndexOf(" ");

