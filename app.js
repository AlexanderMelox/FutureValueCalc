const form = document.getElementById('form');
const results = document.getElementById('results');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const payment = document.getElementById('payment').value;
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const periods = document.getElementById('periods').value;

  const futureValue = (payment * (Math.pow((1 + rate), 679) -1) / rate).toFixed(2);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const displayNumber = numberWithCommas(futureValue);



  const html = `
    <h1 class="d-block text-success result-number">$${displayNumber}</h1>
  `;

  results.innerHTML = html;

});