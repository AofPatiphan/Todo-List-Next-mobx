import todosStore from "../../../stores/todoStore"
import { observer } from 'mobx-react-lite'
import { FormEvent, ChangeEvent } from "react"

function AddTodo() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todosStore.addTodo()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    todosStore.todo.text = e.target.value
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-x-4 h-[40px] mt-2">
        <input type="text" value={todosStore.todo.text} placeholder="New todo" className="border w-full h-full px-5 col-span-10" onChange={handleChange} />
        <button className={`${todosStore.todo.text ? 'bg-sky-500 text-white' : 'bg-slate-200'} w-full rounded-lg h-full col-span-2`} disabled={!todosStore.todo.text} >Add todo</button>
      </div>
    </form>
  )
}

export default observer(AddTodo)