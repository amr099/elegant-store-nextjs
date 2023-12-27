import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await getServerSession();
    const { amount } = await request.json();
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    try {
        const response =
            await sql`INSERT INTO orders (user_id, date, total_amount,status)
                    VALUES (
                    (SELECT user_id FROM users WHERE email = ${session.user.email}),
                    ${formattedDate}, 
                    ${amount},
                    'PENDING' );`;
    } catch (e) {
        console.log("Failed to create new order \n", e);
    }
    return NextResponse.json({ message: "SUCCESS" });
}
