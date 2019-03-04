const bq = document.querySelector("blockquote");
bq.style.display = "none";

document.querySelector(".btn").addEventListener("click", getQuote);

function getQuote() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://ron-swanson-quotes.herokuapp.com/v2/quotes`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const allQuotes = JSON.parse(this.responseText);

      bq.style.display = "block";
      bq.innerHTML = allQuotes[0];
    }
  };

  xhr.send();
}
