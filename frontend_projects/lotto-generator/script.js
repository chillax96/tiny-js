document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    console.log(1);

    let numbers = generateLottoNumbers();
    document.getElementById("numbers").textContent = numbers.join(", ");
  });

function generateLottoNumbers() {
  let lottoNumbers = [];
  for (let i = 0; lottoNumbers.length < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }
  return lottoNumbers;
}
console.log(generateLottoNumbers());
