const { db } = require('../database/database');

class Product {
  static getAll(callback) {
    db.all('SELECT * FROM products ORDER BY createdAt DESC', callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM products WHERE id = ?', [id], callback);
  }

  static create(product, callback) {
    const { name, description, price, quantity } = product;
    db.run(
      'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)',
      [name, description, price, quantity],
      function(err) {
        callback(err, { id: this.lastID, ...product });
      }
    );
  }

  static update(id, product, callback) {
    const { name, description, price, quantity } = product;
    db.run(
      `UPDATE products 
       SET name = ?, description = ?, price = ?, quantity = ?, updatedAt = CURRENT_TIMESTAMP 
       WHERE id = ?`,
      [name, description, price, quantity, id],
      function(err) {
        callback(err, { id, ...product });
      }
    );
  }

  static delete(id, callback) {
    db.run('DELETE FROM products WHERE id = ?', [id], callback);
  }
}

module.exports = Product;