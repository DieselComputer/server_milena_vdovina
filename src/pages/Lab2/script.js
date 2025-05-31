class ToDo {
    constructor(){
        this.input = document.getElementById('input');
        this.tasklist = document.getElementById('tasklist');
        this.button = document.getElementById('button');
        this.initialize();
    }
    initialize() {
        
        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Ок';
        buttonEl.addEventListener('click', () => this.addTask());
        this.button.appendChild(buttonEl);
        this.load();
    }
    addTask() {
        const text = this.input.value.trim();
        if (text != '') {
            this.createTaskEl(text);
            this.save(text);
            this.input.value = '';
        }
        
    }
    createTaskEl(text) {
        const item = document.createElement('li');
        item.className = 'task';
        const textEl = document.createElement('span');
        textEl.textContent = text;
        const del = document.createElement('button');
        del.className = 'del-btn'
        del.textContent = 'Удалить';
        del.addEventListener('click', () => {
            item.remove();
            this.del(text);
            
        });
        item.appendChild(textEl);
        item.appendChild(del);
        this.tasklist.appendChild(item);
    }
    del(text){
        const tasks = this.get().filter(task => task != text);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    get(){
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
    save(task) {
        const tasks = this.get();
        if (task != null){
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
            
        
    }
    load() {
    
            
                const tasks = localStorage.getItem('tasks');
                if (tasks) {
                    JSON.parse(tasks).forEach(task => {
                        this.createTaskEl(task);
                    });
                }
            
    }
}
document.addEventListener('DOMContentLoaded', () => {
        new ToDo();
  });  
