#pragma strict

public var longitude: double;
public var latitude: double;
public var done: boolean = false;
public var locationMode: boolean = false;

function Start() {
	updatePlanes();
}

function changeLocationMode() {
	locationMode = !locationMode;

	updatePlanes();
}
	
function updatePlanes() {
	getLocation();
	
	while (!done) {
		yield;
	}
	
	for (var c: Transform in transform) {
		c.GetComponent(PlaneImageUpdator).updateTexture(longitude, latitude);
	}

	done = false;	
}

function getLocation () {
	if (locationMode && Application.platform == RuntimePlatform.Android) {
		StartCoroutine(getFromGPS());
	}
	else {
		// Sample
		// var longitude: double = 139.667431;
		// var latitude: double = 35.697408;
		// SHINMACHI
		longitude = 140.741377;
		latitude = 40.826271;
		
		done = true;
	}
}

function getFromGPS () {
	// First, check if user has location service enabled
	if (!Input.location.isEnabledByUser) {
		print ("Input.location disabled");
		return;
	}

	// Start service before querying location
	Input.location.Start ();

	// Wait until service initializes
	var maxWait : int = 60;
	while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0) {
		yield WaitForSeconds (1);
		maxWait--;
	}
	// Service didn't initialize in maxWait seconds
	if (maxWait < 1) {
		print ("Timed out");
		return;
	}

	// Connection has failed
	if (Input.location.status == LocationServiceStatus.Failed) {
		print ("Unable to determine device location");
		return;
	}
	// Access granted and location value could be retrieved
	else {
		longitude = Input.location.lastData.longitude;
		latitude = Input.location.lastData.latitude;
		print("Location: " + longitude + ", " + latitude);
		done = true;
	}

	// Stop service if there is no need to query location updates continuously
	Input.location.Stop ();
}
