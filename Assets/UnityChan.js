#pragma strict

var rr: float = 5.0;
var theta: float = 0.0;
var speed: float = 0.0;

function Start () {

}

function Update () {
	transform.position.x = rr * Mathf.Sin(theta);
	transform.position.z = rr * Mathf.Cos(theta);
	transform.rotation = Quaternion.Euler(0, theta * Mathf.Rad2Deg + 90, 0);
	theta += speed;
	if (theta >= Mathf.PI * 4) {
		theta -= Mathf.PI * 4;
	}

	if (theta < Mathf.PI * 2) {
		this.GetComponent(Animator).SetBool("isRunning", false);
		speed = 0.003;
	}
	else {
		this.GetComponent(Animator).SetBool("isRunning", true);
		speed = 0.012;
	}
}