'use client'

import { useState } from "react"

export function Like() {
    const [like, setLike] = useState(0)
    const onLike = () => {
        console.log('like ',like)
        setLike(like + 1)
    }
    return <div>
        <h1>Like {like}</h1>
        <button onClick={onLike}>Like</button>
    </div>
}