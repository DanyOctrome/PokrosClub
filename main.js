var military = ["Thief", "Mugger", "Bandit", "Mercenary", "Pikeman", "Samurai", "Knight", "Hero"]; //names
var militaryNum = new Array(military.length).fill(0); //amount (starts at zero)
var militaryBaseCost = [20,150,500,10000,250000,1000000,50000000,10000000000];
var militaryCost = militaryBaseCost;
var militaryBaseGPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var militaryGPS = new Array(military.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var militaryMultiplier = new Array(military.length).fill(1); //multiplier of the production (starts at 1)
var specialMilitary = [];

var clergy = ["Doomsayer", "Fake Priest", "Witchdoctor", "Shaman", "Monk", "Priest", "Bishop", "Messiah"];
var clergyNum = new Array(clergy.length).fill(0); //amount (starts at zero)
var clergyBaseCost = [500,10000,500000,10000000,250000000,1000000000,50000000000,10000000000000];
var clergyCost = clergyBaseCost;
var clergyBaseFPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var clergyFPS = new Array(clergy.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var clergyMultiplier = new Array(clergy.length).fill(1); //multiplier of the production (starts at 1)
var specialClergy = [];

var magi = [];
var magiNum = new Array(magi.length).fill(0); //amount (starts at zero)
var magiBaseCost = [500,10000,500000,10000000,250000000,1000000000,50000000000,10000000000000];
var magiCost = magiBaseCost;
var magiBaseMPS = [0.1,0.5,5,10,500,1000,100000,1000000];
var magiMPS = new Array(magi.length).fill(0); //the gold per second produced (.reduce((a, b) => a + b, 0) gives the sum of the array)
var magiMultiplier = new Array(magi.length).fill(1); //multiplier of the production (starts at 1)
var specialMagi = [];

var mixedUnits = [];

var soldiersNum = 0, soldierCost = 15, soldierBaseCost = 15, priestsNum = 0, priestCost = 500, priestBaseCost = 500, sorcerersNum = 0, sorcererCost = 100000, sorcererBaseCost = 100000, gold = 0, gps = 0, faith = 0, fps = 0, mana = 0, mps = 0;


    function update(){
        click.onclick = function() {gold = gold + 1;};
		
        /*Military0.onclick = function() {
        var i = 0;
        if (gold >= militaryCost[i]) {
            gold = gold - militaryCost[i];
            militaryNum[i]++;
            militaryGPS[i] = militaryBaseGPS[i] * militaryNum[i] * militaryMultiplier[0];// + militaryAdder[0];
            militaryCost[i] = militaryBaseCost[i] * (Math.pow(1.3, militaryNum[i]));
            };
        };*/
	/*Priests.onclick = function() {
        if (gold >= priestCost) {
            gold = gold - priestCost;
            priestNum = priestsNum + 1;
            fps++;
            priestCost = priestBaseCost * (Math.pow(1.15, priestNum));
            };
        };*/
	Sorcerers.onclick = function() {
        if (gold >= sorcererCost) {
            gold = gold - sorcererCost;
            sorcerersNum = sorcerersNum + 1;
            mps++;
            sorcererCost = sorcererBaseCost * (Math.pow(1.15, sorcerersNum));
            };
        };
		
	gold += gps/60; //TODO: temporary (fast) solution, it's too intesive TODO: needs global gps
	faith += clergyFPS.reduce((a, b) => a + b, 0)/60; //TODO: temporary (fast) solution, it's too intesive TODO: needs global gps
	mana += magiMPS.reduce((a, b) => a + b, 0)/60; //TODO: temporary (fast) solution, it's too intesive TODO: needs global gps
    };
    function draw(){
        /*Gps.value = gps.toFixed(0);
		Fps.value = fps.toFixed(0);
		Mps.value = mps.toFixed(0);*/
		
        document.getElementById("Gold").innerHTML  = "Gold: ".bold() + gold.toFixed(0) + " (per second: " + militaryGPS.reduce((a, b) => a + b, 0).toFixed(1) + ")"; //TODO: temporary (fast) solution, it's too intesive TODO: needs global gps
	document.getElementById("Faith").innerHTML  = "Faith: ".bold() + faith.toFixed(0) + " (per second: " + fps.toFixed(0) + ")";
	document.getElementById("Mana").innerHTML  = "Mana: ".bold() + mana.toFixed(0) + " (per second: " + mps.toFixed(0) + ")";
	
	//Buttons
	//Military display	
        Military0.value = militaryCost[0].toFixed(0) + " Gold";
        MilitaryNum0.value = militaryNum[0].toFixed(0);
        Military1.value = militaryCost[1].toFixed(0) + " Gold";
        MilitaryNum1.value = militaryNum[1].toFixed(0);
        Military2.value = militaryCost[2].toFixed(0) + " Gold";
        MilitaryNum2.value = militaryNum[2].toFixed(0);
        Military3.value = militaryCost[3].toFixed(0) + " Gold";
        MilitaryNum3.value = militaryNum[3].toFixed(0);
        Military4.value = militaryCost[4].toFixed(0) + " Gold";
        MilitaryNum4.value = militaryNum[4].toFixed(0);
        Military5.value = militaryCost[5].toFixed(0) + " Gold";
        MilitaryNum5.value = militaryNum[5].toFixed(0);
        Military6.value = militaryCost[6].toFixed(0) + " Gold";
        MilitaryNum6.value = militaryNum[6].toFixed(0);
        Military7.value = militaryCost[7].toFixed(0) + " Gold";
        MilitaryNum7.value = militaryNum[7].toFixed(0);
        
        //Clergy
	//Priests.value = priestCost.toFixed(0) + " Gold";
        //PriestsNum.value = priestsNum.toFixed(0);
    	for (var i = 0; i < clergy.length; i++) {
	    	document.getElementById("Clergy"+i).value = clergyCost[i].toFixed(0) + " Gold";
        	document.getElementById("ClergyNum"+i).value = clergyNum[i].toFixed(0);
	}
        
        //Magi
	Sorcerers.value = sorcererCost.toFixed(0) + " Gold";
        SorcerersNum.value = sorcerersNum.toFixed(0);
    };
    //function updateGPS()
    function militaryBuyClick(i) {
    	if (gold >= militaryCost[i]) {
            gold = gold - militaryCost[i];
            militaryNum[i]++;
            militaryGPS[i] = militaryBaseGPS[i] * militaryNum[i] * militaryMultiplier[i]/* + militaryAdder[i]*/;
            gps = militaryGPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of gps
            militaryCost[i] = militaryBaseCost[i] * (Math.pow(1.3, militaryNum[i]));
	}
    }
    function clergyBuyClick(i) {
    	if (gold >= clergyCost[i]) {
            gold = gold - clergyCost[i];
            clergyNum[i]++;
            clergyFPS[i] = clergyBaseFPS[i] * clergyNum[i] * clergyMultiplier[i]/* + clergyAdder[i]*/;
            fps = clergyFPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of fps
            clergyCost[i] = clergyBaseCost[i] * (Math.pow(1.3, clergyNum[i]));
	}
    }
    function magiBuyClick(i) {
    	if (gold >= magiCost[i]) {
            gold = gold - magiCost[i];
            magiNum[i]++;
            magiMPS[i] = magiBaseMPS[i] * magiNum[i] * magiMultiplier[i]/* + magiAdder[i]*/;
            gps = magiMPS.reduce((a, b) => a + b, 0); //TODO: update with more sources of mps
            magiCost[i] = magiBaseCost[i] * (Math.pow(1.3, magiNum[i]));
	}
    }
    
    function giveGoldFaithMana(g, f, m) {
    	gold += g;
    	faith += f;
    	mana += m;
    }
    function createServantsDisplay() {
    	var elementMilitary = document.getElementById("Military");
    	var elementClergy = document.getElementById("Clergy");
    	//var elementMagi = document.getElementById("Magi");
    	//Military
    	for (var i = 0; i < military.length; i++) {
	    	var para = document.createElement("p");
	    	para.innerHTML += military[i].bold() + ": ".bold();
	    	var o = document.createElement("output");
	    	o.setAttribute("id", "MilitaryNum"+i);
	    	o.setAttribute("type", "text");
	    	para.appendChild(o);
		elementMilitary.appendChild(para);
		
	    	var o = document.createElement("input");
	    	o.setAttribute("id", "Military"+i);
	    	o.setAttribute("onClick", "militaryBuyClick("+i+")");
	    	o.setAttribute("type", "button");
	    	elementMilitary.appendChild(o);
	}
    	//Clergy
    	for (var i = 0; i < clergy.length; i++) {
	    	var para = document.createElement("p");
	    	para.innerHTML += clergy[i].bold() + ": ".bold();
	    	var o = document.createElement("output");
	    	o.setAttribute("id", "ClergyNum"+i);
	    	o.setAttribute("type", "text");
	    	para.appendChild(o);
		elementClergy.appendChild(para);
		
	    	var o = document.createElement("input");
	    	o.setAttribute("id", "Clergy"+i);
	    	o.setAttribute("onClick", "clergyBuyClick("+i+")");
	    	o.setAttribute("type", "button");
	    	elementClergy.appendChild(o);
	}
    }
    
    createServantsDisplay()
    var mainloop = function() {update(), draw()}; 
    setInterval(mainloop, 16);
