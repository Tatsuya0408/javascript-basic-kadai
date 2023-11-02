const beforeBtn = document.getElementById('btn');
const text = document.getElementById('text');

beforeBtn.addEventListener('click', setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
}, 2000));