const validateData = (data) => {
    //null or undefined
    if(!data) {
        throw new Error(ERROR_MESSAGE.IS_UNDEFINED_OR_NULL)
    }

    const isValidData = data.every((item) => typeof item.text === 'string')

    if(!isValidData) {
        throw new Error(ERROR_MESSAGE.IS_NOT_STRING)
    }
}

function TodoList({ $app, initialState, onClick }){
    this.validation = () => {
        this.state = initialState

        if(!new.target) {
            throw new Error(ERROR_MESSAGE.MISSING_NEW_KEYWORD)
        }

        validateData(this.state)
    }

    this.validation()
    this.onClick = onClick

    const $target = document.createElement('ul')
    $target.className = 'TodoList'
    $app.appendChild($target)

    this.$target = $target

    

    this.render = function() {
        this.$target.innerHTML = this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li data-index="${index}" class="list">${
              isCompleted ? `<s>${text}</s>` : text
            }</li>`
        ).join('')
    } 

    this.setState = function(nextState) {
         this.validation(nextState)
         this.state = nextState
         this.render()
    }

    this.render()

    this.$target.addEventListener('click', (e) => {
        const index = parseInt(e.target.closest('li').dataset.index)
        this.onClick(index)
    })

}

const ERROR_MESSAGE = {
    IS_UNDEFINED_OR_NULL : 'data가 undefined 또는 null인 상태입니다.',
    IS_NOT_STRING : 'data는 문자여야 합니다.',
    MISSING_NEW_KEYWORD : 'new 키워드가 누락되었습니다.',
    NO_MESSAGE : '할 일을 입력하고 버튼을 눌러주세요.'
}
