import React from 'react';

const TodoList = (props) => {
   
    return (
        <>
        <div className='todo_style'>
        <i class="fa fa-trash" onClick={() => {
                props.onSelect(props.id);
            }} aria-hidden="true"></i>
            {/* <i class="fa fa-times" aria-hidden="true"/> */}
        <li>{props.text}</li>
        </div>
        </>
    );
}
export default TodoList;