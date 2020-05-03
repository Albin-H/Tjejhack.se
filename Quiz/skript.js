let Rätt = 2;
let nummer = 0;
let tal = 1;
let antal = 0;
function svar(){

let container = document.querySelector("#quiz").fråga.value;
tal ++;

	if (container == Rätt) {
		antal++;
	}
}

const frågor = [
	{
		Fråga: "Vilket bibliotek använder man när man ritar med Python?"
	},
	{
		Fråga: "Vilken typ av programmering gör man med Python?"
	},
	{
		Fråga: "Vad betyder koden fd() när man programmerar med turtle?"
	},
	{
		Fråga: "Vad kallas de symboler man använder när man programmerar t.ex. (), = och \" "
	},
	{
		Fråga: "Vilket av följande är inte ett programmeringsspråk"
	},
	{
		Fråga: "Vill du se svar?"
	},

];

const svarsalternativ = [
	{
		alternativ: `<input type="radio" name="fråga" value="1"> Turtle <br>
            <input type="radio" name="fråga" value="2">Paint <br>
            <input type="radio" name="fråga" value="3">Draw <br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Blockprogrammering <br>
            <input type="radio" name="fråga" value="2">Textprogrammering <br>
            <input type="radio" name="fråga" value="3">Analog Programmering <br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="¨1">Att turtlen ska vänta på instruktioner <br>
            <input type="radio" name="fråga" value="2">Att turtlen ska stanna<br>
            <input type="radio" name="fråga" value="3">Att turtlen ska gå frammåt<br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Font<br>
            <input type="radio" name="fråga" value="2">Syntax<br>
            <input type="radio" name="fråga" value="3">Alfabete<br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Z#<br>
            <input type="radio" name="fråga" value="2">C++<br>
            <input type="radio" name="fråga" value="3">Java<br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Ja<br>
            <input type="radio" name="fråga" value="2">Nej`
	},
];

const rättsvar = [
	{
		alternativ: "1"
	},
	{
		alternativ: "2"
	},
	{
		alternativ: "3"
	},
	{
		alternativ: "2"
	},
	{
		alternativ: "1"
	},
	{
		alternativ: "1"
	},
];

function ladda() {
	document.querySelector("#svar").innerHTML = "Fråga " + (nummer + 2);
	document.querySelector("#fraga").innerHTML = frågor[nummer].Fråga;
	document.querySelector("#alternativ").innerHTML = svarsalternativ[nummer].alternativ;
	document.querySelector("#bild").innerHTML = `<img src="Bilder\\Fraga${nummer+2}.PNG" class="storlek">`;
	Rätt = rättsvar[nummer].alternativ;
	nummer++;

	
}
function resultat(){

	if (nummer > 4) {
		document.querySelector("#avsluta").innerHTML += `<button class="btn btn-success svara" onclick="rätta(); return false">Kolla Svar</button> `;
		document.getElementById("knapp").style.visibility = "hidden";
		document.getElementById("svar").style.visibility = "hidden";

	}
}
function rätta(){
	document.getElementById("resultat").innerHTML = "Du fick " + antal + "/6 Poäng"; return false;
}
