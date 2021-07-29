const { buildSchema } = require('graphql');


module.exports = buildSchema(`
type Brand {
  name: String
}
type Query {
 brandList(vehicleType: Int!, offset: Int, limit: Int): [Brand!]!
}
`);
