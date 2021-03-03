export default function SearchHistory({ $app, initialState, onClick }) {
    this.state = initialState

    const $target = document.createElement('ul')
    $target.className = 'SearchHistory'
    $app.appendChild($target)

    this.$target = $target
    this.onClick = onClick

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        this.$target.innerHTML = this.state.map(historyKeyword => `<li data-keyword="${historyKeyword}">${historyKeyword}</li>`).join('')
    }

    $target.addEventListener('click', (e) => {
        const $li = e.target.closest('li')
        const {keyword} = $li.dataset

        this.onClick(keyword)
    })

    this.render()
}
