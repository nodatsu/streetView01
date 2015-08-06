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

	// Sample
//	var longitude: double = 139.667431;
//	var latitude: double = 35.697408;
	// SHINMACHI
	var longitude: double = 140.741377;
	var latitude: double = 40.826271;

	var url: String = "http://maps.googleapis.com/maps/api/streetview?" + "size=" + width + "x" + height + "&location=" + latitude + "," + longitude + "&heading=" + heading + "&pitch=" + pitch + "&fov=90&sensor=false";
	print(url);
	
	var www: WWW = new WWW(url);

	yield www;
	this.renderer.material.mainTexture = www.texture;
}
