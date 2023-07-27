import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;

if(!MONGODB_URI)
{
    throw new Error("please define mongodb uri")
}
let cached=global.mongoose

if(!cached)
{
    cached=global.mongoose={conn:null , promise:null}
}

async function dbConnect()
{
    if(cached.conn)
    {
        return cached.conn
    }
    if(!cached.promise)
    {
        const opts={
            bufferCommands:false,
        }
        cached.promise=mongoose.connect(MONGODB_URI,opts).then((mongoose)=>
        {
            return mongoose
        })
    }
}

export default dbConnect;