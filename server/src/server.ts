import { ApolloServer } from 'apollo-server'
import { resolvers } from './schema'
import { createContext } from './context'
import { makeExecutableSchema } from 'graphql-tools'
import { query } from './typeDefs/query'
import { user } from './typeDefs/user'
import { mutation } from './typeDefs/mutation'
import config from './config'

const schema = makeExecutableSchema({
  typeDefs: [query, user, mutation],
  resolvers,
})

new ApolloServer({ schema, context: createContext }).listen(
  { port: config.PORT },
  () => console.log(`🚀 Server ready at: http://localhost:${config.PORT} ⭐️⭐️⭐️⭐️`),
)
