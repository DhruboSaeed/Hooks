import React, { useState, useEffect } from 'react'

function EffectHooks() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} time`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count} time clicks</button>
        </div>
    )
}

export default EffectHooks
