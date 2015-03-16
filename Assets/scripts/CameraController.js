#pragma strict

var zoomLevel: float;
var player: GameObject;

function LateUpdate () {
	transform.position = player.transform.position;
	transform.position.y += zoomLevel;
}