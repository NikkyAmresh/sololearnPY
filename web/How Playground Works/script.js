(function( $ ) {
    $.fn.showhtml = function() {
    $(this).html( "<pre>" +convert("<!DOCTYPE html>"+"\n<html>\n"+$(this).html()+"\n</html>")+"<pre>");
    return this;
};
}( jQuery ));
$(function(){
    $("html").showhtml();
});
function convert(e) {
    return e.replace(/</g, '&lt;').replace(/&lt;style id="style-from-editor">/g, "<font color=red>&lt;style id='<b>style-from-editor</b>'&gt;</font>").replace(/&lt;script id="script-from-editor">/g, "<font color=green>\n&lt;script id='<b>script-from-editor</b>'>\n</font>");
}
//js comment
