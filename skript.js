let nummer = 1;

function rätt(){
	document.querySelector("#bakgrund").innerHTML =`<div style="border:1px solid #d3d3d3; background-image: url(Steg${nummer}.png); background-size: cover; margin: auto; width: 100%; height: 100%;">  </div>`;
	nummer++;

	if( nummer == 14)
	{
		document.querySelector("#spelyta").innerHTML =`<h1 class="rubrik">Rubrik</h1><div class="bakgrund2"><div class="container"><div class="vinst"><h1>Du Klarade Det !!!</h1></div></div></div>`;
		document.querySelector("#svar").innerHTML =`<h1> </h1>`;

	}
}

function fel(){
	document.querySelector("#bakgrund").innerHTML =`<div class="container"><div class="förlust"><h1>Du åkte in i väggen.</h1><button class="btn btn-danger" onclick="location.reload()">Försök igen</button></div></div>`;
}

const svarsalternativ = [
	{
		alternativ: `<div class="knappar" id="alternativen">
					 <button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>
					 </div>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
	{
		alternativ: `<button class="btn btn-primary" onclick="fel()"> Aa_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Bb_ </button>
					 <button class="btn btn-primary" onclick="fel()"> Cc_ </button>`
	},
];

function nästa(){
	document.querySelector("#test").innerHTML = svarsalternativ[nummer-1].alternativ;
}
function test(){
	console.log(svarsalternativ[nummer-1].alternativ);
}

/* let nummer = 1; 

function kollaSvar(){
	let container = document.querySelector("#spel").alternativ.value;
	Rätt = rättsvar[nummer-1].alternativ;

	if (container == Rätt) {
		nästa()
		console.log("DET FUNGERAR!!!");
	}
}

function nästa() {
	document.querySelector("#bakgrund").innerHTML =`<div style="border:1px solid #d3d3d3; background-image: url(Steg${nummer}.png); background-size: cover; margin: auto; width: 100%; height: 100%;">  </div>`;
	nummer++;

	if( nummer == 14)
	{
		document.querySelector("#bakgrund").innerHTML =`<div class="container"><div class="vinst"><h1>Du Klarade Det !!!</h1></div></div>`;
		document.querySelector("#svar").innerHTML =`<h1> </h1>`;

	}
}

function test()
{
	let container = document.querySelector("#spel").alternativ;
	console.log(container);
}
*/