const express = require('express');
const router = express.Router();

const { dajPolaczenia, dodajPolaczenie } = require('./polaczenie');
const { dajBazy } = require('./baza');
const { dajWersjePumy } = require('./wersje-pumy');
const { dajOstatnioUzyte } = require('./ostatnio-uzyte');
const { dajWersjeSchematow } = require('./wersje-schematow');

router.get('/polaczenia', dajPolaczenia);
router.post('/polaczenia', dodajPolaczenie);

router.post('/bazy', dajBazy);

router.get('/wersje-pumy', dajWersjePumy);

router.post('/wersje-schematow', dajWersjeSchematow);

router.get('/ostatnio-uzyte', dajOstatnioUzyte)

module.exports = router;