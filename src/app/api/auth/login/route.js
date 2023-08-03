import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcryptjs';
import dbConnect from "../../../../../config/dbConnect";

dbConnect();
export const POST=async (request)=>
{
    const logindata = await request.json();
    console.log("login dataaaaaa",logindata)
    const {email,password}=logindata;
    console.log("emailllllll",email);
    console.log('passwordddd',password)

    try
    {
        const user = await User.findOne({ email });
        // console.log("userrrr",user)   
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        const passwordMatch = await bcrypt.compare(password,user.password);    
        console.log("password hash----",passwordMatch)
        if (!passwordMatch) {
            return new NextResponse("Invalid password", { status: 401 });
        }
        return new NextResponse("Login successful", { status: 200 });
    }catch(err)
    {
        return new NextResponse(err.message,{status:500});
    }
    
}



// import NextAuth from "next-auth"
// import GoogleProvider from 'next-auth/providers/google'
// const handler= NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
//     }),
//   ],
// })
// export {handler as GET, handler as POST};