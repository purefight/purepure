import mysql from "mysql2";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  // create the connection to database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  const encodingId = context.params;
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `game` monitorpath ?",
        [encodingId],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
