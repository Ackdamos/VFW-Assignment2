/*
VFW Project 2
David Clark
10/04/12
*/

window.addEventListener("DOMContentLoaded", function(){

	function blank (x) {
		var theElement = document.getElementById(x);
		retrun theElement;
	}

	function makeWeapons1(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = blank("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "primaryWeapon");
		for(var i =0, j=primaryWeapons.length, i<j, i++){
			var makeOption = document.createElement("option");
			var optText = primaryWeapons[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
		function makeWeapons2(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = blank("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "secondaryWeapon");
		for(var i =0, j=secondaryWeapons.length, i<j, i++){
			var makeOption = document.createElement("option");
			var optText = primaryWeapons[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
	function storeData(){
		getSelectedRadio();
		getCheckboxValue();
		localStorage.setItem("Primary Weapon", blank("primaryWeapons").value);
		localStorage.setItem("Secondary Weapon", blank("primaryWeapons").value);
		localStorage.setItem("Grenade", grenadeValue);
		localStorage.setItem("Food", foodValue);
		localStorage.setItem("Drink", drinkValue);
		localStorage.setItem("Medicine", medicineValue);
		localStorage.setItem("Comments", blank("comments").value);
		localStorage.setItem("Gear Name", blank("gearName").value);
		localStorage.setItem("Date Added", blank("date").value);
	};
	
	var primaryWeapons = [
		"--Select Primary Weapon--",
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
	];
	
	var secondaryWeapons = [
		"--Select Secondary Weapon--",
		"Makarov",
		"M1911",
		"Revolver",
		"G17",
		"M9",
		"M9 SD",
		"PDW"
	];
	
	makeWeapons1();
	makeWeapons2();
	
	var clearDataLink = blank("clear");
	clearDataLink.addEventListener("click", clearLocal);
	
	var displayDataLink = blank("displayLink");
	displayDataLink.addEventListener("click", getData);
	
	var save = blank("submit");
	save.addEventListener("click", storeData);

});
