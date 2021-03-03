import TodoList from "./TodoList"

const END_POINT = 'https://todo-api.roto/codes'

const request = async (url, method = 'GET', bdoy) => {
    try {
        const res = await fetch('${END_POINT}${url}?delay=5000', {
            method,
            body,
            headers : {
                'Content-Type' : 'application/json',
            },
        })

        if(!res.ok){
            throw new Error('서버에 문제가 있습니다.')
        }
        return await res.json()
    }catch(e){}
}

export const fetchData = async (username) => {
    return await request('')
}

export const createTodo = async (username, todoText) => {
    await request(
        '/${username}?delay=5000', 
        'POST',
        JSON.stringify({
        content : TodoText,
        })
    )
}
