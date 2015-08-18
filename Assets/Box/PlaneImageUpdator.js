#pragma strict

var heading: double;
var pitch: double;

function Start () {
//	StartCoroutine(updateTexture());
}

function Update () {

}

function updateTexture (longitude, latitude) { 
	var width: int = 640;
	var height: int = 480;
	
	var url: String = "http://maps.googleapis.com/maps/api/streetview?" + "size=" + width + "x" + height + "&location=" + latitude + "," + longitude + "&heading=" + heading + "&pitch=" + pitch + "&fov=90&sensor=false";	
	var www: WWW = new WWW(url);

	yield www;

	this.GetComponent(Renderer).material.mainTexture = www.texture;
}
