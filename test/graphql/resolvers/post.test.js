import post from '../../../src/graphql/resolvers/post'
import { isFunction } from '../../../src/utils/is'

describe('#Query', () => {
  it('should have getPosts method', async () => {
    expect(isFunction(post.Query.getPosts)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have createPost method', async () => {
    expect(isFunction(post.Mutation.createPost)).toBe(true)
  })
})
