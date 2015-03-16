#pragma strict

var speed: float;
var power: float;

function Start () {
	rigidbody.velocity = transform.up * speed;
}

//function OnTriggerExit(other: Collider) {
//	if(other.tag == "out of bounds") {
//		Destroy(gameObject);		
//	}
//}
