function tipCalculator() {
  let billAmount = document.getElementById("bill").value;
  let serviceQuality = document.getElementById("service").value;
  let numOfPeople = document.getElementById("numOfPeople").value;

  if (billAmount === "0" || serviceQuality == 0) {
    alert("Please enter required value!");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let totalAmount = (billAmount * serviceQuality) / numOfPeople;
  totalAmount = Math.round(totalAmount * 100) / 100;

  totalAmount = totalAmount.toFixed(2);

  document.getElementById("tip-container").style.display = "block";
  document.getElementById("tip").innerHTML = totalAmount;
}

document.getElementById("tip-container").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate-btn").onclick = function (e) {
  e.preventDefault();
  tipCalculator();
  document.getElementById("bill").value = "";
  document.getElementById("service").value = "0";
  document.getElementById("numOfPeople").value = "";
};
