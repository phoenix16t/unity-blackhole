#pragma strict

var rotationSpeed: float;
var pushBackForce: float;

var asteroids: GameObject[];
var asteroidRotationMultiplier: float;
var asteroidSpawnRate: float;
var asteroidStartTime: float;
private var nextSpawn: float;

private var halo: SpriteRenderer;

function Start() {
	nextSpawn = Time.time + asteroidStartTime;
	halo = transform.Find("halo").GetComponent(SpriteRenderer);
}

function Update () {
	transform.Rotate(0, 0, rotationSpeed);
	
	if(Time.time > nextSpawn) {
		var position = Vector3(0, 1, 0);	
		while(position == Vector3(0, 1, 0)) {
			position = Random.insideUnitSphere;
		}
		position.y = 1;

		var asteroid = asteroids[Random.Range(0, asteroids.Length)];
		var newAsteroid = Instantiate(asteroid, position, transform.rotation);
		newAsteroid.transform.localScale = Vector3(.005, .005, .005);
		newAsteroid.rigidbody.AddTorque(Random.insideUnitSphere * asteroidRotationMultiplier);

		nextSpawn = Time.time + asteroidSpawnRate;
	}
}

function OnTriggerStay(other: Collider) {
	if(other.tag == "bolt" || other.tag == "Player") {
		halo.enabled = true;
	}
	
	var multiplier = 1;
	if(other.tag == "bolt") {
		multiplier = 10;
	}
	var pushBack = (other.transform.position - transform.position) * pushBackForce * multiplier;
	other.gameObject.rigidbody.AddForce(pushBack);
}

function OnTriggerExit(other: Collider) {
	halo.enabled = false;
}