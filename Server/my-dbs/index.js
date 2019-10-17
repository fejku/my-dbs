const express = require('express');
const router = express.Router();

const { dajDaneDoFormularza, dajWersjeSchematow } = require('./queries');

router.get('/', dajDaneDoFormularza);
router.get('/wersje-schematow/:id', dajWersjeSchematow);
router.post('/', (req, res) => {
  console.log(req.body);
})

module.exports = router;