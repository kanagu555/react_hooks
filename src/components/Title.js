import React from 'react'

const Title = () => {
    console.log('Rendering title');
    return (
        <div>
            <h1>useCallBack Hook</h1>
        </div>
    )
}

export default React.memo(Title)