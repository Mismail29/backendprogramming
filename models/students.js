// Mengimport database
const db = require("../config/database");

// TODO 1: Buat class data students
class Student {
    // Method untuk query semua data \\
    static all(callback) {
        new Promise((resolve, reject) => {
        // Membuat query di dalam variabel sql \\
        const sql = "SELECT * FROM students";

        // Memasukkan query ke database \\
        db.query(sql, (err, results) => {
        callback(results);
        });
    });
    }
}

// TODO 2: export class data students
module.exports = Student;