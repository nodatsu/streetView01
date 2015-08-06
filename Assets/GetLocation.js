#pragma strict

public var longitude: double;
public var latitude: double;
public var done: boolean = false;

function Start () {
	// First, check if user has location service enabled
	if (!Input.location.isEnabledByUser)
		return;

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
		done = true;
	}

	// Stop service if there is no need to query location updates continuously
	Input.location.Stop ();
}

function Update () {

}