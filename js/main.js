/*
VFW Project 2
David Clark
02/17/13
*/

window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theInput = document.getElementById(x);
		return theInput;
	}
	
		function createWeapons (){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			createSelect = document.createElement('select');
			createSelect.setAttribute("id", "weaponChoices");
		for (var i=0, j=weaponChoices.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = weaponChoices[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			createSelect.appendChild(makeOption);
		}
		selectLi.appendChild(createSelect);
	}
	
		function getGrenadeValue (){
		if($('grenade').checked){
			grenadeValue = $('grenade').value;
		}else{
			grenadeValue = "No";
		}
	}
	
		function getFoodValue (){
		if($('food').checked){
			foodValue = $('food').value;
		}else{
			foodValue = "No";
		}
	}
	
		function getDrinkValue (){
		if($('drink').checked){
			drinkValue = $('drink').value;
		}else{
			drinkValue = "No";
		}
	}
	
		function getMedicineValue (){
		if($('medicine').checked){
			medicineValue = $('medicine').value;
		}else{
			medicineValue = "No";
		}
	}
	
	function storeLoadout (){
		var keyGen					= Math.floor(Math.random()*100001);
		getGrenadeValue();
		getFoodValue();
		getDrinkValue();
		getMedicineValue();
		var loadout					= {};
			loadout.name			= ["Loadout Creator:", $('name').value];
			loadout.gearName		= ["Loadout Name:", $('gearName').value];
			loadout.dateAdded		= ["Creation Date:", $('dateAdded').value];
			loadout.weaponChoices	= ["Weapon Choice:", $('weaponChoices').value];
			loadout.magAmount		= ["Magazine Quanity:", $('magAmount').value];			
			loadout.grenade			= ["Grenade?", grenadeValue];
			loadout.food			= ["Food?", foodValue];
			loadout.drink			= ["Drink?", drinkValue];
			loadout.medicine		= ["Medicine?", medicineValue];
			loadout.comments		= ["Comments:", $('comments').value];
		localStorage.setItem(keyGen, JSON.stringify(loadout));
		alert("Loadout has been saved.")
	}
	
	var weaponChoices = [
		"--Select a Weapon--",
		"Compound Crossbow",
		"M1014",
		"Remington 870",
		"Double-barreled Shotgun",
		"Winchester 1866",
		"Bizon PP-19 SD",
		"MP5A5",
		"MP5SD6",
		"AK-74",
		"AKS-74",
		"AKS-74U",
		"L85A2 AWS",
		"M4A1",
		"M4A1 CCO",
		"M4A1 CCO SD",
		"M4A1 Holo",
		"M4A3 CCO",
		"M16A2",
		"M16A2 M203",
		"M16A4 ACOG",
		"AKM",
		"Lee Enfield",
		"FN FAL",
		"FN FAL AN/PVS4",
		"M249 SAW",
		"M240",
		"Mk 48 Mod 0",
		"CZ 550",
		"DMR",
		"M14 AIM",
		"M24",
		"SVD Camo",
		"M107",
		"AS50",
		"M136"
	],
		grenadeValue = "No",
		foodValue = "No",
		drinkValue = "No",
		medicineValue = "No";
	
	createWeapons();

	
	/*
	var clearDataLink = blank("clear");
	clearDataLink.addEventListener("click", clearLocal);
	
	var displayDataLink = blank("displayLink");
	displayDataLink.addEventListener("click", getData);
	*/
	var submit = blank("submit");
	save.addEventListener("click", storeLoadout);
	



	
});
