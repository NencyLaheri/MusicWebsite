import { NextResponse } from "next/server"


export const GET=async (request)=>
{
    return new NextResponse(JSON.stringify({num:Math.random()*10}))
}


