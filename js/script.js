function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;

  if (isNaN(sisiLuas) || sisiLuas <= 0) {
    alert("Masukkan nilai sisi yang valid untuk menghitung luas!");
    return;
  }

  var luas = sisiLuas * sisiLuas;

  var outputLuasElemen = document.getElementById("output-luas");
  outputLuasElemen.innerHTML =
    "<p> L = S x S" +
    "</p>" +
    "<p> L = " +
    sisiLuas +
    " x " +
    sisiLuas +
    "</p>" +
    "<p> L = " +
    luas +
    "</p>";
  outputLuasElemen.classList.remove("result-output");
}

function hitungKeliling() {
  var sisiKeliling = document.getElementById("sisi-keliling").value;

  if (isNaN(sisiKeliling) || sisiKeliling <= 0) {
    alert("Masukkan nilai sisi yang valid untuk menghitung luas!");
    return;
  }

  var keliling = 4 * sisiKeliling;

  var outputKelilingElemen = document.getElementById("output-keliling");
  outputKelilingElemen.innerHTML =
    "<p> K = 4 x S" +
    "</p>" +
    "<p> K = " +
    "4" +
    " x " +
    sisiKeliling +
    "</p>" +
    "<p> K = " +
    keliling +
    "</p>";
  outputKelilingElemen.classList.remove("result-output");
}

function resetLuas() {
  document.getElementById("sisi-luas").value = "";
  document.getElementById("output-luas").textContent = "";
  document.getElementById("output-luas").classList.add("hidden");
}

function resetKeliling() {
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("output-keliling").textContent = "";
  document.getElementById("output-keliling").classList.add("hidden");
}
