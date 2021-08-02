const express = require('express');
const Activities = require('../../Controllers/ActivityController');

const router = express.Router();

router.get('/getActivity', Activities.findAllPublished);

router.post('/postActivity', (req, res) => {
  console.log('got signup request here ');
});
module.exports = router;
