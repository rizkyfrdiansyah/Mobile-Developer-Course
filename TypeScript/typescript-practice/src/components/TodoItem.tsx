import React from 'react'
import { Todo } from '../TodoType'

type TodoItemProps = {
    todo: Todo
    toggleCompleted: (todoId: number) => void
}

const TodoItem = ({ todo, toggleCompleted }: TodoItemProps) => {
  const getTodoTitleStyle = (): { textDecoration: 'line-through' | 'none' } => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={(): void => toggleCompleted(todo.id)}
      />
      
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button}>x</button>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem