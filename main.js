var military = ["Thief", "Mugger", "Bandit", "Mercenary", "Pikeman", "Samurai", "Knight", "Hero"]; //names
var militaryNum = new Array(military.length).fill(0); //amount (starts at zero)
var militaryBaseCost = [20,150,500,10000,250000,1000000,50000000,10000000000];
var militaryCost = militaryBaseCost.slice();
var militaryBaseGPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var militaryGPS = new Array(military.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var militaryMultiplier = new Array(military.length).fill(1); //multiplier of the production (starts at 1)
var specialMilitary = [];

var clergy = ["Doomsayer", "Fake Priest", "Witchdoctor", "Shaman", "Monk", "Priest", "Bishop", "Messiah"];
var clergyNum = new Array(clergy.length).fill(0); //amount (starts at zero)
var clergyBaseCost = [500,10000,500000,10000000,250000000,1000000000,50000000000,10000000000000];
var clergyCost = clergyBaseCost.slice();
var clergyBaseFPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var clergyFPS = new Array(clergy.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var clergyMultiplier = new Array(clergy.length).fill(1); //multiplier of the production (starts at 1)
var specialClergy = [];

var magi = ["Illusionist","Gunpowder Expert","Sorcerer","Wizard","Summoner","Elementalist","Elder Wizard","Ancient Magus"];
var magiNum = new Array(magi.length).fill(0); //amount (starts at zero)
var magiBaseCost = [500,10000,500000,10000000,250000000,1000000000,50000000000,10000000000000];
var magiCost = magiBaseCost.slice();
var magiBaseMPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var magiMPS = new Array(magi.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var magiMultiplier = new Array(magi.length).fill(1); //multiplier of the production (starts at 1)
var specialMagi = [];

var mixedUnits = [];

var gold = 0, gps = 0, faith = 0, fps = 0, mana = 0, mps = 0;

var imagesPath = "images/";

var frequencyActive = 50, frequencyInactive = 1000, frequency = frequencyActive, frequencyDivider = 1000/frequency, focus = true;

var retaehc = false;

var costBaseNumber = 1.1;


function update(){
	click.onclick = function() {gold = gold + 1;};
	gold += gps/frequencyDivider;
	faith += fps/frequencyDivider;
	mana += mps/frequencyDivider;
	
};
function draw(){
	document.getElementById("Gold").innerHTML  = "Gold: ".bold() + gold.toFixed(0) + " (per second: " + gps.toFixed(1) + ")";
	document.getElementById("Faith").innerHTML  = "Faith: ".bold() + faith.toFixed(0) + " (per second: " + fps.toFixed(1) + ")";
	document.getElementById("Mana").innerHTML  = "Mana: ".bold() + mana.toFixed(0) + " (per second: " + mps.toFixed(1) + ")";

	//Buttons
	//Military display	
	for (var i = 0; i < military.length; i++) {
		document.getElementById("Military"+i).innerHTML = militaryCost[i].toFixed(0) + " Gold";
		document.getElementById("MilitaryNum"+i).value = militaryNum[i].toFixed(0);
	}
	
	//Clergy display
	for (var i = 0; i < clergy.length; i++) {
		document.getElementById("Clergy"+i).innerHTML = clergyCost[i].toFixed(0) + " Gold";
		document.getElementById("ClergyNum"+i).value = clergyNum[i].toFixed(0);
	}
	
	//Magi display
	for (var i = 0; i < magi.length; i++) {
		document.getElementById("Magi"+i).innerHTML = magiCost[i].toFixed(0) + " Gold";
		document.getElementById("MagiNum"+i).value = magiNum[i].toFixed(0);
	}
};

function updateGPS () {
	gps = militaryGPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of gps
}

function updateFPS() {
	fps = clergyFPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of fps
}

function updateMPS() {
	mps = magiMPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of mps
}

function militaryBuyClick(i) {
	if (gold >= militaryCost[i]) {
		gold = gold - militaryCost[i];
		militaryNum[i]++;
		militaryGPS[i] = militaryBaseGPS[i] * militaryNum[i] * militaryMultiplier[i]/* + militaryAdder[i]*/;
		updateGPS();
		militaryCost[i] = militaryBaseCost[i] * (Math.pow(costBaseNumber, militaryNum[i]));
	}
}
function clergyBuyClick(i) {
	if (gold >= clergyCost[i]) {
		gold = gold - clergyCost[i];
		clergyNum[i]++;
		clergyFPS[i] = clergyBaseFPS[i] * clergyNum[i] * clergyMultiplier[i]/* + clergyAdder[i]*/;
		updateFPS();
		clergyCost[i] = clergyBaseCost[i] * (Math.pow(costBaseNumber, clergyNum[i]));
	}
}
function magiBuyClick(i) {
	if (gold >= magiCost[i]) {
		gold = gold - magiCost[i];
		magiNum[i]++;
		magiMPS[i] = magiBaseMPS[i] * magiNum[i] * magiMultiplier[i]/* + magiAdder[i]*/;
		updateMPS();
		magiCost[i] = magiBaseCost[i] * (Math.pow(costBaseNumber, magiNum[i]));
	}
}

function giveGoldFaithMana(g, f, m) {
	gold += g;
	faith += f;
	mana += m;
	retaehc = true;
}
function createServantsDisplay() {
	var elementMilitary = document.getElementById("Military");
	var elementClergy = document.getElementById("Clergy");
	var elementMagi = document.getElementById("Magi");
	//Military
	for (var i = 0; i < military.length; i++) {
		var para = document.createElement("p");
		
		// Unit Thumbnail
		var img = document.createElement("img");
		img.src = imagesPath + "military" + i + ".png";
		img.className = "unitThumbnail";
		para.appendChild(img);
		
		para.innerHTML += military[i].bold() + ": ".bold();
		var o = document.createElement("output");
		o.setAttribute("id", "MilitaryNum"+i);
		o.setAttribute("type", "text");
		para.appendChild(o);
		elementMilitary.appendChild(para);
	
		var o = document.createElement("button");
		o.setAttribute("id", "Military"+i);
		o.setAttribute("onClick", "militaryBuyClick("+i+")");
		//o.setAttribute("type", "button");
		elementMilitary.appendChild(o);
	}
	//Clergy
	for (var i = 0; i < clergy.length; i++) {
		var para = document.createElement("p");
		
		// Unit Thumbnail
		var img = document.createElement("img");
		img.src = imagesPath + "clergy" + i + ".png";
		img.className = "unitThumbnail";
		para.appendChild(img);
		
		para.innerHTML += clergy[i].bold() + ": ".bold();
		var o = document.createElement("output");
		o.setAttribute("id", "ClergyNum"+i);
		o.setAttribute("type", "text");
		para.appendChild(o);
		elementClergy.appendChild(para);
	
		var o = document.createElement("button");
		o.setAttribute("id", "Clergy"+i);
		o.setAttribute("onClick", "clergyBuyClick("+i+")");
		//o.setAttribute("type", "button");
		elementClergy.appendChild(o);
	}
	//Magi
	for (var i = 0; i < magi.length; i++) {
		var para = document.createElement("p");
		
		// Unit Thumbnail
		var img = document.createElement("img");
		img.src = imagesPath + "magi" + i + ".png";
		img.className = "unitThumbnail";
		para.appendChild(img);
		
		para.innerHTML += magi[i].bold() + ": ".bold();
		var o = document.createElement("output");
		o.setAttribute("id", "MagiNum"+i);
		o.setAttribute("type", "text");
		para.appendChild(o);
		elementMagi.appendChild(para);
	
		var o = document.createElement("button");
		o.setAttribute("id", "Magi"+i);
		o.setAttribute("onClick", "magiBuyClick("+i+")");
		//o.setAttribute("type", "button");
		elementMagi.appendChild(o);
	}
}

function updateFrequency(f) {
	frequency = f;
	frequencyDivider = 1000/frequency;
	//console.log("Updated frequency to: " + frequency);
	clearInterval(loop);
	loop = setInterval(mainloop, frequency);
}

function calculateGPS () {
	for (var i = 0; i < military.length; i++) {
		militaryGPS[i] = militaryBaseGPS[i] * militaryNum[i] * militaryMultiplier[i]/* + militaryAdder[i]*/;
	}
	
	updateGPS()
}

function calculateFPS() {
	for (var i = 0; i < clergy.length; i++) {
		clergyFPS[i] = clergyBaseFPS[i] * clergyNum[i] * clergyMultiplier[i]/* + clergyAdder[i]*/;
	}
	
	updateFPS()
}

function calculateMPS() {
	for (var i = 0; i < magi.length; i++) {
		magiMPS[i] = magiBaseMPS[i] * magiNum[i] * magiMultiplier[i]/* + magiAdder[i]*/;
	}
	
	updateMPS();
}

function calculateTriVarPS() {
	calculateGPS();
	calculateFPS();
	calculateMPS();
}

function saveGame() {
	localStorage.setItem("militaryNum", JSON.stringify(militaryNum));
	localStorage.setItem("clergyNum", JSON.stringify(clergyNum));
	localStorage.setItem("magiNum", JSON.stringify(magiNum));
	
	localStorage.setItem("gold", JSON.stringify(gold));
	localStorage.setItem("faith", JSON.stringify(faith));
	localStorage.setItem("mana", JSON.stringify(mana));
	
	localStorage.setItem("retaehc", JSON.stringify(retaehc));
}

function loadGame() {
	militaryNum = JSON.parse(localStorage.getItem("militaryNum"));
	clergyNum = JSON.parse(localStorage.getItem("clergyNum"));
	magiNum = JSON.parse(localStorage.getItem("magiNum"));
	
	gold = JSON.parse(localStorage.getItem("gold"));
	faith = JSON.parse(localStorage.getItem("faith"));
	mana = JSON.parse(localStorage.getItem("mana"));
	
	retaehc = JSON.parse(localStorage.getItem("retaehc"));
	
	calculateTriVarPS();
	updateTriCost();
}

function updateTriCost() {
	updateMilitaryCost();
	updateClergyCost();
	updateMagiCost();
}

function updateMilitaryCost () {
	for (var i = 0; i < military.length; i++) {
		militaryCost[i] = militaryBaseCost[i] * (Math.pow(costBaseNumber, militaryNum[i]));
	}
}

function updateClergyCost () {
	for (var i = 0; i < clergy.length; i++) {
		clergyCost[i] = clergyBaseCost[i] * (Math.pow(costBaseNumber, clergyNum[i]));
	}
}

function updateMagiCost () {
	for (var i = 0; i < magi.length; i++) {
		magiCost[i] = magiBaseCost[i] * (Math.pow(costBaseNumber, magiNum[i]));
	}
}

createServantsDisplay()
function mainloop() {update(); draw();}; 
var loop = setInterval(mainloop, frequency);
window.onfocus =  function () {updateFrequency(frequencyActive);};
window.onblur = function () {updateFrequency(frequencyInactive);};