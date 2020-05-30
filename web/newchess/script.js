$(function(){
var pieces=["♚","♛","♝","♞","♜","♟"];
var pname=["King","Queen","Bishop","Knight","Rook","Pawn"]
var color=["Black","White"];
    (function( $ ) {
        $.fn.black = function() {
       // $(this).addClass("black");
        return this;
    };
      $.fn.white = function() {
       // $(this).addClass("white");
        return this;
    };
         $.fn.find_piece = function() {
            var piece=$(this).html();
            var pcolor="";
            if($(this).attr("class")[4]=="w"){
                pcolor=color[1];
            }else{
                if($(this).attr("class")[4]=="b"){
                    pcolor=color[0];;
                }else{
                pcolor="";
                }
            }
            var newp="Blank";
            for(var i=0;i<pieces.length;i++){
                if(piece==pieces[i]){
                    newp=pname[i];
                    return pcolor+" "+newp;
                    break;
                }
            }
            return pcolor+" "+newp;
    };
        $.fn.validmoves = function() {
        function king(){
            console.log(this.html())
        }
    };
    }( jQuery ));
    
function Moves(id){
    var column=id[0]
    var raw=id[1]
    var piece=$("#"+id).find_piece();
    //console.log(piece.trim())
    $("#"+id).validmoves(column,raw);
    move(id)
}
var lastp=new Array();
function move(id){
    var cdp=$("#"+id);
    if(cdp.find_piece()!=" Blank"){
        lastp.push(cdp.html());
        lastp.push(id);
        lastp.push(cdp.attr("class")[4]+cdp.attr("class")[5]);
    }else{
        cdp.html(lastp[0]);
        cdp.addClass(lastp[2])
        $("#"+lastp[1]).html("")
        $("#"+lastp[1]).removeClass(lastp[2])
        lastp=[];
    }
}
$("td").click(function(){
    Moves(this.id)
});
});