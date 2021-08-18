import React, {useState, useEffect} from 'react'


const UseEffectHooks1 = () => {

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    useEffect (() => {
        document.title = `You have clicked ${count} times`
    })

    return (
        <div>
            <button onClick={addCount}>Click {count} times</button>
        </div>
    )
}


export default UseEffectHooks1