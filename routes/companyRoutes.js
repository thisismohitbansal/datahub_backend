const express = require('express');
const { getCompanyByName, getCompaniesForSearch, getAllCompanies } = require('../controllers/companyController');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getAllCompanies);  
router.get('/search', verifyToken, getCompaniesForSearch);  
router.get('/:name', verifyToken, getCompanyByName); 

module.exports = router;