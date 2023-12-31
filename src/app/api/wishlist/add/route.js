import { fetchWhishlist } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const wishlist = await fetchWhishlist();
    const session = await getServerSession();
    const { product_id } = await request.json();

    try {
        if (!wishlist.find((item) => item.product_id == product_id)) {
            const listId = await sql`SELECT id FROM wishlists WHERE user_id =
                                (SELECT user_id FROM users WHERE email = ${session.user.email}) `;
            const newItem =
                await sql`INSERT INTO wishlist_items (wishlist_id, product_id)
                    VALUES (${listId.rows[0].id}, ${product_id})`;
        } else {
            console.log("item already added to the wishlist");
            return;
        }
    } catch (e) {
        console.log("Failed to add to wishlist \n", e);
    }
    return NextResponse.json({ message: "SUCCESS" });
}
