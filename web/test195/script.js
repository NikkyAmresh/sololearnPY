// Created by Rushikesh

var cc = prompt("Enter your country calling code \n\n example: india's country calling code is +91");

$(function(){
    $(".btn-no").click(function(){
        $("#number").val($("#number").val()+$(this).children("h3").text());
    })
    $(".btn-back").click(function(){
        $("#number").val($("#number").val().slice(0,-1))
    })
    $(".btn-call").click(function(){
        $("#call").attr("href",'tel:'+$("#number").val())
    })
    $("#wacall").click(function(){
        $("#wacall").attr("href",'https://wa.me/'+$("#number").val())
    })
    
})


