#pragma strict

var rr: float = 5.0;
var theta: float = 0.0;

var motion: int = 0;

function Start () {
	StartCoroutine(Loop());
}

function Update () {
	transform.position.x = rr * Mathf.Sin(theta);
	transform.position.z = rr * Mathf.Cos(theta);
	transform.rotation = Quaternion.Euler(0, theta * Mathf.Rad2Deg + 90, 0);

	switch (motion) {
		case 0:
			this.GetComponent(Animator).SetBool("isRunning", false);
			theta += 0.003;
			break;
		case 1:
			this.GetComponent(Animator).SetBool("isRunning", true);
			theta += 0.012;
			break;
	}

	if (theta >= Mathf.PI * 4) {
		theta -= Mathf.PI * 4;
	}
}

function Loop () {
	while (true) {
		yield WaitForSeconds(5);
		motion += 1;
		motion = motion % 2;
	}
}
