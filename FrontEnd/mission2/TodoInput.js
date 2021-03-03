

function TodoInput({$app, onTodoInput}){
    const $todoInput = document.createElement('input')
    $todoInput.placeholder = 'Enter the work!'

    const $addButton = document.createElement('button')
    $addButton.textContent = 'ADD'
    
    $app.appendChild($todoInput)
    $app.appendChild($addButton)

    const callOnTodoInput = () => {
        const item = $todoInput.value
        if (item) {
          onTodoInput(item)
          $todoInput.value = ''
        }
        else{
            alert('할 일을 입력해주세요!')
        }
    }
    
    $addButton.addEventListener('click', (e) => {
        callOnTodoInput()
    })

    $todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            callOnTodoInput()
        }
    })

    this.render = () => {}
}
