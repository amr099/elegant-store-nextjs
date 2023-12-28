import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    const session = await getServerSession();
    const { product_id } = await request.json();

    try {
        const response =
            await sql`DELETE from wishlist_items where wishlist_id =
                    (SELECT id from wishlists where user_id = 
                    (SELECT user_id FROM users WHERE email = ${session.user.email}) AND 
                    product_id = ${product_id})`;
    } catch (e) {
        console.log("Failed to remove to wishlist \n", e);
    }
    return NextResponse.json({ message: "SUCCESS" });
}
