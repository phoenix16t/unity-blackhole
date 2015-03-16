#pragma strict

var numHits: float;
private var player: PlayerController;

function Start() {
	player = GameObject.FindWithTag("Player").GetComponent(PlayerController);
}

function Update() {
	transform.position.y = 1;
}

function OnTriggerEnter(other: Collider) {
	if(other.tag == "bolt") {
		Destroy(other.gameObject);
		numHits--;
		player.score++;
	}
	if(numHits <= 0) {
		Destroy(gameObject);
		player.kills++;
	}
}