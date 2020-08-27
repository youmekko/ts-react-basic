import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(count + 1)
    const onDecrease = () => setCount(count - 1)

    /**
     * (예제) 
     * 상태가 null 일 수도 있고 아닐 수도 있을 때는 Generic를 사용하면 좋다.
     */
    type information = { name: string, description: string}
    const [info, setInfo] = useState<information | null>(null)

    /**
     * (예제)
     * 추가적으로 상태의 타입이 까다로운 구조를 가진 객체이거나 배열 일 때도 Generics를 명시하는 것이 좋다.
     */

    type Todo = { id: number, text: string, done: boolean }
    const [todos, setTodos] = useState<Todo[]>([])
    
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter


