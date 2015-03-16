#pragma strict

var acceleration: float;
var topSpeed: float;
var rotationSpeed: float;

var shot: GameObject;
var fireRate: float;
private var nextShot: float;

var kills: int;
var score: int;

function FixedUpdate () {
	var vertChange = Input.GetAxis("Vertical");
	var horiChange = Input.GetAxis("Horizontal");
	
	rigidbody.AddRelativeForce(Vector3.up * vertChange * acceleration);
	rigidbody.AddRelativeForce(Vector3.right * horiChange * acceleration);
	if(rigidbody.velocity.magnitude > topSpeed) {
		rigidbody.velocity = rigidbody.velocity.normalized * topSpeed;
	}
}

function Update() {
	var mousePos = Input.mousePosition;
	mousePos.z = 5;
	mousePos = Camera.main.ScreenToWorldPoint(mousePos);

	transform.LookAt(mousePos);
	transform.eulerAngles.x = 90;
			
	if(Input.GetButton("Fire1") && Time.time > nextShot) {
		Instantiate(shot, transform.position, transform.rotation);
		nextShot = Time.time + fireRate;
	}
}

function OnCollisionEnter(other: Collision) {
	if(other.collider.tag == "asteroid") {
		Destroy(gameObject);
	}
}