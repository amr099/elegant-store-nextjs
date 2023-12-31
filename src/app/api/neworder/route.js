import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await getServerSession();

    if (!session.user.email) {
        return NextResponse.json(
            { success: false, error: "You have to login first." },
            { status: 400 }
        );
    }
    const { name, email, phone, address, city, zip, amount } =
        await request.json();

    try {
        const response =
            await sql`INSERT INTO orders (user_id, status, amount, name, email, phone, city, address, zip)
                    VALUES (
                        (SELECT user_id FROM users WHERE email = ${session.user.email}),'PENDING',${amount},
                        ${name},${email},${phone},${city},${address},${zip});`;
        return NextResponse.json({ success: true });
    } catch (e) {
        console.log(e, "\n Failed to create new order");
        return NextResponse.json(
            { success: false, error: "Failed to create new order" },
            { status: 500 }
        );
    }
}
