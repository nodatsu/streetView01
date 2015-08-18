#pragma strict

var actionState: int = 0;
var actionStateChanger = 1;

function Start () {
	this.GetComponent(UI.Text).text = "UnityChanAction: Hidden";
}

function Update () {
}

function ToggleText() {
	actionState += actionStateChanger;
	if (actionState > 2) {
		actionState = 1;
		actionStateChanger *= -1;
	}
	else if (actionState < 0) {
		actionState = 1;
		actionStateChanger *= -1;
	}

	switch (actionState) {
		case 1:
			this.GetComponent(UI.Text).text = "UnityChanAction: Walking";
			break;
		case 2:
			this.GetComponent(UI.Text).text = "UnityChanAction: Running";
			break;
		default:
			this.GetComponent(UI.Text).text = "UnityChanAction: Hidden";
			break;
	}
}