const validateData = (data) => {
    //null or undefined
    if(!data) {
        throw new Error('data가 null이거나 undefined입니다.')
    }

    const isValidData = data.every((item) => typeof item.text === 'string')
    
    if(!isValidData) {
        throw new Error('data는 문자여야 합니다.')
    }
}

function TodoList(initialState, $target){
    this.validation = () => {
        this.state = initialState

        if(!new.target) {
            throw new Error('new 키워드가 누락되었습니다.')
        }

        validateData(this.state)
    }
    this.render = () => {
        todoItem = this.state.map(item => item.isCompleted ? `<li><s>${item.text}</s></li>` : `<li>${item.text}</li>`).join('\n')
        todoItem = '<ul>' + todoItem + '</ul>'
        $target.innerHTML = todoItem
    } 

    this.setState = (nextState) => {
         this.validation(nextState)
         this.state = nextState
         this.render()
    }
     
    this.validation()
    this.render()
}