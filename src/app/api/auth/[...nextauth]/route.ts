import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongodb";
import { User } from "@/lib/models";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await dbConnect();
        if (!credentials?.email || !credentials?.password) return null;
        
        // Mock validation for demo
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          // Add bcrypt logic here for real app
          return { id: user._id.toString(), name: user.name, email: user.email };
        }
        
        // Create mock user if doesn't exist just for demo purposes
        const newUser = await User.create({
          name: credentials.email.split('@')[0],
          email: credentials.email,
          password: "hashed_password_mock"
        });
        
        return { id: newUser._id.toString(), name: newUser.name, email: newUser.email };
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_development_only",
});

export { handler as GET, handler as POST };
