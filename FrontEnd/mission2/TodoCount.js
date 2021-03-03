function TodoCount({ $app, initialState }) {
    this.state = initialState

    const $target = document.createElement('div')
    $target.className = 'TodoCount'
    $app.appendChild($target)

    this.$target = $target

    this.render = () => {
        const completedCount = this.state.filter((todo) => todo.isCompleted).length;
        this.$target.innerHTML = `Total :  ${this.state.length} / Completed : ${completedCount}`
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render()
}
