import NextAuth from 'next-auth/next';
import  CredentialsProvider  from 'next-auth/providers/credentials';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                
            },
            async authorize(credentials:any) {
                const user = { id: "1" };
                return user;
            }
        })
    ],
}