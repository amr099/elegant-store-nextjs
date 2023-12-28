import { sql } from "@vercel/postgres";

export async function fetchProducts() {
    try {
        const data = await sql`SELECT * from products`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch products \n", e);
    }
}

export async function fetchProduct(id) {
    try {
        const data = await sql`SELECT * from products where product_id = ${id}`;
        return data.rows[0];
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function searchProduct(search) {
    try {
        const data =
            await sql`SELECT * from products where name ILIKE ${search}`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function fetchProductsByCategory(categoryId) {
    try {
        const data =
            await sql`SELECT products.name, products.product_id, products.description, products.img_url, products.price FROM products
                    JOIN categories ON products.category_id = categories.category_id
                    WHERE categories.category_id = ${categoryId};`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch product \n", e);
    }
}

export async function fetchCategories() {
    try {
        const data = await sql`SELECT * from categories`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch categories \n", e);
    }
}

export async function fetchOrders(email) {
    try {
        const data =
            await sql`SELECT * from orders where user_id = (SELECT user_id from users where email = ${email})`;
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch orders \n", e);
    }
}

export async function fetchWhishlist(email) {
    try {
        const data =
            await sql`SELECT * FROM products WHERE product_id = (SELECT product_id FROM wishlist_items WHERE wishlist_id = 
                (SELECT id FROM wishlists WHERE user_id =
                (SELECT user_id FROM users WHERE email = ${email})))`;
        console.log(data.rows);
        return data.rows;
    } catch (e) {
        console.log("Failed to fetch orders \n", e);
    }
}
