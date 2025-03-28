import todos from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = (await params).id
    const response = todos.filter(todo => todo.id === parseInt(id))
    if (response.length === 0) {
        return NextResponse.json({ message: 'No Todos Found' })
    }
    return NextResponse.json(response)
}