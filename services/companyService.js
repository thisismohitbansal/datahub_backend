const Company = require('../models/Company');

exports.getCompanyDetails = async (name) => {
  return await Company.findOne({ companyName: name });
};

exports.searchCompanies = async (query) => {
  return await Company.find({ companyName: new RegExp(query, 'i') }).select('companyName');
};