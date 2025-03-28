import todos from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(todos)
}

//POST
export async function POST(request) {
    //read payload
    const payload = await request.json()
    return NextResponse.json(payload)
}