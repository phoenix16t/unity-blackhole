#pragma strict

var pushBackForce: float;
var player: GameObject;
var boundary: GameObject;
private var boundaryScript: GameZoneController;

function Start() {
	boundaryScript = boundary.GetComponent(GameZoneController);
}

function Update() {
	if(boundaryScript.isInGameZone === false) {
		var pushBack = (player.transform.position - boundary.transform.position) * -pushBackForce;
		player.gameObject.rigidbody.AddForce(pushBack);
	}
}

function OnTriggerExit(other: Collider) {
	Destroy(other.gameObject);
}