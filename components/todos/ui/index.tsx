import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoCard from './TodoCard'

function TodosCompIndex() {
  return (
    <div className='px-10 mt-6'>
      <TodoList />
      <AddTodo />
      <TodoCard />
    </div>
  )
}

export default TodosCompIndex