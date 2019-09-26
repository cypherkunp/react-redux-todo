import React from 'react';
import PropTypes from 'prop-types';
import Todo from './../todo/todo.component';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} onClick={() => onTodoClick(index)} {...todo} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
