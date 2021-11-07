import React, { useState } from 'react'

function ObjectHooks() {

    const [name, setName] = useState({ firstname: '', lastname: '' })

    return (
        <form>
            <input type='text' value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })} />
            <input type='text' value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value })} />
            <br />
            <h2>Your First Name is - {name.firstname}</h2>
            <h2>Your Last Name is - {name.lastname}</h2>
        </form>
    )
}

export default ObjectHooks
