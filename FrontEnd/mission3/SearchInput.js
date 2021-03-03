import debounce from './debounce.js'

export default function SearchInput({ $app, onSearch }) {
    const $target = document.createElement('input')
    $target.className = 'SearchInput'
    $app.appendChild($target)

    this.$target = $target
    this.onSearch = onSearch

    $target.addEventListener(
        'keyup', 
        debounce((e) => {
            const keyword = e.target.value

            if(keyword.length > 0){
                e.target.value = ''
                console.log(keyword)
                this.onSearch(keyword)
            }
            
        },1000)
    )
} 
