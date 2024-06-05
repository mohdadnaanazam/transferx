import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account, profile, 'hey here is my info')
      return true
    }

  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
