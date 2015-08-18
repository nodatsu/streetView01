#pragma strict

var rr: float = 5.0;
var theta: float = 0.0;

var actionState: int = 0;
var actionStateChanger: int = 1;

function Start () {
	this.gameObject.SetActive(false);
}

function Update () {
	transform.position.x = rr * Mathf.Sin(theta);
	transform.position.z = rr * Mathf.Cos(theta);
	transform.rotation = Quaternion.Euler(0, theta * Mathf.Rad2Deg + 90, 0);

	switch (actionState) {
		case 1:
			this.GetComponent(Animator).SetBool("isRunning", false);
			theta += 0.003;
			break;
		case 2:
			this.GetComponent(Animator).SetBool("isRunning", true);
			theta += 0.012;
			break;
		default:
			break;
	}

	if (theta >= Mathf.PI * 4) {
		theta -= Mathf.PI * 4;
	}
}

function ChangeAction() {
	actionState += actionStateChanger;
	if (actionState > 2) {
		actionState = 1;
		actionStateChanger *= -1;
	}
	else if (actionState < 0) {
		actionState = 1;
		actionStateChanger *= -1;
	}
	
	if (actionState == 0) {
		this.gameObject.SetActive(false);
	}
	else {
		this.gameObject.SetActive(true);
	}
}