#pragma strict

var player: GameObject;
private var text: UI.Text;
private var script: PlayerController;

function Start () {
	text = GetComponent(UI.Text);
	script = player.GetComponent(PlayerController);
}

function Update () {
	text.text = "Kills: " + script.kills + "\nScore: " + script.score;
}