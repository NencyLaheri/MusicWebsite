import { NextResponse } from "next/server"
import User from "@/models/User";
import dbConnect from "../../../../config/dbConnect";

dbConnect();

export const GET=async (request)=>
{
    
    try{    
       
        // await connect();
        console.log("======");
        const users=await User.find(); 
        return new NextResponse(JSON.stringify(users),{status:200})
    }catch(err)
    {
        return new NextResponse("Database Error",{status:500})
    }
    
}


// export async function GET(request)
// {
//     try {
     
//         return new Response("hello next next js")
//     } catch (error) {
//         return new Response("hello next js")
//     }
    
// }

export const POST = async (request)=>{
    try{
         // const requestBody = request.body;
      const requestBody1 = await request.text();
      // console.log("request body", requestBody);
      console.log("request body", requestBody1);
    }
    catch(err){
        return new NextResponse("Error",{status:500})
    }
}