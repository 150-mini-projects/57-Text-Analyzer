document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyzeButton");
  analyzeButton.addEventListener("click", analyzeText);
});

function analyzeText() {
  const textInput = document.getElementById("textInput").value;
  const wordCount = textInput.trim().split(/\s+/).length;
  const charCount = textInput.length;
  let totalWordLength = 0;
  textInput
    .trim()
    .split(/\s+/)
    .forEach((word) => {
      totalWordLength += word.length;
    });
  const avgWordLength = totalWordLength / wordCount;
  displayResults(wordCount, charCount, avgWordLength);
}

function displayResults(wordCount, charCount, avgWordLength) {
  const wordCountSpan = document.getElementById("wordCount");
  const charCountSpan = document.getElementById("charCount");
  const avgWordLengthSpan = document.getElementById("avgWordLength");
  wordCountSpan.textContent = wordCount;
  charCountSpan.textContent = charCount;
  avgWordLengthSpan.textContent = avgWordLength.toFixed(2);
}
