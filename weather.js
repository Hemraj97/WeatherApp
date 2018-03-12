var Geo={};
var lat;
var long;
var Weather;
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}

function error() {
alert("That's weird! We couldn't find you!");
}


function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
       lat = Geo.lat;
       long = Geo.lng;
       console.log(Geo.lat,Geo.lng);

        Weather = "http://api.wunderground.com/api/549b298a6b26a3c5/forecast/geolookup/conditions/q/"+lat+","+long+".json";
       
$.ajax({
url : Weather,
dataType : "json",
success : function(data) {
	console.log(data);
var location =data['current_observation']['display_location']['full'];
var temp = data['current_observation']['temp_c'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];
var humidity = data['current_observation']['relative_humidity'];
var weekday0 = data['forecast']['simpleforecast']['forecastday'][0]['date']['weekday'];
var weekday1 = data['forecast']['simpleforecast']['forecastday'][1]['date']['weekday'];
var weekday2 = data['forecast']['simpleforecast']['forecastday'][2]['date']['weekday'];
var weekday3 = data['forecast']['simpleforecast']['forecastday'][3]['date']['weekday'];
var conditions0 = data['forecast']['simpleforecast']['forecastday'][0]['conditions'];
var conditions1 = data['forecast']['simpleforecast']['forecastday'][1]['conditions'];
var conditions2 = data['forecast']['simpleforecast']['forecastday'][2]['conditions'];
var conditions3 = data['forecast']['simpleforecast']['forecastday'][3]['conditions'];
var temp0 = data['forecast']['simpleforecast']['forecastday'][0]['high']['celsius'];
var temp1 = data['forecast']['simpleforecast']['forecastday'][1]['high']['celsius'];
var temp2 = data['forecast']['simpleforecast']['forecastday'][2]['high']['celsius'];
var temp3 = data['forecast']['simpleforecast']['forecastday'][3]['high']['celsius'];
var day0 = data['forecast']['simpleforecast']['forecastday'][0]['date']['day'];
var day1 = data['forecast']['simpleforecast']['forecastday'][1]['date']['day'];
var day2 = data['forecast']['simpleforecast']['forecastday'][2]['date']['day'];
var day3 = data['forecast']['simpleforecast']['forecastday'][3]['date']['day'];
var month0 = data['forecast']['simpleforecast']['forecastday'][0]['date']['monthname'];
var month1 = data['forecast']['simpleforecast']['forecastday'][1]['date']['monthname'];
var month2 = data['forecast']['simpleforecast']['forecastday'][2]['date']['monthname'];
var month3 = data['forecast']['simpleforecast']['forecastday'][3]['date']['monthname'];
var icon0 = data['forecast']['simpleforecast']['forecastday'][0]['icon_url'];
var icon1 = data['forecast']['simpleforecast']['forecastday'][1]['icon_url'];
var icon2 = data['forecast']['simpleforecast']['forecastday'][2]['icon_url'];
var icon3 = data['forecast']['simpleforecast']['forecastday'][3]['icon_url'];
day0 = day0+" "+month0+","+weekday0;
day1 = day1+" "+month1+","+weekday1;
day2 = day2+" "+month2+","+weekday2;
day3 = day3+" "+month3+","+weekday3;
console.log(temp0);
$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#wind').html(wind);
//filling the image src attribute with the image url
$('#img').attr('src', img);
$('#humidity').html(humidity);
$('#day0').html(day0);
$('#img0').attr('src', icon0);
$('#temp0').html(temp0);
$('#conditions0').html(conditions0);
$('#day1').html(day1);
$('#img1').attr('src', icon1);
$('#temp1').html(temp1);
$('#conditions1').html(conditions1);
$('#day2').html(day2);
$('#img2').attr('src', icon2);
$('#temp2').html(temp2);
$('#conditions2').html(conditions2);
$('#day3').html(day3);
$('#img3').attr('src', icon3);
$('#temp3').html(temp3);
$('#conditions3').html(conditions3);
}
});
      
}
console.log(lat);
//console.log(Geo.lat,Geo.long);
//var key = ‘549b298a6b26a3c5’;
lat = 18.95403;
long = 72.821005;
//console.log(Weather);
//var Weather = "http://api.wunderground.com/api/549b298a6b26a3c5/forecast/geolookup/conditions/q/"+lat+","+long+".json";
