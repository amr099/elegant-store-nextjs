import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
    try {
        const { username, name, email, password } = await request.json();
        // validation with ZOD;
        const hashedPassword = await hash(password, 10);
        const newUser = await sql`
            INSERT into users (name,username,email,password) VALUES
            (${name},${username},${email},${hashedPassword})
        `;
        const user = await sql`
            SELECT user_id from users where username = ${username};
        `;
        const newWishlist = await sql`
            INSERT into wishlists (user_id) values (${user.rows[0].user_id})
        `;
    } catch (e) {
        console.log(e);
    }

    return NextResponse.json({ message: "SUCCESS" });
}
