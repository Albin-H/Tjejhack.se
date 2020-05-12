let nummer = 1;

function ladda() {
	document.querySelector("#svar").innerHTML =`<button class="btn btn-primary">left(50)</button> <button class="btn btn-primary">right(50)</button> <button class="btn btn-primary">down(50)</button>`;
	document.querySelector("#bakgrund").innerHTML =`<div style="border:1px solid #d3d3d3; background-image: url(Steg${nummer}.png); background-size: cover; margin: auto; width: 100%; height: 100%;">  </div>`;
	nummer++;

	if( nummer == 14)
	{
		document.querySelector("#svar").innerHTML =`<h1>Du Klarade Det !!!</h1>`;

	}
}