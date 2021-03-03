export default function SearchResult({ $app, initialState }){
    this.state = initialState

    const $target = document.createElement('div')
    $target.className = 'SearchResult'
    $app.appendChild($target)

    this.$target = $target

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const htmlString = `${this.state.map(d => `<img src="${d.imageUrl}">`)
            .join('')}`
        this.$target.innerHTML = htmlString
    }
}
