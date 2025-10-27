const body = document.querySelector('body');
const button = document.querySelector('.btn');
const ul = document.querySelector('ul');

const items = [{ texts: 'example item' }];

function renderHtml() {
  let empHtml = '';
  items.forEach((item) => {
    empHtml += `<li>${item.texts}</li>`;
  });
  ul.innerHTML = empHtml;
}

button.addEventListener('click', addToHtml);

function addToHtml() {
  const input = document.querySelector('.js__input');
  const texts = input.value.trim();

  if (texts === '') return; // stop if empty

  items.push({ texts });
  input.value = '';
  renderHtml();
}

renderHtml();
