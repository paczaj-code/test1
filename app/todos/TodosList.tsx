import React from 'react';
import Link from 'next/link';

interface TodoTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: TodoTypes[] = await res.json();

  return todos;
};

const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
