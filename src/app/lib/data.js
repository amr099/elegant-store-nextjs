import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { unstable_noStore } from "next/cache";

export async function fetchProducts() {
    unstable_noStore();
    try {
        const data = await sql`SELECT * from products`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch products \n", e);
    }
}

export async function fetchSortedProducts() {
    unstable_noStore();
    try {
        const data = await sql`SELECT * from products ORDER BY price `;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch products \n", e);
    }
}

export async function fetchProduct(id) {
    unstable_noStore();

    try {
        const data = await sql`SELECT * from products where product_id = ${id}`;
        return data.rows[0];
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function searchProduct(name) {
    unstable_noStore();
    try {
        const data =
            await sql`SELECT * from products where name ILIKE ${`%${name}%`}`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function fetchProductsByCategory(category) {
    unstable_noStore();

    try {
        const data =
            await sql`SELECT products.name, products.product_id, products.description, products.img_url, products.price FROM products
                    JOIN categories ON products.category_id = categories.category_id
                    WHERE categories.name = ${category};`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function fetchCategories() {
    unstable_noStore();

    try {
        const data = await sql`SELECT * from categories`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch categories \n", e);
    }
}

export async function fetchOrders() {
    unstable_noStore();
    const session = await getServerSession();

    try {
        const data =
            await sql`SELECT * from orders where user_id = (SELECT user_id from users where email = ${session.user.email})`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch orders \n", e);
    }
}

export async function fetchLastOrder() {
    try {
        const data =
            await sql`SELECT * FROM orders ORDER BY order_id DESC LIMIT 1;`;
        return data.rows[0];
    } catch (e) {
        console.log("Failed to fetch last order \n", e);
    }
}

export async function fetchWhishlist() {
    unstable_noStore();

    const session = await getServerSession();
    try {
        const data = await sql`SELECT * FROM products WHERE product_id IN 
                (SELECT product_id FROM wishlist_items WHERE wishlist_id = 
                (SELECT id FROM wishlists WHERE user_id =
                (SELECT user_id FROM users WHERE email = ${session.user.email})))`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch wishlist \n", e);
    }
}
