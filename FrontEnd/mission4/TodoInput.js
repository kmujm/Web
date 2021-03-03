export default function TodoInput({$app, initialState, onAdd }) {
    const isRendered = false

    this.$target = document.createElement('div')
    this.$target.className = 'TodoInput'
    $app.appendChild(this.$target)

    this.state = initialState
    this.onAdd = onAdd
    
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(!isRendered) {
            this.$target.innerHTML = '<input type="text" id="todo-input"/> <button type="button" id="add-todo-button">Add</button>'
            
            isRendered = true
        }

        const $input = this.$target.querySelector('.todo-input')
        const $button = this.$target.querySelector('.add-todo-button')
        if (this.state.isLaoading) {
            $input.setAttribute('disabled', true)
            $button.setAttribute('disabled', true)
        } else {
            $input.removeAttribute('disabled')
            $button.removeAttribute('disabled')

        }

        
    }
    
    this.render()

    this.$target.querySelector('.add-todo-button').addEventListener('click', () => {
        const $todoInput = this.$target.querySelector('.todo-input')
        const text = $todoInput.value

        this.onAdd(text)
    })
}
