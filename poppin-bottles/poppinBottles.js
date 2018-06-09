var investment = process.argv[2];

function redeemBottles (cash) {
  var totalBottles = Math.floor(cash / 2);
  var currentBottles = totalBottles;
  var currentCaps = totalBottles;

  var earnedBottles = 0;
  var earnedCaps = 0;


  function fromBottles () {
    var newBottles = Math.floor(currentBottles / 2);
    totalBottles += newBottles;
    currentCaps += newBottles;
    currentBottles = currentBottles - (newBottles * 2) + newBottles;
    earnedBottles += newBottles;
  }

  function fromCaps () {
    var newBotfromCaps = Math.floor(currentCaps / 4);
    totalBottles += newBotfromCaps;
    currentBottles += newBotfromCaps;
    currentCaps = currentCaps - (newBotfromCaps * 4) + newBotfromCaps;
    earnedCaps += newBotfromCaps;

  }

  while (Math.floor(currentCaps / 4) > 0 || Math.floor(currentBottles / 2) > 0) {
    fromCaps();
    fromBottles();
  }

  console.log(`
    TOTAL BOTTLES: ${totalBottles}
    REMAINING BOTTLES: ${currentBottles}
    REMAINING CAPS: ${currentCaps}
    TOTAL EARNED:
      BOTTLES: ${earnedBottles}
      CAPS: ${earnedCaps}`);
}


redeemBottles(investment);


