(function( $ ) {
    $.fn.showhtml = function() {
    $(this).html( "<pre>" +convert($(this).html())+     "<pre>" );
    return this;
};
}( jQuery ));
$(function(){
$( "html" ).showhtml();
});
function convert(e) {
    return e.replace(/</g, '&lt;');
}
//js comment