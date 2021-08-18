import React, {useEffect, useRef} from 'react'


const FocusInput = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <span>Login: </span>
            <input ref={inputRef} type='text' />
        </div>
    )
}


export default FocusInput