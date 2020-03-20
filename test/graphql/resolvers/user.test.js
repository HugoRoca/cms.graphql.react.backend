import user from '../../../src/graphql/resolvers/user'
import { isFunction } from '../../../src/utils/is'

describe('#Query', () => {
  it('should have getUsers method', async () => {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})

describe('#Mutation', () => {
  it('should have createUser method', async () => {
    expect(isFunction(user.Mutation.createUser)).toBe(true)
  })

  it('should have login method', async () => {
    expect(isFunction(user.Mutation.login)).toBe(true)
  })
})
