navigator.getBattery().then(function(k) { 
function updateAllBatteryInfo(){ 
  updateChargeInfo(); 
  updateLevelInfo(); 
  updateChargingInfo();
  updateDischargingInfo(); 
}
  updateAllBatteryInfo();  
  k.addEventListener('chargingchange', function(){ updateChargeInfo(); }); 
function updateChargeInfo(){ console.log("Battery charging? " + (k.charging ? "Yes" : "No")); } k.addEventListener('levelchange', 
function(){ updateLevelInfo(); }); 
function updateLevelInfo(){ console.log("Battery level: " + k.level * 100 + "%"); } k.addEventListener('chargingtimechange', function(){ updateChargingInfo(); }); 
function updateChargingInfo(){ console.log("Battery charging time: " + k.chargingTime + " seconds"); } k.addEventListener('dischargingtimechange', function(){ updateDischargingInfo(); }); 
function updateDischargingInfo(){ console.log("Battery discharging time: " + k.dischargingTime + " seconds"); } });