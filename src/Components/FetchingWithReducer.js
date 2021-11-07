import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingWithReducer() {

    const [loading, setLocading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLocading(false)
                setPost(res.data)
                setError('')
            })
            .catch(error => {
                setLocading(false)
                setPost({})
                setError('Something ERROR!!')
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchingWithReducer
