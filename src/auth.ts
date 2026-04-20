import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/login" },

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        let payload = await res.json();

        if (payload.message === "success") {
          const token = payload.token;
          const decoded: { id: string } = jwtDecode(token);

          return {
            id: decoded.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.message || "error ocurred");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user?.user;
        token.token = user?.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user! ;
      return session;
    },
  },
};
