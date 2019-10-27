const express = require('express');
const router = express.Router();

const { dajDaneDoFormularza, dajWersjeSchematow } = require('./dane-do-fomularza');
const zapisFormularza = require('./zapis-formularza');
const { dajPolaczenia, dodajPolaczenie } = require('./polaczenie');
const { dajBazy } = require('./baza');
const { dajOstatnioUzyte } = require('./ostatnio-uzyte');

// router.get('/', dajDaneDoFormularza);
// router.get('/wersje-schematow/:id', dajWersjeSchematow);
// router.get('/polaczenia', dajPolaczenia);
// router.post('/', zapisFormularza);
router.get('/polaczenia', dajPolaczenia);
router.post('/polaczenia', dodajPolaczenie);

router.post('/bazy', dajBazy);

router.get('/ostatnio-uzyte', dajOstatnioUzyte)

module.exports = router;