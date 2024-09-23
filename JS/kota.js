
document.getElementById('btn-kota-dnt').addEventListener('click', function () {
  const yourBalance = getTextFieldById('your-balance');

  const donateMoney = getInputFieldById('input-kota-donate');
  console.log(donateMoney);

  const balance = getTextFieldById('kota-amount-balance');
  console.log(balance);
  if (
    typeof donateMoney === 'number' &&
    yourBalance > donateMoney &&
    donateMoney > 0
  ) {
    const nowYourBalance = yourBalance - donateMoney;

    const updateDonateBalance = donateMoney + balance;

    document.getElementById('your-balance').innerText = nowYourBalance;

    document.getElementById('kota-amount-balance').innerText =
      updateDonateBalance;

    console.log(updateDonateBalance, nowYourBalance);
  } else {
    alert('invalid input');
  }
});
