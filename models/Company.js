const mongoose = require('mongoose');

const contactPersonSchema = new mongoose.Schema({
  email: String,
  name: String,
  designation: String,
  linkedIn: String,
  companyPhone: String
});

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  state: String,
  industry: String,
  annualRevenue: Number,
  internalITTeam: Boolean,
  techStack: [String],
  continuedListOfVendors: String,
  jobVacancy: String,
  jobVacancyTechStack: String,
  contactPersons: [contactPersonSchema]
});

module.exports = mongoose.model('Company', companySchema);
