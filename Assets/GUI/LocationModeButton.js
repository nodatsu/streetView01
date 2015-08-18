#pragma strict

var mode: boolean = false;

function Start () {
	transform.Find("Text").gameObject.GetComponent(UI.Text).text = "LocationMode: FIX";

	if (Application.platform != RuntimePlatform.Android) {
		GetComponent(UI.Button).interactable = false;
	}
}

function ToggleText() {
	mode = !mode;

	if (mode) {
		transform.Find("Text").gameObject.GetComponent(UI.Text).text = "LocationMode: GPS";
	}
	else {
		transform.Find("Text").gameObject.GetComponent(UI.Text).text = "LocationMode: FIX";
	}
}