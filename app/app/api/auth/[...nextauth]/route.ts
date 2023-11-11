
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials:any) {
                const {email, password} = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email })

                    if (!user) {
                        return null;
                    }

                    const passowrdsMatch = await bcrypt.compare(password, user.password);

                    if (!passowrdsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        })
    ],
    session : {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/roadmap",
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };