#pragma strict

var heading: double;
var pitch: double;

function Start () {
	StartCoroutine(updateTexture());
}

function Update () {

}

function updateTexture () { 
	var width: int = 640;
	var height: int = 480;

	var longitude: double;
	var latitude: double;

	if (Application.platform == RuntimePlatform.Android) {
		var loc: GetLocation = this.transform.parent.GetComponent(GetLocation);

		while (!loc.done) {
			yield;
		}
        
		longitude = loc.longitude;
		latitude = loc.latitude;
	}
	else if (Application.platform == RuntimePlatform.OSXEditor) {
		// Sample
		// var longitude: double = 139.667431;
		// var latitude: double = 35.697408;
		// SHINMACHI
		longitude = 140.741377;
		latitude = 40.826271;
	}
	
	var url: String = "http://maps.googleapis.com/maps/api/streetview?" + "size=" + width + "x" + height + "&location=" + latitude + "," + longitude + "&heading=" + heading + "&pitch=" + pitch + "&fov=90&sensor=false";	
	var www: WWW = new WWW(url);

	yield www;

	this.GetComponent(Renderer).material.mainTexture = www.texture;
}
