import { fetchWhishlist } from "@/app/lib/data";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    const session = await getServerSession();
    const { product_id } = await request.json();

    try {
        // Correct the SQL query to use the correct WHERE clause
        await sql`DELETE FROM wishlist_items WHERE wishlist_id IN
                (SELECT id FROM wishlists WHERE user_id = 
                (SELECT user_id FROM users WHERE email = ${session.user.email}) AND 
                product_id = ${product_id})`;

        // You may want to fetch the updated wishlist after deletion
        const updatedWishlist = await fetchWhishlist();

        return NextResponse.json({
            message: "SUCCESS",
            wishlist: updatedWishlist,
        });
    } catch (e) {
        console.log("Failed to remove from wishlist \n", e);
        return NextResponse.json({ message: "ERROR" });
    }
}
