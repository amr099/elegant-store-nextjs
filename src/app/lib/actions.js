"use server";
import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { hash } from "bcrypt";

export const addToWishlist = async (product_id) => {
    try {
        const session = await getServerSession();

        const response =
            await sql`INSERT INTO wishlists (user_id, product_id) VALUES ((SELECT user_id FROM users where email = ${session.user.email}), ${product_id})`;

        if (response.rowCount > 0) {
            revalidatePath("");
            return { success: true };
        } else {
            return { error: "Error while inserting new item into wishlist" };
        }
    } catch (e) {
        console.log(e);
    }
};

export const removeFromWishlist = async (product_id) => {
    try {
        const session = await getServerSession();

        const response =
            await sql`DELETE FROM wishlists WHERE product_id = ${product_id} AND user_id = 
            (SELECT user_id FROM users WHERE email = ${session.user.email}) `;

        if (response.rowCount > 0) {
            revalidatePath("");
            return { success: true };
        } else {
            return { error: "Error while deleteing item from wishlist" };
        }
    } catch (e) {
        console.log(e);
    }
};

export const addNewOrder = async (data) => {
    const session = await getServerSession();

    if (!session) {
        return { error: "You have to login first" };
    }
    const { name, email, phone, address, city, zip, amount } = await data;
    try {
        const response =
            await sql`INSERT INTO orders (user_id, status, amount, name, email, phone, city, address, zip)
                    VALUES (
                        (SELECT user_id FROM users WHERE email = ${session.user.email}),'PENDING',${amount},
                        ${name},${email},${phone},${city},${address},${zip});`;
        if (response.rowCount > 0) {
            return { success: true };
        } else {
            console.log(response);
            return { error: "error while placing new order" };
        }
    } catch (e) {
        console.log(e);
    }
};

export const updateUserInfo = async (data) => {
    const { name, username, email, newpassword } = data;
    const session = await getServerSession();

    try {
        const hashedPassword = await hash(newpassword, 10);

        const userInfo =
            await sql`SELECT * FROM users where email = ${session.user.email}`;

        const response = await sql`
                        UPDATE users SET
                        username = ${username || userInfo.rows[0].username},
                        email = ${email || userInfo.rows[0].email},
                        password = ${
                            hashedPassword || userInfo.rows[0].password
                        }
                        WHERE user_id = (SELECT user_id From users where email = ${
                            session.user.email
                        })`;

        if (response.rowCount > 0) {
            return { success: true };
        } else {
            return { error: "error while updating user information" };
        }
    } catch (error) {
        console.log(error);
    }
};
