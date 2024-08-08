// import { AuthOptions } from "next-auth";

// import GithubProvider from "next-auth/providers/github";
// import NextAuth from "next-auth/next";

// const authOptions: AuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: "Iv23liI8ue2egPxndYKJ",
//       clientSecret: "ba6903c95b15bd47f7366ae0a275c3be26c15038",
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }: any) {
//       console.log(session, token);
//       console.log(session, token);
//       session.user.name = `${session?.user?.name}_${token?.sub}`;

//       return session;
//     },
//   },
//   secret: "default_secret_key",
// };

// const nextAuth = NextAuth(authOptions);

// export { nextAuth as GET, nextAuth as POST };

import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23liI8ue2egPxndYKJ",
      clientSecret: "ba6903c95b15bd47f7366ae0a275c3be26c15038",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
