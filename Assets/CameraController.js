#pragma strict

function Start () {

}

function Update () {
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