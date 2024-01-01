import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { hash } from "bcrypt";

export async function PUT(request) {
    if (request.method !== "PUT") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, username, email, newpassword } = await request.json();

    // Validate inputs here if needed
    try {
        const LoggedUser = await getServerSession();
        const hashedPassword = await hash(newpassword, 10);
        const userId =
            await sql`SELECT user_id from users where email = ${LoggedUser.user.email}`;
        const result = await sql`
                        UPDATE users
                        SET name = ${name}, username = ${username},email = ${email},password = ${hashedPassword}
                        WHERE user_id = ${userId.rows[0].user_id}
                        RETURNING *
        `;

        return NextResponse.json({ success: true }, { result });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "Failed to update info" },
            { status: 500 }
        );
    }
}
