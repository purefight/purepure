// import { Response } from 'express';
// import { NextRequest } from 'next/server';
// import { mysqlPool } from '@/utils/db';

// import { Copse } from "next/font/google"

// export async function GET(request) {
//   const promisePool = mysqlPool.promise()
//   const [rows, fields] = await promisePool.queary(
//     `SELECT * FROM game;`
    
//   )    
  
//   return NextResponse.json(rows);
// }   

// import { NextRequest } from 'next/server';
// export async function GET(request) {
//     const data = {
//       'text':'Hello'
      
//     }
    
//     return NextResponse.json(data);
//   }   
// import { Request, Response } from "express"

// const express = require ('express')
// const app = express()
// const port = 8000
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World')
// })

// app.listen(port, ()=> {
//   console.log(`Example app ${port}`)
// })
// import { Request } from "express"

// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }
import { NextResponse } from "next/server"
export async function GET() {
  return Response.json({'massage':'Hello,Next.js!'})
}