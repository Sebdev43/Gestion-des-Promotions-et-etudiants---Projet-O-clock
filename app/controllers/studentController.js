const promoDataMapper = require('../dataMapper/promo');
const studentDataMapper = require('../dataMapper/student');

const studentController = {

  async showCreateStudentsForm(req, res) {
    const promos = await promoDataMapper.getAllPromo();
    res.render('student/create-student', {
      promos,
    });
  },

  async createStudents(req, res) {
    try {
      // req.body => { name: '...', github_organization: '' }
      const data = req.body;
      await studentDataMapper.createStudents(data);

      // Si tout ce passe bien (je suis pas passé dans le catch)
      // Je redirige l'utilisateur vers la liste des promos
      res.redirect('/');
    } catch (error) {
      console.trace(error);
      res.status(500).send('Erreur serveur');
    }
  },

};

module.exports = studentController;
