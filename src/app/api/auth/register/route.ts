import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
    try {
        const { username, name, email, password } = await request.json();

        // Check if the email or username already exists
        const existingEmail = await sql`
            SELECT * FROM users WHERE email = ${email};
        `;
        const existingUsername = await sql`
            SELECT * FROM users WHERE username = ${username};
        `;

        if (existingEmail.rows.length > 0) {
            return NextResponse.json(
                { success: false, error: "Email is already taken" },
                { status: 400 }
            );
        }

        if (existingUsername.rows.length > 0) {
            return NextResponse.json(
                { success: false, error: "Username is already taken" },
                { status: 400 }
            );
        }

        // Continue with user registration if email and username are unique
        const hashedPassword = await hash(password, 10);
        const newUser = await sql`
            INSERT INTO users (name, username, email, password) VALUES
            (${name}, ${username}, ${email}, ${hashedPassword})
        `;
        const user = await sql`
            SELECT user_id FROM users WHERE username = ${username};
        `;

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { success: false, error: e.message },
            { status: 500 }
        );
    }
}
