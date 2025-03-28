'use client'

import useSWR from "swr"

//write fetcher function: fetcher function name can be anything
function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}

export default function FetchPostUsingSWR() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const { data, error, isLoading } = useSWR(url, fetcher)

    if (error) {
        return <h1>Failed to Return {JSON.stringify(error)}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (data.length > 0) {
        return <>
            <ul>
                {data.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    } else {
        return <h1>OOps data not found</h1>
    }
}