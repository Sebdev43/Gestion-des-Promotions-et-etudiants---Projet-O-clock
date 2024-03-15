const { Router } = require('express');
// J'utilise la destructuration pour ne récupérer que la méthode home de mon mainController
const { home } = require('./controllers/mainController');
const {
  listPromo, detailPromo, listStudentsFromPromo, showCreatePromoForm,
  createPromo,
} = require('./controllers/promoController');
const { showCreateStudentsForm, createStudents } = require('./controllers/studentController');

const router = Router();

router.get('/', home);
router.get('/promos', listPromo);
router.get('/promos/create', showCreatePromoForm);
router.post('/promos/create', createPromo);
router.get('/promos/:id', detailPromo);
router.get('/promos/:id/students', listStudentsFromPromo);
router.get('/students/create', showCreateStudentsForm);
router.post('/students/create', createStudents);

module.exports = router;
