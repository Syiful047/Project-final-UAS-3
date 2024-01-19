// import database
const db = require("../config/database");

// membuat class Model Patient
class Patient {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data patients yang baru diinsert.
   */
  static create() {
    // code here
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patientss (name, phone, address, status) VALUES (?,?,?,?)";
      const value = [data.name, data.phone, data.address, data.status];
      db.query(sql, value, (err, result) => {
        resolve(result);
      })
    });
  }
}

// export class Patient
module.exports = Patient;