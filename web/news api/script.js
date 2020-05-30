$(function(){
function news(country,cat,publisher){
    $("#list").html("Loading...");
    if(cat!=null){
        cat='&category='+cat
    }else{cat=""}
  var url='https://newsapi.org/v2/top-headlines?country='+country+cat+'&apiKey=f6328c5209564494b19fe3a198a266e0';
$.ajax({
        url:url,
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
        $("#list").html("");
            
            for(var i=0;i<data["articles"].length;i++){
           $("#list").append("<img class='thmb' src="+data['articles'][i]['urlToImage']+"><br><b>"+data['articles'][i]['title']+"</b><br><small>by"+data['articles'][i]['author']+"<br>"+data['articles'][i]['publishedAt']+"<br></small><div class='less' onclick=h(this)><div class='content'>"+data['articles'][i]['content']+"<br></div><small>Read more..</small></div><hr>")
        }}
        
})}
    $("#country").on("change",function(){
       news($("#country").val(),$("#cat").val(),"") 
    })
    $("#cat").on("change",function(){
       news($("#country").val(),$("#cat").val(),"") 
    })
    $(".less").click(function(){
        $(this).children().toggle(200);
    })
    news("us","technology","")
})
function h(a){
    $(a).children().toggle(200);
}