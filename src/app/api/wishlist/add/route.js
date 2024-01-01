import { fetchWhishlist } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    const session = await getServerSession();
    const { product_id } = await request.json();
    const wishlist = await fetchWhishlist();

    try {
        if (!wishlist.find((item) => item.product_id == product_id)) {
            const listId = await sql`SELECT id FROM wishlists WHERE user_id =
                                (SELECT user_id FROM users WHERE email = ${session.user.email}) `;
            const newItem =
                await sql`INSERT INTO wishlist_items (wishlist_id, product_id)
                    VALUES (${listId.rows[0].id}, ${product_id})`;
            const updatedWishlist = await fetchWhishlist();
            

            return NextResponse.json({
                message: "SUCCESS",
                wishlist: updatedWishlist,
            });
        } else {
            console.log("item already added to the wishlist");
            return NextResponse.json({
                message: "Item already exists!",
                wishlist,
            });
        }
    } catch (e) {
        console.log("Failed to add to wishlist \n", e);
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}
