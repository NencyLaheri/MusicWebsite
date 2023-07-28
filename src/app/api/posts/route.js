import { NextResponse } from "next/server"
import Post from "@/models/Post";
import dbConnect from "../../../../config/dbConnect";

dbConnect();
export const GET=async (request)=>
{
    try{
        // await connect();
        const posts=await Post.find();
        return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err)
    {
        return new NextResponse("Database Error",{status:500})
    }
    
}