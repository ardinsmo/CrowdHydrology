
var theResult,theResult1,theResult2,theResult3,theResult4;
var TestObject
var username;

var lat,lon;
var map;
var speed1,speed2,speed3,speed4,speed5,speed6;
function getLocation()
  {
  if (navigator.geolocation)
    {
        //alert("location works");
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
    //alert("setting...");
    thePosition=position;
 lat=position.coords.latitude;
  lon=position.coords.longitude;
  //alert("finished "+lat+" "+lon);
  initialize();
  }


function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(lat, lon),
          zoom: 12
        };
         map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
         //alert("map initalized");
        
        
}
      
google.maps.event.addDomListener(window, 'load', getLocation);



