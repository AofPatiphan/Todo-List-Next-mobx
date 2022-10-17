import { useState } from 'react'
import todosStore, { ITodoModel } from "../../../stores/todoStore"
import { observer } from 'mobx-react-lite'

interface Props {
  todo: ITodoModel
}

function TodoListItems({ todo }: Props) {
  const [text, setText] = useState(todo.text)

  const onClickUpdateTodo = () => {
    todosStore.updateTodo(todo.id, text)
  }

  const handleClickDeleteTodo = () => {
    todosStore.deleteTodo(todo.id)
  }

  return (
    <>
      {
        <div className='flex pt-2 h-[40px] gap-[10px]' >
          <input
            id="checkbox"
            type="checkbox"
            className="w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <input type="text" value={text} className="border w-full h-full px-5" onChange={e => setText(e.target.value)} />
          <button type="button" className="bg-sky-500 w-[100px] rounded-lg h-full text-white" onClick={onClickUpdateTodo}>Update</button>
          <button type="button" className="bg-sky-500 w-[100px] rounded-lg h-full text-white" onClick={handleClickDeleteTodo}>Delete</button>
        </div>
      }
    </>
  )
}

const TodoListObserver = observer(TodoListItems)

function TodoList() {
  return (
    <>
      <h1 className='text-[32px] font-bold'>Todo List</h1>
      {
        todosStore.todosList.map((todo) => (
          <TodoListObserver todo={todo} key={todo.id} />
        ))
      }
    </>
  )
}

export default observer(TodoList)