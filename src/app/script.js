import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

class Todo {
  #todoLists = JSON.parse(localStorage.getItem('Todos')) || [];
  #index = parseInt(localStorage.getItem('TodosIndex')) || 0;
  #currentState;
  #currentStatusFilter = 'all'; // Default to show all todos
  #currentCategoryFilter = 'all'; // Default to show all categories

  constructor() {
    this.form = document.querySelector('form');
    this.todoInput = document.querySelector('.todoInput');
    this.todoContainer = document.querySelector('.todo--section');
    this.categoryInput = document.querySelector('.todoCategory'); // For selecting categories
    this.allBtn = document.querySelector('.all');
    this.activeBtn = document.querySelector('.active');
    this.completedBtn = document.querySelector('.completed');
    this.navBtns = document.querySelectorAll('.nav');
    this.bgToggle = document.querySelector('.bgToggle');
    this.itemsCounter = document.querySelector('.itemsCounter');
    this.clearCompleted = document.querySelector('.clearCompleted');
    this.categoryFilter = document.querySelector('.categoryFilter'); // Category filter dropdown

    this.form.addEventListener('submit', this._addTodoItem.bind(this));
    this.todoContainer.addEventListener('click', this._toggleMenuBtns.bind(this));
    this.todoContainer.addEventListener('click', this._changeStatus.bind(this));
    this.todoContainer.addEventListener('click', this._deleteTodo.bind(this));
    this.allBtn.addEventListener('click', () => this._filterTodosByStatus('all'));
    this.activeBtn.addEventListener('click', () => this._filterTodosByStatus('active'));
    this.completedBtn.addEventListener('click', () => this._filterTodosByStatus('completed'));
    this.categoryFilter.addEventListener('change', this._filterByCategory.bind(this));
    this.navBtns.forEach((nav) => nav.addEventListener('click', this._toggleActiveNav.bind(this)));
    this.bgToggle.addEventListener('click', this._toggleBackgroundColor.bind(this));
    this.clearCompleted.addEventListener('click', this._clearCompletedTodo.bind(this));

    this._renderTodoItem();
    this._countTodo();
  }

