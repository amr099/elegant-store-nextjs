const { db } = require("@vercel/postgres");

const products = [
    {
        id: "1",
        name: "Loveseat Sofa",
        price: "199.00",
        oldPrice: "400",
        description:
            "Experience the perfect blend of style, comfort, and intimacy with our ComfortMax Love Seat Sofa. This beautifully crafted piece is designed to transform your living space into a cozy haven.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338793/fdf6awyzxebf8abp8ml4.png",
        category: "1",
        stock: "12",
    },
    {
        id: "2",
        name: "Luxury Sofa",
        price: "299.00",
        oldPrice: "500.00",
        description:
            "Indulge in the epitome of sophistication and comfort with our Elegant Opulence Luxury Sofa. Meticulously crafted for those who appreciate the finer things in life, this masterpiece seamlessly blends opulent design with unparalleled relaxation.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702340396/ehf9ksxhx98ptggylicb.png",
        category: "1",
        stock: "12",
    },
    {
        id: "3",
        name: "Table Lamp",
        price: "19.00",
        oldPrice: "",
        description:
            "Illuminate your space with the elegant glow of our Modern Glass Table Lamp. This sophisticated table lamp combines contemporary design with practical functionality, making it a perfect addition to any room in your home.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338403/hrtwu0s51qqlfx6sie8d.png",
        category: "1",
        stock: "12",
    },
    {
        id: "4",
        name: "Cozy Sofa",
        price: "299.00",
        oldPrice: "",
        description:
            "Indulge in the ultimate relaxation experience with our Cozy Comfort Deluxe Sofa. This exquisitely crafted sofa is not just a piece of furniture; it's an invitation to unwind in style. With its plush cushions, modern design, and attention to detail, the Cozy Comfort Deluxe Sofa effortlessly combines aesthetics with comfort.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338402/ux8rn20krpo8xe8nyaom.png",
        category: "1",
        stock: "12",
    },
    {
        id: "6",
        name: "Black Tray table",
        price: "19.00",
        oldPrice: "",
        description:
            "Crafted with precision and attention to detail, this tray table features a minimalist design with a bold black finish that effortlessly complements any interior decor. Whether you're furnishing your 1, 2, or home office, this tray table adds a touch of sophistication.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338402/l4rkep77pz7rbayiyp1r.png",
        category: "1",
        stock: "12",
    },
    {
        id: "7",
        name: "Table Lamp",
        price: "19.00",
        oldPrice: "",
        description:
            "Illuminate your space with style and functionality using our Contemporary Table Lamp. This elegant and versatile lamp is the perfect addition to any room, blending seamlessly with modern and classic décor alike.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338401/n1u02y2co4hzafukpqqc.png",
        category: "1",
        stock: "12",
    },
    {
        id: "5",
        name: "White Drawer unit",
        price: "90.00",
        oldPrice: "",
        description:
            "Enhance your bedroom or office organization with our White Drawer Unit, a stylish and functional storage solution. This versatile drawer unit combines modern design with practical features to bring order to your space.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338400/p1wgl9cta5xmccq4ecvc.png",
        category: "2",
        stock: "12",
    },
    {
        id: "8",
        name: "Black Brow Side table",
        price: "16.99",
        oldPrice: "",
        description:
            "Elevate the style and functionality of your living space with our Black Brow Side Table. This sleek and modern side table is designed to seamlessly blend into any contemporary or classic decor, adding a touch of sophistication to your home.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338400/out6dp94rfprfkpqyain.png",
        category: "2",
        stock: "12",
    },
    {
        id: "9",
        name: "Light Beige Pillow",
        price: "3.99",
        oldPrice: "",
        description:
            "Introducing our Light Beige Pillow – the epitome of comfort and style for your living space. Elevate the coziness of your home with this exquisite throw pillow that seamlessly combines plushness with a touch of sophistication.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338402/zg8cp2etd2bkhky91myp.png",
        category: "2",
        stock: "12",
    },
    {
        id: "10",
        name: "Table Lamp",
        price: "39.00",
        oldPrice: "",
        description:
            "Illuminate your living space with our Elegant Touch Table Lamp, a perfect blend of functionality and style. This sleek and modern table lamp not only provides ambient lighting but also adds a touch of sophistication to any room.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338403/hrtwu0s51qqlfx6sie8d.png",
        category: "2",
        stock: "12",
    },
    {
        id: "12",
        name: "Off-white Pillow",
        price: "17.99",
        oldPrice: "",
        description:
            "Enhance the comfort and style of your living space with our luxurious Off-white Pillow. Crafted with meticulous attention to detail, this pillow seamlessly combines form and function, making it an ideal addition to your home decor.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702341404/fznxvhoil8tnklp9bil5.png",
        category: "2",
        stock: "12",
    },
    {
        id: "11",
        name: "Bamboo Basket",
        price: "19.00",
        oldPrice: "",
        description:
            "Elevate your home organization with our exquisite Bamboo Basket, a perfect blend of functionality and natural aesthetics. Crafted with precision from sustainable bamboo, this basket seamlessly combines eco-friendly design with practical utility.",
        img: "https://res.cloudinary.com/dpbnqiazo/image/upload/v1702338401/ismkbasce335fjoqgb3y.png",
        category: "3",
        stock: "12",
    },
];

