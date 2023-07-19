const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req, res, next) => {
    res.end('Will send all the dishes to you!');
  })
.post((req, res, next) => {
    res.end('Will add the dishes instance in database!' + req.body.name + ' with details: ' + req.body.description);
  })
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
  })
.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
  });

module.exports = router;