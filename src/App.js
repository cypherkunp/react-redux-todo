import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/add-todo/add-todo.component';
import TodoListContainer from './containers/todo-list.container';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <div className="app">
            <AddTodo />
            <TodoListContainer />
            <Footer />
        </div>
    );
}

export default App;
