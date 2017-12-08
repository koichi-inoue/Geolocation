var longitude;
var latitude;
var accuracy;
var altitude;
var altitudeAccuracy;
var heading;
var speed;
var errorMessageElement;
var geoLocationOptions;
var watchID;

function StampTime(){
	var t = new Date();
	var hh = t.getHours(); if(hh<10){ hh = "0"+hh;}
	var mm = t.getMinutes(); if(mm<10){ mm = "0"+mm;}
	var ss = t.getSeconds(); if(ss<10){ ss = "0"+ss;}
	return hh+ ':' + mm + ':' + ss;
}

window.onload = function() {
	longitude = document.getElementById('longitude');
	latitude = document.getElementById('latitude');
	accuracy = document.getElementById('accuracy');
	altitude = document.getElementById('altitude');
	altitudeAccuracy = document.getElementById('altitudeAccuracy');
	heading = document.getElementById('heading');
	speed = document.getElementById('speed');

	messageElement = document.getElementById('message');

	geoLocationOptions = {
		enableHighAccuracy: true,
		timeout: 3000,
		maximumAge: 600000
	};

	document.getElementById('timeInfo').innerText = '[ ' + StampTime() + ' ]';
}

function start(){

	watchID = navigator.geolocation.watchPosition(

		function(position){
			var longitudeText = position.coords.longitude + '';
			var latitudeText = position.coords.latitude + '';
			var accuracyText = position.coords.accuracy + '';
			var altitudeText = position.coords.altitude + '';
			var altitudeAccuracyText = position.coords.altitudeAccuracy + '';
			var headingText = position.coords.heading + '';
			var speedText = position.coords.speed + '';

			longitude.innerText = longitudeText.substring(0, 12);
			latitude.innerText = latitudeText.substring(0, 12);
			accuracy.innerText = accuracyText.substring(0, 12);
			altitude.innerText = altitudeText.substring(0, 12);
			altitudeAccuracy.innerText = altitudeAccuracyText.substring(0, 12);
			heading.innerText = headingText.substring(0, 12);
			speed.innerText = speedText.substring(0, 12);

			document.getElementById('timeInfo').innerText = '[ ' + StampTime() + ' ]';
		},

		function(positionError){
			messageElement.innerText = positionError.code + ': ' + positionError.message;
		},

		geoLocationOptions

	);

	alert('GPS Running');

}

function stop(){
	navigator.geolocation.clearWatch(watchID);
	alert('GPS Stopped');
}
