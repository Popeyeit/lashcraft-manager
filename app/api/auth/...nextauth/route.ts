// import { prisma } from "./../../../../prisma/prisma";
// import Credentials from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { AuthOptions, User } from "next-auth";
// import NextAuth from "next-auth";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: "",
//       clientSecret: "",
//     }),
//     // Credentials({
//     //   credentials: {
//     //     name: { label: "login", type: "string", required: true },
//     //     password: { label: "password", type: "string", required: true },
//     //   },
//     //   async authorize(credentials) {
//     //     console.log("credentials", credentials);
//     //     if (!credentials?.name || !credentials.password) return null;
//     //     const artist = await prisma.artist.findUnique({
//     //       where: {
//     //         name: credentials.name,
//     //       },
//     //     });
//     //     if (artist && artist.password === credentials.password) {
//     //       const { password, ...user } = artist;
//     //       return user as any;
//     //     }

//     //     return null;
//     //   },
//     // }),
//   ],
//   // pages: {
//   //   signIn: "/signin",
//   // },
//   secret: "PLACE-HERE-ANY-STRING",
// };
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
