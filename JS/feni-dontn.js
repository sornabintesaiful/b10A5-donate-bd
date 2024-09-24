document.getElementById('btn-feny-dnt')
  .addEventListener('click', function () {
  const yourBalance = getTextFieldById('your-balance');

  const donateMoney = getInputFieldById('input-feni-donate');
  console.log(donateMoney);

  const balance = getTextFieldById('amount-for-feni');
  console.log(balance);
  if (
    typeof donateMoney === 'number' &&
    yourBalance > donateMoney &&
    donateMoney > 0
  ) {
    const nowYourBalance = yourBalance - donateMoney;

    const updateDonateBalance = donateMoney + balance;

    document.getElementById('your-balance').innerText = nowYourBalance;

    document.getElementById('amount-for-feni').innerText = updateDonateBalance;

    console.log(updateDonateBalance, nowYourBalance);
  } else {
    alert('invalid input');
    };
    
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-[#F9F7F3]  my-4 rounded-lg bg-opacity-35 p-8';
    historyItem.innerHTML = `
    <h2 class="text-xl text-[#111111] font-bold">${donateMoney.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh </h2>
    <p class ="text-xs mt-4 text-gray-500"> ${new Date().toTimeString()} </p>
    `;
    const historyContainer = document.getElementById('history-detailes');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
