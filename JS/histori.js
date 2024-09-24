
const donationTap = document.getElementById('btn-donation-nav');
const historyTap = document.getElementById('btn-history-nav');
// histoy click strt
historyTap.addEventListener('click', function () {
  historyTap.classList.remove(
    'border-opacity-35',
    'border',
    'border-slate-400',
    'text-opacity-70'
  );
  historyTap.classList.add(
    'bg-[#B4F461]',
    'text-[#111111]'
  );
  donationTap.classList.remove(
    'text-[#111111]',
    'bg-[#B4F461]'
  );
  donationTap.classList.add(
    'border-opacity-35',
    'border',
    'border-slate-400',
    'text-opacity-70'
  )
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('history-detailes').classList.remove('hidden');
  console.log('hstry btn clicked')
});
// histoy click ends
// donation btn click
donationTap.addEventListener('click', function () {
  donationTap.classList.remove(
    'border-opacity-35',
    'border',
    'border-slate-400',
    'text-opacity-70'
  );
  donationTap.classList.add('bg-[#B4F461]', 'text-[#111111]');
  historyTap.classList.remove('text-[#111111]', 'bg-[#B4F461]');
  historyTap.classList.add(
    'border-opacity-35',
    'border',
    'border-slate-400',
    'text-opacity-70'
  );
  document.getElementById('main-section').classList.remove('hidden');
  document.getElementById('history-detailes').classList.add('hidden');
  console.log('dntn btn clicked');
});