export default function TodoList({ $app, initialState = {isLoading : false, todos : [] } , onClick, onRemove}) {
    this.$target = document.createElement('div')
    this.$target.className = 'TodoList'
    $app.appendChild(this.$target)

    this.onClick = onClick
    this.onRemove = onRemove
    this.state = initialState
  
    this.$target.addEventListener('click', function(e) {
      const id = e.target.closest('li').dataset.id
  
      if (e.target.className === 'remove-button') {
        e.stopPropagation()
        onRemove(id)
      } else {
        onClick(id)
      }
    })
  
    this.setState = function(nextData) {
      data = nextData
      this.render()
    }
  
    this.render = function() {
      if(this.state.isLoading){
        this.$target.innerHTML = '로딩중입니다...'
      } else {
        const htmlString = this.state.todos.map(function(todo) {
          const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>`: `${todo.content}`
    
          return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`

      })
  
      $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
      }
    }
  
    this.render()
  }
