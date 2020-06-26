const container = document.querySelector('#container');
const input = document.createElement('input');
const btn = document.createElement('button');
const ul = document.createElement('ul');
btn.textContent = 'Добавить';
container.appendChild(input);
container.appendChild(btn);
container.appendChild(ul);

if (localStorage.getItem('tasks') && localStorage.getItem('tasks').length != 0) {
  const sorted_list = JSON.parse(localStorage.getItem('tasks'));
  sorted_list.forEach(function (elem) {
    element = document.createElement('li');
    element.textContent = elem;
    ul.appendChild(element);
  });
}

function sort() {
  const list_arr = Array.from(document.querySelectorAll('li'));
  const sorted_list = list_arr.map((elem) => elem.textContent).sort();
  localStorage.setItem('tasks', JSON.stringify(sorted_list));
  sorted_list.forEach(function sorter(elem, index) {
    list_arr[index].textContent = elem;
  });
  return null;
}

btn.addEventListener('click', function () {
  if (input.value.length != 0 && input.value.replace(/\s/g, '') != '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
    sort();
  }
});

input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});
