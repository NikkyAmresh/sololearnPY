$(function(){
        $("input").attr("maxlength","2");
        //$("input").attr("value","0");
        //$("#cal").attr("value","Calculate");
        var sum=0;
        $("#cal").click(function(){
        var h=$("#hindi").val();
        var e=$("#english").val();
        var m=$("#math").val();
        var s=$("#science").val();
        var u=$("#urdu").val();
        var c=$("#ssc").val();
            $("#memory").val(h+"+"+e+"+"+m+"+"+s+"+"+u+"+"+c);
    try{
        sum=eval($("#memory").val());
        calc(sum);
    }catch(e){
        alert("Invalid marks");
    }
        });
});
function calc(e){
    var  p=(e*100)/250;
    var  g=null;
    if(p>=81 && p<=100){
        g="A";
    }else{
        
    }
    $("#sum").html(e);
    $("#perc").html(p);
    $("#grade").html(g);
}