// async function seedUsers(client) {
//     try {
//         await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//         // Create the "users" table if it doesn't exist
//         const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;

//         console.log(`Created "users" table`);

//         // Insert data into the "users" table
//         const insertedUsers = await Promise.all(
//             users.map(async (user) => {
//                 const hashedPassword = await bcrypt.hash(user.password, 10);
//                 return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//             })
//         );

//         console.log(`Seeded ${insertedUsers.length} users`);

//         return {
//             createTable,
//             users: insertedUsers,
//         };
//     } catch (error) {
//         console.error("Error seeding users:", error);
//         throw error;
//     }
// }

// async function seedInvoices(client) {
//     try {
//         await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//         // Create the "invoices" table if it doesn't exist
//         const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//         console.log(`Created "invoices" table`);

//         // Insert data into the "invoices" table
//         const insertedInvoices = await Promise.all(
//             invoices.map(
//                 (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `
//             )
//         );

//         console.log(`Seeded ${insertedInvoices.length} invoices`);

//         return {
//             createTable,
//             invoices: insertedInvoices,
//         };
//     } catch (error) {
//         console.error("Error seeding invoices:", error);
//         throw error;
//     }
// }

// async function seedCustomers(client) {
//     try {
//         await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//         // Create the "customers" table if it doesn't exist
//         const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;

//         console.log(`Created "customers" table`);

//         // Insert data into the "customers" table
//         const insertedCustomers = await Promise.all(
//             customers.map(
//                 (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `
//             )
//         );

//         console.log(`Seeded ${insertedCustomers.length} customers`);

//         return {
//             createTable,
//             customers: insertedCustomers,
//         };
//     } catch (error) {
//         console.error("Error seeding customers:", error);
//         throw error;
//     }
// }

// async function seedRevenue(client) {
//     try {
//         // Create the "revenue" table if it doesn't exist
//         const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//         console.log(`Created "revenue" table`);

//         // Insert data into the "revenue" table
//         const insertedRevenue = await Promise.all(
//             revenue.map(
//                 (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `
//             )
//         );

//         console.log(`Seeded ${insertedRevenue.length} revenue`);

//         return {
//             createTable,
//             revenue: insertedRevenue,
//         };
//     } catch (error) {
//         console.error("Error seeding revenue:", error);
//         throw error;
//     }
// }

async function seedCategories(client) {
    try {
        // //         const createTable = await client.sql`
        // //         CREATE TABLE categories (
        // //     category_id SERIAL PRIMARY KEY,
        // //     name VARCHAR(255) NOT NULL,
        // //     description TEXT
        // // );
        //     `;

        console.log(`Created "revenue" table`);

        const insertedRevenue = await client.sql`
        INSERT INTO categories (name) VALUES
        ('Living room'),
        ('Bedroom'),
        ('Kitchen'),
        ('Dinning'),
        ('Outdoor')
      `;

        console.log(`Seeded ${insertedRevenue.length} revenue`);

        // return {
        //     createTable,
        //     revenue: insertedRevenue,
        // };
    } catch (error) {
        console.error("Error seeding revenue:", error);
        throw error;
    }
}

async function seedProducts(client) {
    try {
        // Create the "revenue" table if it doesn't exist
        //         const createTable = await client.sql`
        //         CREATE TABLE products (
        //     product_id SERIAL PRIMARY KEY,
        //     name VARCHAR(255) NOT NULL,
        //     img_url VARCHAR(255) NOT NULL,
        //     description TEXT,
        //     price DECIMAL(10, 2) NOT NULL,
        //     stock_quantity INT NOT NULL,
        //     category_id INT REFERENCES categories(category_id) ON DELETE SET NULL,
        //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        // );
        //     `;

        console.log(`Created "revenue" table`);

        // const insertedInvoices = await Promise.all(
        //     invoices.map(
        //         (invoice) => client.sql`
        // INSERT INTO invoices (customer_id, amount, status, date)
        // VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        // ON CONFLICT (id) DO NOTHING;`
        //     )
        // );

        // Insert data into the "revenue" table
        const insertedRevenue = await Promise.all(
            products.map(
                async (product) => client.sql`
        INSERT INTO products (name, img_url, description, price, stock_quantity, category_id) VALUES 
        (${product.name},${product.img},${product.description},${product.price},${product.stock},${product.category})`
            )
        );

        console.log(`Seeded ${insertedRevenue.length} revenue`);

        // return {
        //     createTable,
        //     revenue: insertedRevenue,
        // };
    } catch (error) {
        console.error("Error seeding revenue:", error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    // await seedUsers(client);
    // await seedCustomers(client);
    // await seedInvoices(client);
    // await seedRevenue(client);

    // await seedCategories(client);
    await seedProducts(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        "An error occurred while attempting to seed the database:",
        err
    );
});
