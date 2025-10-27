const button = document.querySelector('.btn');
const ul = document.querySelector('ul');

const items = [{ texts: 'example item' }];

// Function to render the list
function renderHtml() {
  ul.innerHTML = ''; // clear previous content

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.texts;

    // Create delete button for each li
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.marginLeft = '10px';

    // Delete event
    delBtn.addEventListener('click', () => {
      items.splice(index, 1); // remove item from array
      renderHtml();           // re-render list
    });

    li.appendChild(delBtn);
    ul.appendChild(li);
  });
}

// Function to add new item
function addToHtml() {
  const input = document.querySelector('.js__input');
  const texts = input.value.trim();

  if (texts === '') return; // prevent empty input

  items.push({ texts });
  input.value = '';
  renderHtml();
}

// Event listener
button.addEventListener('click', addToHtml);

// Initial render
renderHtml();
