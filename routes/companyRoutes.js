const express = require('express');
const { getCompanyByName, getCompaniesForSearch, getAllCompanies } = require('../controllers/companyController');
const router = express.Router();

router.get('/', getAllCompanies);
router.get('/search', getCompaniesForSearch);
router.get('/:name', getCompanyByName);

module.exports = router;