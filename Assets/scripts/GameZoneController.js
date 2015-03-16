#pragma strict

var isInGameZone: boolean;

private var halo: SpriteRenderer;

function Start() {
	isInGameZone = true;
	halo = transform.Find("halo").GetComponent(SpriteRenderer);
}

function OnTriggerEnter(other: Collider) {
	if(other.tag == 'Player') {
		isInGameZone = true;
		halo.enabled = false;
	}
}

function OnTriggerExit(other: Collider) {
	if(other.tag == 'Player') {
		isInGameZone = false;
		halo.enabled = true;
	}
}