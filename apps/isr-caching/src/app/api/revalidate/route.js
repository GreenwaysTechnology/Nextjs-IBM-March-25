//revalidation code

import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

// export async function GET(request, { params }) {
//     //get the path
//     const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
//     //clear the cache
//     revalidatePath(path)
//     console.timeLog('revalidated', path)
//     return NextResponse.json({ revalidate: true, now: new Date.now(), cache: 'no-store' })
// }

export async function GET(request, { params }) {
    //get the path
    const tag = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    //clear the cache
    revalidateTag(tag)
    console.timeLog('revalidated', tag)
    return NextResponse.json({ revalidate: true, now: new Date.now(), cache: 'no-store' })
}