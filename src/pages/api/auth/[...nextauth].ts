import NextAuth, { Account, Profile, User } from 'next-auth'
import { query as q } from 'faunadb'
import GithubProvider from 'next-auth/providers/github'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  jwt: {
    secret: process.env.SIGNIN_KEY,
  },
  callbacks: {
    async session({ session }) {
      console.log(session)

      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection(
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active')
            )
          )
        )

        return {
          ...session,
          activeSubscription: userActiveSubscription,
        }
      } catch {
        return {
          ...session,
          activeSubscription: null,
        }
      }
    },
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User
      account: Account
      profile: Profile
    }) {
      const { email } = user
      console.log(user)
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), {
              data: { email },
            }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        )
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },
  },
})
