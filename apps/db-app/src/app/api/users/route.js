//create and findAll

import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request) {
    try {
        const user = await request.json()
        const response = await prisma.user.create({
            data: user
        })
        return new NextResponse(JSON.stringify(response), {
            status: 201,
            headers: {
                "ContentType": "application/json"
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}