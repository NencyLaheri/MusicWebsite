import { NextResponse } from "next/server"


// export const GET =async (request)=>
// {
//     console.log("request body response");
    // return new NextResponse(JSON.stringify(request.body))
    // return new NextResponse(JSON.stringify({num:Math.random()*10}))
    // return  new NextResponse(JSON.stringify(request.body))
    // try {
    //     const requestBody = request.body;
    //     console.log("request body", requestBody);
        
    //     return new NextResponse(JSON.stringify(requestBody));
    // } catch (error) {
    //     console.error("Error processing request:", error);
    //     return new NextResponse("An error occurred.", { status: 500 });
    // }
// }

export const POST = async (request) => {
    console.log("POST REQUEST");
    try {
      // const requestBody = request.body;
      const requestBody1 = await request.text();
      // console.log("request body", requestBody);
      console.log("request body", requestBody1);
  
      return new NextResponse(requestBody1);
    } catch (error) {
      console.error("Error processing request:", error);
      return new NextResponse("An error occurred.", { status: 500 });
    }
  };



 