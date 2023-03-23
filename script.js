function calculateBMI() {
  var Berat = document.getElementById("Berat").value;
  var Tinggi = document.getElementById("Tinggi").value;
  var bmi = Berat / (Tinggi / 100) ** 2;

  document.getElementById("Hasil").innerHTML =
    "Nilai BMI mu adalah " + bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById("Hasil").innerHTML += " (Berat Badan Kamu kurang)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("Hasil").innerHTML += " (Berat Badan Kamu Normal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("Hasil").innerHTML +=
      " (Kamu Kelebihan Berat Badan)";
  } else if (bmi >= 30 && bmi <= 34.9) {
    document.getElementById("Hasil").innerHTML += " (Kamu Obesitas Tahap 1)";
  } else if (bmi >= 35) {
    document.getElementById("Hasil").innerHTML += " (Kamu Obesitas Tahap 2)";
  }
}
