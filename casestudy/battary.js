function switchChargeNO() {
	if(chargeNokia == false) {
		document.getElementById('toggleChargeNO').checked;
		chargeNokia = true;
		turnChargeNO();
		$("#NOKIA .charged").css("display", 'none');
		$("#NOKIA .charging").css("display", 'block');
	}
	else {
		chargeNokia = false;
		clearInterval(onChargeNO);
		$("#NOKIA .charged").css("display", 'block');
		$("#NOKIA .charging").css("display", 'none');
		setBatterColor(nokia, "#NOKIA");
	}
}