import React from 'react'
import useCounter from '../hooks/useCounter'


const Counter2 = () => {

    const [count, increment, decrement, reset] = useCounter(10, 1)


    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


export default Counter2