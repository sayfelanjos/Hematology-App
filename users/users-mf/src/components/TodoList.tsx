import React from 'react';

const TodoList: React.FunctionComponent = () => {
    const todos = [{id: 't1', text: 'Finish the course'}];
    return (
        <ul>
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
            {todos.map(todo => (<li key={todo.id}>{todo.id}</li>))}
        </ul>
    );
};

export default TodoList;