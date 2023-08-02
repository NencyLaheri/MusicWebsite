// import connect from "@/utils/db";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import dbConnect from "../../../../../config/dbConnect";

dbConnect();
export const POST=async (request)=>
{
    // console.log("data --------------->",request.text())
    const newdata = await request.json(); 
    console.log("new data", newdata)
    // const {data}=await request.json();
    // await connect();

    if (!newdata || !newdata.password) {
        return new NextResponse("Invalid request data", { status: 400 });
      }
    // const hashedPsw=await bcrypt.hash(newdata.password)

    const newUser=new User({username: newdata.username,email: newdata.email,password: newdata.password,})

    try
    {
        await newUser.save();
        console.log("user saveeeee")
        return new NextResponse("User has been created",{status:201});
    }catch(err)
    {
        return new NextResponse(err.message,{status:500,});
    }
}