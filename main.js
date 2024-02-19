const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const btn = document.querySelector('#button');
const totalSpan = document.querySelector('#total');

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);