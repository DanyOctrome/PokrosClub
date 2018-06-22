var soldiersNum = 0, soldierCost = 15, soldierBaseCost = 15, priestsNum = 0, priestCost = 500, priestBaseCost = 500, sorcerersNum = 0, sorcererCost = 100000, sorcererBaseCost = 100000, gold = 0, gps = 0, faith = 0, fps = 0, mana = 0, mps = 0;
    function update(){
        click.onclick = function() {gold = gold + 1;};
		
        Soldiers.onclick = function() {
        if (gold >= soldierCost) {
            gold = gold - soldierCost;
            soldiersNum = soldiersNum + 1;
            gps = gps + 1;
            soldierCost = soldierBaseCost * (Math.pow(1.15, soldiersNum));
            };
        };
	Priests.onclick = function() {
        if (gold >= priestCost) {
            gold = gold - priestCost;
            priestNum = priestsNum + 1;
            fps++;
            priestCost = priestBaseCost * (Math.pow(1.15, priestNum));
            };
        };
	Sorcerers.onclick = function() {
        if (gold >= sorcererCost) {
            gold = gold - sorcererCost;
            sorcerersNum = sorcerersNum + 1;
            mps++;
            sorcererCost = sorcererBaseCost * (Math.pow(1.15, sorcerersNum));
            };
        };
		
        gold = gold + (gps/60);
		faith += fps/60;
		mana += mps/60;
    };
    function draw(){
        /*Gps.value = gps.toFixed(0);
		Fps.value = fps.toFixed(0);
		Mps.value = mps.toFixed(0);*/
		
        document.getElementById("Gold").innerHTML  = "Gold: ".bold() + gold.toFixed(0) + " (per second: " + gps.toFixed(0) + ")";
		document.getElementById("Faith").innerHTML  = "Faith: ".bold() + faith.toFixed(0) + " (per second: " + fps.toFixed(0) + ")";
		document.getElementById("Mana").innerHTML  = "Mana: ".bold() + mana.toFixed(0) + " (per second: " + mps.toFixed(0) + ")";
		
        Soldiers.value = soldierCost.toFixed(0) + " Gold";
        SoldiersNum.value = soldiersNum.toFixed(0);
		Priests.value = priestCost.toFixed(0) + " Gold";
        PriestsNum.value = priestsNum.toFixed(0);
		Sorcerers.value = sorcererCost.toFixed(0) + " Gold";
        SorcerersNum.value = sorcerersNum.toFixed(0);
    };
    var mainloop = function() {update(), draw()}; 
    setInterval(mainloop, 16);
