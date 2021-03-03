import { fetchJjal } from "./api.js"
import SearchInput from "./SearchInput.js"
import SearchResult from "./SearchResult"
import SearchHistory from "./SearchHistory.js"

export default function App($app) {
    this.state = {
        histories : [],
        searchData : []
    }

    const createNextHistories = (keyword) => {
        if(this.state.histories.includes(keyword)) {
            return [...this.state.histories]
        }

        return [...this.state.histories, keyword]
    }

    const searchInput = new SearchInput({
        $app,
        onSearch : async (keyword) => {
            const data = await fetchJjal(keyword)
            this.setState({
                histories : [...this.state.histories, keyword],
                searchData : data
            })
        },
    })

    const searchHistory = new SearchHistory({
        $app,
        initialState : this.state.histories,
        onClick : async (keyword) => {
            const data = await fetchJjal(keyword)
            this.setState({
                ...this.state,
                searchData : data,
            })
        },
    })

    const searchResult = new SearchResult({
        $app,
        initialState : this.state.searchData
    })

    this.setState = (nextState) => {
        this.state = nextState
        searchHistory.setState(this.state.histories)
        searchResult.setState(this.state.searchData)
    }
}
