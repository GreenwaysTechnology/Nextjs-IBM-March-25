//'use client'

import { useState } from "react"

export function Like() {
    const [like, setLike] = useState(0)
    return <div>
        <h1>Like {like}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>Like</button>
    </div>
}