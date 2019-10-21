const express = require('express');
const router = express.Router();

const { dajDaneDoFormularza, dajWersjeSchematow } = require('./dane-do-fomularza');
const zapisFormularza = require('./zapis-formularza');
const { dajPolaczenia } = require('./polaczenie');

// router.get('/', dajDaneDoFormularza);
// router.get('/wersje-schematow/:id', dajWersjeSchematow);
router.get('/polaczenia', dajPolaczenia);
// router.post('/', zapisFormularza);

module.exports = router;