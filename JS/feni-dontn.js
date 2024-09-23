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
  }
});
