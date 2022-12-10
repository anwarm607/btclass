
const circleClick = () => {
    // console.log('Clicked');
    let checkIcon = document.getElementById('check');
    checkIcon.style.display = 'block';
    let todoItem = document.getElementById('todo_item_heading');
    // console.log(todoItem);
    todoItem.style = 'color: grey; text-decoration: line-through';
}