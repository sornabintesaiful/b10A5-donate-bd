
document.getElementById('btn-donate-nkhl').addEventListener('click', function () {
  const yourBalance = getTextFieldById('your-balance');
  const donateMoney = getInputFieldById('input-noyakhali-donate');
  console.log(donateMoney)

  const balance = getTextFieldById('nkhli-donation-balance');
  console.log(balance)
  if (typeof (donateMoney) === 'number' && yourBalance > donateMoney && donateMoney > 0) {
    const nowYourBalance = yourBalance - donateMoney;
    
    const updateDonateBalance = donateMoney + balance;

    document.getElementById('your-balance').innerText = nowYourBalance;
    
    document.getElementById('nkhli-donation-balance').innerText = updateDonateBalance;

    console.log(updateDonateBalance, nowYourBalance)
  }
  else {
    alert('invalid input')
  }
});