import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await getServerSession();
    const { product_id } = await request.json();

    try {
        const newList = await sql`INSERT INTO wishlists (user_id)
                    VALUES ((SELECT user_id FROM users WHERE email = ${session.user.email}));`;

        const newListId = await sql`SELECT id FROM wishlists WHERE user_id =
                                (SELECT user_id FROM users WHERE email = ${session.user.email}) `;
        const newItem =
            await sql`INSERT INTO wishlist_items (wishlist_id, product_id)
                    VALUES (${newListId.rows[0].id}, ${product_id})`;
    } catch (e) {
        console.log("Failed to add to wishlist \n", e);
    }
    return NextResponse.json({ message: "SUCCESS" });
}
