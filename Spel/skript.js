let nummer = 1;

function svar(){

let container = document.querySelector("#quiz").fråga.value;
tal ++;

	if (container == Rätt) {
		antal++;
	}
}

function ladda() {
	document.querySelector("#bakgrund").innerHTML =`<div style="border:1px solid #d3d3d3; background-image: url(Steg${nummer}.png); background-size: cover; margin: auto; width: 100%; height: 100%;">  </div>`;
	nummer++;

	if( nummer == 14)
	{
		document.querySelector("#bakgrund").innerHTML =`<div class="container"><div class="vinst"><h1>Du Klarade Det !!!</h1></div></div>`;
		document.querySelector("#svar").innerHTML =`<h1> </h1>`;

	}
}

function myFunction() {
  var x = document.getElementsByClassName("knappar")[0].id;
  document.getElementById("test").innerHTML = x;
}
