$(function(){
$("ul").on("click", "li", function() { 
$(this).toggleClass("completed"); }) 
$("ul").on("click", "span", function() { 
$(this).parent().fadeOut(500, function() { 
$(this).remove() }); event.stopPropagation(); }) 
$("Input[type='text']").keypress(function() { if (event.which === 13) { 
var todoText = $(this).val(); $(this).val(""); $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li >"); } })
})