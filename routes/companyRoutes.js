const express = require('express');
const { getCompanyByName, getCompaniesForSearch, getAllCompanies, getSimilarCompanies } = require('../controllers/companyController');
const router = express.Router();

router.get('/', getAllCompanies);
router.get('/search', getCompaniesForSearch);
router.get('/:name', getCompanyByName);
router.get('/:companyName/similar', getSimilarCompanies);

module.exports = router;