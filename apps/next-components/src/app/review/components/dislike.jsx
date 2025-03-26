'use client'

import { Comments } from "@/app/review/components/comments"

export function Dislike() {
    return <>
        <h1>Dislike Client Component</h1>
        {/* Client Component uses server component */}
        <Comments />
    </>
}