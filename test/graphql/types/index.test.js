import typeDefs from '../../../src/graphql/types/index'

describe('#typeDefs', () => {
  it('should match the Graphql schema', () => {
    expect(typeDefs).toMatchSnapshot()
  })
})
