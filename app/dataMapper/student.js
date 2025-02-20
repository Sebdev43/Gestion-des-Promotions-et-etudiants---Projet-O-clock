const client = require('../db');

const studentDataMapper = {
  async getStudentsByPromoId(promoId) {
    const resultStudents = await client.query('SELECT * FROM student WHERE promo_id = $1 ORDER BY first_name ASC', [promoId]);
    const studentsFromPromo = resultStudents.rows;

    return studentsFromPromo;
  },
  async createStudents(studentData) {
    await client.query('INSERT INTO student (first_name, last_name, github_username, promo_id) VALUES ($1, $2, $3, $4)', [studentData.first_name, studentData.last_name, studentData.github_username, studentData.promo_id]);

  },
};

module.exports = studentDataMapper;
