function r(s) {
    return s.replace(/body/g, '#OUTPUT');
}
$("#OUTPUT").css("z-index",5)&&$(".vr").hide();
 $(function(){
    $(".OUTPUT").click(function(){
    $(".vr").hide();
    $("#OUTPUT").html(r("<style>"+$("#CSS").val()+"</style>"));
     $("#OUTPUT").append($("#HTML").val());
    setTimeout(function(){$("script").html($("#JS").val());
    $("script").html("");
    },500);
  });
});    
function hidee(){
   $("#HTML").css("z-index","4");
   $("#CSS").css("z-index","4");
   $("#JS").css("z-index","4");
   $("#OUTPUT").css("z-index","4");
   $(".HTML").css("filter","invert(20%)");
   $(".CSS").css("filter","invert(20%)");
   $(".JS").css("filter","invert(20%)");
   $(".OUTPUT").css("filter","invert(20%)")
}
function tab(e){
   hidee();
  var h="#"+e;
  var k="."+e;
   $(k).css("filter","invert(0%)");
   $(h).css("z-index","5");
   
   $(".vr").show();
}
