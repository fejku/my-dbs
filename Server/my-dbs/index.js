const express = require('express');
const router = express.Router();

const { dajDaneDoFormularza, dajWersjeSchematow } = require('./dane-do-fomularza');
const zapisFormularza = require('./zapis-formularza');

router.get('/', dajDaneDoFormularza);
router.get('/wersje-schematow/:id', dajWersjeSchematow);
router.post('/', zapisFormularza);

module.exports = router;