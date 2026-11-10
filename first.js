const billForm = document.getElementById("bill-form");
const unitsInput = document.getElementById("units");
const rateInput = document.getElementById("rate");
const rateDisplay = document.getElementById("rate-display");
const costOutput = document.getElementById("cost");

billForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const unitsConsumed = Number(unitsInput.value);
    const ratePerKwh = Number(rateInput.value);
    const totalCost = unitsConsumed * ratePerKwh;

    rateDisplay.textContent = `${ratePerKwh.toFixed(2)} per kWh`;
    costOutput.textContent = `₹ ${totalCost.toFixed(2)}`;
});