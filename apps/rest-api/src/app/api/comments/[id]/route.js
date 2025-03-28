import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/comments`

//findBy id
export async function GET(request, { params }) {
    const id = (await params).id
    const response = await fetch(`${url}/${id}`)
    const comment = await response.json()
    if (comment.id) {
        return NextResponse.json(comment)
    }

    return NextResponse.json({ message: `Comment for ${id} Not Found` })
}
//update logic

export async function PUT(request, { params }) {

    try {
        const id = (await params).id
        //for we are going to update
        const { name, email, body } = await request.json()
        if (name || email || body) {
            const response = await fetch(`${url}/${parseInt(id)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, body })
            })
            if (!response.ok) {
                return new NextResponse(JSON.stringify({ message: `Comment for ${id} Not found` }), {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            //updatedComment
            const updatedComment = await response.json()
            console.log(updatedComment)
            return NextResponse.json(updatedComment)
        }

    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}

//delete
export async function DELETE(request, { params }) {
    try {
        const id = (await params).id
        const response = await fetch(`${url}/${parseInt(id)}`, {
            method: 'DELETE'
        })
        const comment  = await response.json()
        console.log(comment)
        if (!response.ok) {
            return new NextResponse(JSON.stringify({ message: `Comment for ${id} Not found` }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        return NextResponse.json({ message: 'Comment has been deleted' })
    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}