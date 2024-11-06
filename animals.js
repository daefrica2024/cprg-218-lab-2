bighornsheep.addEventListener('click',function(){
    console.log("bighornsheep")
	document.body.classList.remove("blackbear");
	document.body.classList.remove("moose");
	document.body.classList.remove("wolf");
	document.body.classList.remove("elk");
    document.body.classList.add("bighornsheep");
	document.getElementById("animals").src="sheep.webp";
	document.getElementById("animals").alt="two blackhorn sheep on a hill";
})

blackbear.addEventListener('click',function(){
	console.log("blackbear");
	document.body.classList.remove("bighornsheep");
	document.body.classList.remove("moose");
	document.body.classList.remove("wolf");
	document.body.classList.remove("elk");
    document.body.classList.add("blackbear");
	document.getElementById("animals").src="bear.webp";
	document.getElementById("animals").alt="black bear walking";
})

moose.addEventListener('click',function(){
    console.log("moose")
    document.body.classList.remove("bighornsheep");
	document.body.classList.remove("blackbear");
	document.body.classList.remove("wolf");
	document.body.classList.remove("elk");
    document.body.classList.add("moose");
	document.getElementById("animals").src="moose.webp";
	document.getElementById("animals").alt="moose watching";
})

wolf.addEventListener('click',function(){
    console.log("wolf")
    document.body.classList.remove("bighornsheep");
	document.body.classList.remove("blackbear");
	document.body.classList.remove("moose");
	document.body.classList.remove("elk");
    document.body.classList.add("wolf");
	document.getElementById("animals").src="wolf.webp";
	document.getElementById("animals").alt="wolf getting hungry";
})

elk.addEventListener('click',function(){
    console.log("elk")
    document.body.classList.remove("bighornsheep");
	document.body.classList.remove("blackbear");
	document.body.classList.remove("moose");
	document.body.classList.remove("wolf");
    document.body.classList.add("elk");
	document.getElementById("animals").src="elk.webp";
	document.getElementById("animals").alt="elk looking for food";
})