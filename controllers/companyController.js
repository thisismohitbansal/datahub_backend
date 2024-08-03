const Company = require('../models/Company');

// Fetch company details by name
exports.getCompanyByName = async (req, res, next) => {
  try {
    const company = await Company.findOne({ companyName: req.params.name });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (error) {
    next(error);
  }
};

// Fetch companies for search suggestions
exports.getCompaniesForSearch = async (req, res, next) => {
  try {
    const query = req.query.q || '';
    const companies = await Company.find({ companyName: new RegExp(query, 'i') })
                                   .select('companyName');
                                   
    if (companies.length === 0) 
      return res.status(404).json({ message: 'No companies found' });
    
    res.json(companies);
  } catch (error) {
    next(error);
  }
};

// Fetch all companies
exports.getAllCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find({});
    res.json(companies);
  } catch (error) {
    next(error);
  }
};