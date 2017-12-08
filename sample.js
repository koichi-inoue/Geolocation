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

window.onload = function() {
	longitude = document.getElementById('longitude');
	latitude = document.getElementById('latitude');
	accuracy = document.getElementById('accuracy');
	altitude = document.getElementById('altitude');
	altitudeAccuracy = document.getElementById('altitudeAccuracy');
	heading = document.getElementById('heading');
	speed = document.getElementById('speed');

	errorMessageElement = document.getElementById('error_message');

	geoLocationOptions = {
		enableHighAccuracy: true,
		timeout: 3000,
		maximumAge: 600000
	};
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

			longitude.innerText = longitudeText;
			latitude.innerText = latitudeText;
			accuracy.innerText = accuracyText;
			altitude.innerText = altitudeText;
			altitudeAccuracy.innerText = altitudeAccuracyText;
			heading.innerText = headingText;
			speed.innerText = speedText;

			console.log(new Date());

		},

		function(positionError){
			errorMessageElement.innerText = positionError.code + ': ' + positionError.message;
		},

		geoLocationOptions

	);

}

function stop(){
	navigator.geolocation.clearWatch(watchID);
	alert('監視を停止しました。');
}
