/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MONGODB_URI:"mongodb://localhost:27017/test",
        GOOGLE_CLIENT_ID:"505881618479-p8bivtn8tid4b5722a56uvl44sa81avb.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET:"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",
        NEXTAUTH_SECRET:"asdasdasdasd",
        NextAUTH_URL:"http://localhost:3000",
    },
    images:{
        domains:["images.pexels.com","www.pexels.com"],
    },
}

module.exports = nextConfig
