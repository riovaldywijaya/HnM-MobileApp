const axios = require('axios');
const redis = require('../config/redis');
// const BASE_URL_PRODUCTS = 'http://localhost:4002/products';
// const BASE_URL_USERS = 'http://localhost:4001/users';
const BASE_URL_PRODUCTS = 'http://54.151.159.132:4002/products';
const BASE_URL_USERS = 'http://54.151.159.132:4001/users';

class Controller {
  static async getProducts() {
    try {
      const productCache = await redis.get('app:products');

      if (productCache) {
        console.log('> read using cache <');
        const data = JSON.parse(productCache);

        return data;
      } else {
        console.log('> read using axios <');
        const { data } = await axios(BASE_URL_PRODUCTS);

        await redis.set('app:products', JSON.stringify(data));
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(_, args) {
    try {
      const { id } = args;
      const detailProductCache = await redis.get(`app:products:${id}`);

      if (detailProductCache) {
        console.log('> read using cache <');
        const data = JSON.parse(detailProductCache);

        return data;
      } else {
        console.log('> read using axios <');
        const dataProduct = await axios({
          method: 'get',
          url: BASE_URL_PRODUCTS + '/' + id,
        });
        const product = dataProduct.data;

        const dataUser = await axios({
          method: 'get',
          url: BASE_URL_USERS + '/' + product.UserMongoId,
        });

        const user = dataUser.data;

        await redis.set(`app:products:${id}`, JSON.stringify({ product, user }));
        // res.status(200).json({ product, user });
        return { product, user };
      }
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(_, args) {
    try {
      const { data } = await axios({
        method: 'post',
        url: BASE_URL_PRODUCTS,
        data: args.product,
      });

      await redis.del('app:products');
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(_, args) {
    try {
      console.log(args, '<<<<<<<<<<<');
      const { id } = args;

      const { data } = await axios({
        method: 'PATCH',
        url: BASE_URL_PRODUCTS + '/' + id,
        data: args.product,
      });

      await redis.del('app:products');
      // res.status(200).json({ message: 'Success update product id ' + id });
      return { message: 'Success update product id ' + id };
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(_, args) {
    try {
      const { id } = args;
      const { data } = await axios.delete(BASE_URL_PRODUCTS + '/' + id);

      await redis.del('app:products');
      await redis.del(`app:products:${id}`);
      // res.status(200).json({ message: 'Success delete product id ' + id });
      return { message: 'Success delete product id ' + id };
    } catch (error) {
      throw error;
    }
  }

  static async getUsers(req, res, next) {
    try {
      const usersCache = await redis.get('users:users');

      if (usersCache) {
        console.log('> read using cache <');
        const data = JSON.parse(usersCache);
        return data;
      } else {
        console.log('> read using axios <');
        const { data } = await axios(BASE_URL_USERS);
        await redis.set('users:users', JSON.stringify(data));
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const detailUserCache = await redis.get(`users:users:${id}`);

      if (detailUserCache) {
        console.log('> read using cache <');
        const data = JSON.parse(detailUserCache);
        return data;
      } else {
        console.log('> read using axios <');

        const { data } = await axios({
          method: 'get',
          url: BASE_URL_USERS + '/' + id,
        });

        await redis.set(`users:users:${id}`, JSON.stringify(data));
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  static async createUser(req, res, next) {
    try {
      const { data } = await axios({
        method: 'post',
        url: BASE_URL_USERS,
        data: req.body,
      });

      await redis.del('users:users');
      // res.status(201).json(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios.delete(BASE_URL_USERS + '/' + id);

      await redis.del('users:users');
      await redis.del(`users:users:${id}`);
      // res.status(200).json({ message: 'Success delete user id ' + id });
      return { message: 'Success delete user id ' + id };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Controller;
