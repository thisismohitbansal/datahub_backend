// services/companyService.js
const Company = require('../models/Company');

// Fetch company details by name
exports.getCompanyDetails = async (name) => {
  return await Company.findOne({ companyName: name });
};

// Fetch companies for search suggestions
exports.searchCompanies = async (query) => {
  return await Company.find({ companyName: new RegExp(query, 'i') }).select('companyName');
};