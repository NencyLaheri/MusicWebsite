import { NextResponse } from "next/server"
import Post from "@/models/Post";
import dbConnect from "../../../../config/dbConnect";
// import connect from "@/utils/db";

dbConnect();
export const GET=async (request)=>
{
    // await connect();
    try{
   
        const posts=await Post.find();
        return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err)
    {
        return new NextResponse("Database Error",{status:500})
    }
    
}