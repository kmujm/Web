export default function debounce(callback, time) {
    let timer 

    return(...params) => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            timer = null
            callback(...params)
        }, time)
    }
}
