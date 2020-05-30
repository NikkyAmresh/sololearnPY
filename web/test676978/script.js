$(function(){

firebase.auth().signInAnonymously().catch(function(e) {
  alert(e.message);
});
    $("#reset").click(function(){
    var surl=$("#surl").val();
    var purl=$("#iurl").val();
    var sname=$("#sname").val();
       add(sname,surl,purl);
       $("#surl").val("");
       $("#iurl").val("");
       $("#sname").val("")
    })
   display_data();
});
function add(song,url,pic_url) {
var data={
    song_name: song,
    s_url: url,
    picurl : pic_url
  }
  firebase.database().ref('songs/').push(data);
}
function display_data(){
    firebase.database().ref('songs/').on("child_added", function(snap) {
  var songss = snap.val();
  var songname=songss.song_name;
var song_url=songss.s_url;
var pic=songss.picurl;
  $("#list").append("name : " + songname+"<br>");
   $("#list").append("song_url : " + song_url+"<br>");
   $("#list").append("pic : " + pic+"<br><hr>" );
});
}