  _clearCompletedTodo() {
    this.#todoLists = this.#todoLists.filter((allTodo) => !allTodo.isCompleted);
    localStorage.setItem('Todos', JSON.stringify(this.#todoLists));
    this._renderTodoItem();
    this._countTodo();
  }

  _countTodo() {
    this.itemsCounter.textContent = this.#todoLists.length ? `${this.#todoLists.length} items remaining` : "You haven't added any todo";
  }

  _filterByCategory() {
    this.#currentCategoryFilter = this.categoryFilter.value; // Update the current category filter
    this._renderTodoItem(); // Re-render todos based on the category
  }

  _filterTodosByStatus(status) {
    this.#currentStatusFilter = status; // Update the current status filter
    this._renderTodoItem(); // Re-render todos based on the status
  }

  _renderTodoItem() {
    let filteredTodos = [];

    // First filter by category
    if (this.#currentCategoryFilter === 'all') {
      filteredTodos = this.#todoLists;
    } else {
      filteredTodos = this.#todoLists.filter(todo => todo.category === this.#currentCategoryFilter);
    }

    // Then filter by status (all, active, completed)
    if (this.#currentStatusFilter === 'active') {
      filteredTodos = filteredTodos.filter(todo => todo.isActive && !todo.isCompleted);
    } else if (this.#currentStatusFilter === 'completed') {
      filteredTodos = filteredTodos.filter(todo => todo.isCompleted);
    }

    let html = '';
    filteredTodos.forEach((todo) => {
      html += `
        <div class="todo--container relative flex cursor-pointer items-center justify-between border-b border-veryDarkGrayishBlue bg-veryLightGray px-5 py-4 dark:border-veryLightGrayishBlue dark:bg-veryDarkDesaturatedBlue" draggable="true">
          <div class="todo-content flex items-center">
            <input type="checkbox" class="mr-3 exclude-me cursor-pointer" id="${todo.id}" ${todo.isCompleted ? 'checked' : ''}/>
            <p class="text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">${todo.todo}</p>
            <p class="text-xs text-gray-500 ml-4">${todo.dateTime}</p>
            <p class="text-xs text-gray-500 ml-4">${todo.category}</p>
          </div>

          <i class="fa-solid exclude-me fa-ellipsis fa-lg cursor-pointer text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>

          <div class="status-menu absolute right-0 top-8 hidden h-[100px] w-[120px] flex-col justify-center gap-[0.5rem] rounded-lg bg-veryLightGray px-2 z-10 dark:bg-veryDarkGrayishBlue">
            <div class="exclude-me status-option flex cursor-pointer items-center justify-around" data-status="done" id="${todo.id}">
              <i class="fa-solid fa-check text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">Done</p>
            </div>
            <div class="exclude-me status-option flex cursor-pointer items-center justify-around" data-status="in-progress" id="${todo.id}">
              <i class="fa-solid fa-spinner text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">In Progress</p>
            </div>
            <div class="exclude-me delete-container flex cursor-pointer items-center justify-around border-t border-veryDarkGrayishBlue pt-2" id="${todo.id}">
              <i class="exclude-me fa-solid fa-trash text-veryDarkGrayishBlue dark:text-lightGrayishBlue"></i>
              <p class="exclude-me text-sm text-veryDarkGrayishBlue dark:text-lightGrayishBlue">Delete</p>
            </div>
          </div>
        </div>`;
    });

    this.todoContainer.innerHTML =
      html || `<div class="relative flex cursor-pointer items-center justify-between bg-veryLightGray px-5 py-4 dark:bg-veryDarkDesaturatedBlue text-veryDarkGrayishBlue dark:text-lightGrayishBlue text-sm">There are no todos at this time!</div>`;
  }

  _toggleMenuBtns(e) {
    let elipsis = e.target.closest('.fa-ellipsis');
    if (!elipsis) return;

    // Toggle the visibility of the status menu
    const statusMenu = elipsis.nextElementSibling;
    statusMenu.classList.toggle('hidden');
    statusMenu.classList.toggle('flex');
  }

  _changeStatus(e) {
    let statusBtn = e.target.closest('.status-option');
    if (!statusBtn) return;

    const todoIndex = this.#todoLists.findIndex((todo) => todo.id === parseInt(statusBtn.id));
    if (statusBtn.dataset.status === 'done') {
      this.#todoLists[todoIndex].isCompleted = true;
      this.#todoLists[todoIndex].isActive = false;
    } else if (statusBtn.dataset.status === 'in-progress') {
      this.#todoLists[todoIndex].isCompleted = false;
      this.#todoLists[todoIndex].isActive = true;
    }

    localStorage.setItem('Todos', JSON.stringify(this.#todoLists));
    this._renderTodoItem();
    this._countTodo();
  }

  _deleteTodo(e) {
    let delBtn = e.target.closest('.delete-container');
    if (!delBtn) return;

    const todoIndex = this.#todoLists.findIndex((todo) => todo.id === parseInt(delBtn.id));

    this.#todoLists.splice(todoIndex, 1);
    localStorage.setItem('Todos', JSON.stringify(this.#todoLists));
    this._renderTodoItem();
    this._countTodo();
  }

  _addTodoItem(e) {
    e.preventDefault();

    this.#currentState = this.#todoLists.every((todoItem) => !todoItem.isEditing);

    if (this.todoInput.value) {
      const currentDateTime = new Date().toLocaleString(); // Get current date and time
      const category = this.categoryInput.value; // Get the selected category

      if (this.#currentState) {
        ++this.#index;
        localStorage.setItem('TodosIndex', this.#index);

        let storage = {
          id: this.#index,
          todo: this.todoInput.value.trim(),
          isActive: true,
          isCompleted: false,
          isEditing: false,
          dateTime: currentDateTime,
          category: category,
        };

        this.#todoLists.push(storage);
      } else {
        let editedIndex = this.#todoLists.findIndex((todoItem) => todoItem.isEditing);
        this.#todoLists[editedIndex].todo = this.todoInput.value;
        this.#todoLists[editedIndex].isEditing = false;
        this.#todoLists[editedIndex].dateTime = currentDateTime;
        this.#todoLists[editedIndex].category = category;
      }
    }

    localStorage.setItem('Todos', JSON.stringify(this.#todoLists));
    this.todoInput.value = '';
    this._renderTodoItem();
    this._countTodo();
  }

  _toggleActiveNav(e) {
    this.navBtns.forEach(nav => nav.classList.remove('nav-active'));
    e.target.classList.add('nav-active');
  }

  _toggleBackgroundColor() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      this.bgToggle.src = sunIcon;
      this.bgToggle.alt = 'icon sun';
    } else {
      this.bgToggle.src = moonIcon;
      this.bgToggle.alt = 'icon moon';
    }
  }
}

const todo = new Todo();
