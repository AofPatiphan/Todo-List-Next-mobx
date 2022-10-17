import todosStore from "../../stores/todoStore"
import { observer } from 'mobx-react-lite'

function TodoCard() {
  return (
    <div className='mt-10 grid grid-cols-12 gap-10'>
      {
        todosStore.todosList.map(e => (
          <div key={e.id} className='col-span-3 flex flex-col items-center border'>
            <div>{e.id}</div>
            <div>{e.text}</div>
            <div>{e.done}</div>
          </div>
        ))

      }
    </div>
  )
}

export default observer(TodoCard)