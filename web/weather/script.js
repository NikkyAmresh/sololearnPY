var db={'cod': '200', 'message': 0.0093, 'cnt': 40, 'list': [{'dt': 1561928400, 'main': {'temp': 306.13, 'temp_min': 306.13, 'temp_max': 307.5, 'pressure': 994.45, 'sea_level': 994.45, 'grnd_level': 989.26, 'humidity': 46, 'temp_kf': -1.37}, 'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}], 'clouds': {'all': 0}, 'wind': {'speed': 4.03, 'deg': 103.298}, 'sys': {'pod': 'n'}, 'dt_txt': '2019-06-30 21:00:00'}, {'dt': 1561939200, 'main': {'temp': 305.78, 'temp_min': 305.78, 'temp_max': 306.813, 'pressure': 995.2, 'sea_level': 995.2, 'grnd_level': 989.95, 'humidity': 49, 'temp_kf': -1.03}, 'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}], 'clouds': {'all': 0}, 'wind': {'speed': 3.71, 'deg': 95.502}, 'sys': {'pod': 'd'}, 'dt_txt': '2019-07-01 00:00:00'}], 'city': {'id': 1260086, 'name': 'Patna', 'coord': {'lat': 25.6, 'lon': 85.1167}, 'country': 'IN', 'population': 1599920, 'timezone': 19800}}
var data={'coord': {'lon': 85.18, 'lat': 25.61}, 'weather': [{'id': 701, 'main': 'Mist', 'description': 'mist', 'icon': '50d'}], 'base': 'stations', 'main': {'temp': 300.15, 'pressure': 997, 'humidity': 100, 'temp_min': 300.15, 'temp_max': 300.15}, 'visibility': 2000, 'wind': {'speed': 3.8, 'deg': 89.064}, 'clouds': {'all': 40}, 'dt': 1561942262, 'sys': {'type': 1, 'id': 9129, 'message': 0.0062, 'country': 'IN', 'sunrise': 1561937489, 'sunset': 1561986855}, 'timezone': 19800, 'id': 1260086, 'name': 'Patna', 'cod': 200}

$(function(){
$("#city").html(data["name"]+"["+data["sys"]["country"]+"]")
var time= new Date();
var day=["Sun","Mon","Sun","Tue","Wed","Thu","Fri","Sat"]
var month=["January","February","March","April","May","Jun","July","August","September","November","December"]
$("#time").html(day[time.getDay()]+" "+time.getDate()+" "+month[time.getMonth()]+" "+time.getHours()+":"+time.getMinutes())
$("#icon").attr("src","https://openweathermap.org/img/wn/"+data['weather'][0]['icon']+".png")
$("#temp").html(data["main"]["temp"]-273.15+"°")
$("#min").html(data["main"]["temp_min"]-273.15+"°")
$("#max").html(data["main"]["temp_max"]-273.15+"°")
$("#cncl").html(data["weather"][0]["main"])
$("#hum").html(data["main"]["humidity"]+"%")
$("#prs").html(data["main"]["pressure"]+"hpa")
var rise=new Date(data["sys"]["sunrise"])
var sset=new Date(data["sys"]["sunset"])
$("#rise").html(rise.toLocaleTimeString())
$("#set").html(sset.toLocaleTimeString())
for(var i=0;i<db["list"].length;i++){
    var dt=month[Math.floor(db["list"][i]["dt_txt"].slice(5,7))-1]+"/"+db["list"][i]["dt_txt"].slice(8,11)
var tm=db["list"][i]["dt_txt"].slice(11,16)
var tem=Math.floor(db['list'][i]['main']['temp']-273.15)+"°"
var m=db['list'][i]['weather'][0]["main"]
var icon=db['list'][i]['weather'][0]["icon"]
var hum=db['list'][i]['main']['humidity']
$("#tmtd").append("<td>"+tm+"<br>"+dt+"</td>")
}
for(var i=0;i<db["list"].length;i++){
    var dt=month[Math.floor(db["list"][i]["dt_txt"].slice(5,7))-1]+"/"+db["list"][i]["dt_txt"].slice(8,11)
var tm=db["list"][i]["dt_txt"].slice(11,16)
var tem=Math.floor(db['list'][i]['main']['temp']-273.15)+"°"
var m=db['list'][i]['weather'][0]["main"]
var icon=db['list'][i]['weather'][0]["icon"]
var hum=db['list'][i]['main']['humidity']
$("#mn").append("<td>"+m+"</td>")
}
for(var i=0;i<db["list"].length;i++){

var tem=Math.floor(db['list'][i]['main']['temp']-273.15)+"°"
var icon=db['list'][i]['weather'][0]["icon"]
$("#ic").append("<td><img src='https://openweathermap.org/img/wn/"+icon+"@2x.png'>"+tem+"</td>")
}
for(var i=0;i<db["list"].length;i++){
var hum=db['list'][i]['main']['humidity']
$("#h").append("<td class=h>humidity<br>"+hum+"%</td>")
}

$("#sicn").click(function(){
    $("#form").show(200);
    $(this).hide()
    
})
$("#sbox").on("keydown",function(){
    search(this.value)
})
function search(q){
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://weather-app-python.herokuapp.com/search/"+q,
        success:function(data){
            $("#slist").html("")
            for(var i=0;i<data.length;i++){
                $("#slist").append("<option value='"+data[i]["id"]+">"+data[i]["id"]+"["+data[i]['ct']+"]"+"</option>")
            }
            $("#sbox").attr('list','slist')
        }, error(e){
        //    alert(JSON.stringify(e)) 
   } 
    })
}
$("body").click(function(){
   // $("#sbox").hide(200)
    
})
$("#can").click(function(){
    $(this).parent().hide()
    $("#sicn").show()
})
$("#sbmit").click(function(){
    window.href.location="/city/"+$("#sbox").val()
})

})