const input = document.getElementById('todoInput');
function addTodo(){
    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    const hint = document.getElementById('hint');
    if (input.value.trim() === ''){
        hint.textContent = 'Error';
        return;
    }
    let str = input.value;
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    item.textContent = str;
    input.value='';
    list.appendChild(item);
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.onclick = function(){
        list.removeChild(item);
    }
    item.appendChild(deleteButton);
    hint.textContent ='';
}
input.addEventListener('keydown',function(event){
        if(event.key ==='Enter')
        addTodo();
    }
);