const { getDB } = require('../config/mongo');
const { ObjectId } = require('mongodb');
const { hashPassword } = require('../helpers/bcrypt');

class User {
  static getCollection() {
    return getDB().collection('users');
  }

  static findAll() {
    return User.getCollection()
      .find({}, { projection: { password: 0 } })
      .toArray();
  }

  static findById(id) {
    return User.getCollection().findOne({ _id: new ObjectId(id) }, { projection: { password: 0 } });
  }

  static deleteById(id) {
    return User.getCollection().deleteOne({
      _id: new ObjectId(id),
    });
  }

  static create({ username, email, password, role = 'admin', phoneNumber, address }) {
    if (!username) throw { name: 'UsernameNull' };
    if (!email) throw { name: 'EmailNull' };
    if (!password) throw { name: 'PasswordNull' };
    if (!phoneNumber) throw { name: 'PhoneNumberNull' };
    if (!address) throw { name: 'AddressNull' };

    password = hashPassword(password);
    return User.getCollection().insertOne({ username, email, password, role, phoneNumber, address });
  }
}

module.exports = User;
