#pragma strict

function Awake () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
}

function Start () {
	if (Application.platform == RuntimePlatform.Android) {
		Input.gyro.enabled = true;
	}
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		var gyro: Quaternion = Input.gyro.attitude;
		this.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-gyro.x, -gyro.y, gyro.z, gyro.w));
	}
	else if (Application.platform == RuntimePlatform.OSXEditor) {
		if (Input.GetKey(KeyCode.UpArrow)) {
			this.transform.Rotate(Vector3.right, -1);
		}
		if (Input.GetKey(KeyCode.DownArrow)) {
			this.transform.Rotate(Vector3.right, 1);
		}
		if (Input.GetKey(KeyCode.LeftArrow)) {
			this.transform.Rotate(Vector3.up, -1, Space.World);
		}
		if (Input.GetKey(KeyCode.RightArrow)) {
			this.transform.Rotate(Vector3.up, 1, Space.World);
		}
		if (Input.GetKey(KeyCode.Space)) {
			this.transform.rotation = Quaternion.Euler(0, 0, 0);
		}
	}
}