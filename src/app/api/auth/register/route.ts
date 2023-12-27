import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
    try {
        const { username, name, email, password } = await request.json();
        // validation with ZOD;
        const hashedPassword = await hash(password, 10);
        const repsonse = await sql`
            INSERT into users (name,username,email,password) VALUES
            (${name},${username},${email},${hashedPassword})
        `;
    } catch (e) {
        console.log(e);
    }

    return NextResponse.json({ message: "SUCCESS" });
}
