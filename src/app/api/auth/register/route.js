import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import dbConnect from "../../../../../config/dbConnect";

dbConnect();
export const POST=async (req,res)=>
{
    // const newdata = await request.json(); 
    // // const existingUser = await User.findOne({ email: newdata.email });
    // // if (existingUser) 
    // // {
    // //     console.log("data alreadyexist")
    // //     return new NextResponse({ message: "User already registered"  });
    // // }

    // if (!newdata || !newdata.password) 
    // {
    //     return new NextResponse("Invalid request data", { status: 400 });
    // }
  
    // const hashedPsw = await bcrypt.hash(newdata.password, 10)
    // const newUser=new User({name: newdata.username,email: newdata.email,password: hashedPsw,})

    // try
    // {
    //     const res = await newUser.save();    
    //     res.status(200).json({ message: 'Registration successful' });
       
    // }catch(err)
    // {
    //     return new NextResponse(err.message,{status:500});
    // }


    try {

        const {username, email, password } = req.body;
    
        const existingUser = await User.findOne({ email });
    
     
    
        if (existingUser) {
    
          return res.status(400).json({ message: 'Email already exists' });
    
        }
    
     
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = new User({ username,email, password: hashedPassword});
    
        await user.save();
    
     
    
        res.status(201).json({ message: 'User registered successfully' });
    
      } catch (err) {
    
        res.status(500).json({ message: 'An error occurred while registering the user' });
    
      }
}