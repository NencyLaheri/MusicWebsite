/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MONGODB_URI:"mongodb://localhost:27017/test"
    },
    images:{
        domains:["images.pexels.com","www.pexels.com"],
    },
}

module.exports = nextConfig
