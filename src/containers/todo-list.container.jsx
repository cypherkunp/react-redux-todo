import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../redux/actions';
import TodoList from '../components/todo-list/todo-list.component';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;

        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);

        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id));
        }
    };
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
