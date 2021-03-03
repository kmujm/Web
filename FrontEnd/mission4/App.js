import TodoList from './TodoList.js'
import { createTodo, fetchData } from './api.js'
import TodoInput from './TodoInput.js'

export default function App({ $app }) {
  const username = 'jungmin'
  this.state = {
      isLoading : false,
      todos : []
  }

  const todoInput = new TodoInput({
    $app,
    initialState : {
    isLoading : false,
    },
    onAdd : async (todoText) => {
      if (todoText.length > 0) {
        this.setState({
          ...this.state,
          isLoading : true
        })
        // 데이터 추가하기
        await createTodo(username, todoText)
           
        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await fetchData()

        this.setState({
          isLoading : false,
          todos : updatedData
        })
      }
    },
  })
  const todoList = new TodoList({
    $app,
    todos : this.state.todos,
    onClick: async (id) => {

      await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
          method: 'PUT',
      })
  
      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData()
      todoList.setState(updatedData)
    },
    onRemove: async function (id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
         method: 'DELETE',
      })
  
      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData()
      todoList.setState(updatedData)
    },
  })
  

  this.setState = (nextState) => {
    this.state = nextState

    todoList.setState({
      isLoading : this.state.isLoading,
      todos : this.state.todos
    })
    todoInput.setState({
      isLoading : this.state.isLoading,
    })
  }

  const init = async () => {
    try{
      this.setState({
        ...this.state,
        isLoading : true,
      })
      const todos = await fetchData(username)
        this.setState({
        ...this.state,
        todos,
        isLoading : false,
        })
    } catch(e) {
        alert(e.message)
        this.setState({
        ...this.state,
        isLoading : false,
        })
      }
  }

  init()
}
