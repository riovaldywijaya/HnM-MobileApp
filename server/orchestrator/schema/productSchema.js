const Controller = require('../controllers/controller');

const typeDefs = `#graphql
      type ResponseSuccess {
          message: String
      }  
  
      type Products {
          id: ID
          name: String
          slug: String
          description: String
          price: Int
          mainImg: String
          categoryId: Int
          UserMongoId: String
          createdAt: String
          updatedAt: String
          Images: [Images]
          Category: Category
      }
  
      type Images {
          id: ID
          productId: Int
          imgUrl: String
          createdAt: String
          updatedAt: String
      }

      type Category {
          id: ID
          name: String
          createdAt: String
          updatedAt: String
      }
  
      type Product {
          product: Products
          user: User
      } 
  
      type User {
          _id: String
          username: String
          email: String
          role: String
          phoneNumber: String
          address: String
      } 
  
      type ResponseCreateProduct {
          id: ID
          name: String
          slug: String
          description: String
          price: Int
          mainImg: String
          categoryId: Int
          UserMongoId: String
          createdAt: String
          updatedAt: String
      } 
  
      type Query {
          findProducts: [Products]
          findDetailProduct(id: ID!): Product
      } 
      
      input NewProduct {
          name: String 
          description: String 
          price: Int 
          mainImg: String 
          UserMongoId: String 
          categoryId: Int 
          imgUrl1: String 
          imgUrl2: String 
          imgUrl3: String 
          imgUrl4: String 
          imgUrl5: String
      } 
  
      type Mutation {
          createProduct(product: NewProduct): ResponseCreateProduct
          deleteProduct(id: ID!): ResponseSuccess
          updateProduct(id: ID!, product: NewProduct): ResponseSuccess
      } 
  `;

const resolvers = {
  Query: {
    findProducts: Controller.getProducts,
    findDetailProduct: Controller.getProductById,
  },

  Mutation: {
    createProduct: Controller.createProduct,
    deleteProduct: Controller.deleteProduct,
    updateProduct: Controller.updateProduct,
  },
};

module.exports = { typeDefs, resolvers };
