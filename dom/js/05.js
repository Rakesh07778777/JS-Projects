const todoItem = JSON.parse(localStorage.getItem('todos')) || [{ name: 'Watching Youtube' }];

const div = document.querySelector('.js-todo__list');
const button = document.querySelector('.container button');

function renderHtml() {
  let html = '';

  todoItem.forEach((item, index) => {
    html += `
      <div class="todo">
        <p>${item.name}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;

    
  });

  div.innerHTML = html;

  // Add delete functionality
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.index;
      todoItem.splice(index, 1); // remove the todo
      saveTodo()
      renderHtml(); // re-render list
    });
  });
}

function addTodo() {
  const input = document.querySelector('.js-input');
  const name = input.value.trim();

  if (name === '') return;

  todoItem.push({ name });
  input.value = '';
  renderHtml();
  function loadItem() {
 JSON.parse(localStorage.getItem(name))

  }
loadItem()
saveTodo()
}


button.addEventListener('click', addTodo);
function saveTodo() {
    localStorage.setItem('todos' , JSON.stringify(todoItem))
}



renderHtml();
