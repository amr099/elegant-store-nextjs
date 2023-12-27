import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
                const response =
                    await sql`SELECT * FROM users WHERE username = ${credentials.username}`;
                const user = response.rows[0];
                const correctPassword = await compare(
                    credentials?.password,
                    user?.password || ""
                );

                if (correctPassword) {
                    return {
                        id: user.user_id,
                        username: user.username,
                        email: user.email,
                    };
                }

                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
