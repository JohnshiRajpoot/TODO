const todoContainer = document.querySelector('.todo-container');

todoContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const item = e.target.closest('.todo-item');
        const column = item.closest('.todo-column');
        const direction = e.target.classList.contains('right') ? 'nextElementSibling' : 'previousElementSibling';
        
        if (column[direction]) {
            column[direction].appendChild(item);
        }
    }
});
