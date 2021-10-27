const express = require("express");

const auth = require("../helpers/auth");
const {
  prepareUserForOutput,
  prepareOrganizationForOutput,
} = require("../helpers/prepareForOutput");
const { User, Organization } = require("../models");

const router = express.Router();

// POST /api/organization
router.post("/", async function(req, res) {
  const {
    organization_name: organizationName,
    admin_first_name: adminFirstName,
    admin_last_name: adminLastName,
  } = req.body;

  const newAdmin = await User.create({
    firstName: adminFirstName,
    lastName: adminLastName,
    isAdmin: true,
  }, {raw: true, plain: true });

  const newOrganization = await Organization.create({
    name: organizationName,
  }, { raw: true });

  newAdmin.organizationId = newOrganization.id;
  // This adds back the sequelize data fields so they need
  // to be removed again with .toJSON() for putting
  await newAdmin.save();

  auth.loginAs(newAdmin.id, req, res);

  res.json({
    "organization": prepareOrganizationForOutput(newOrganization),
    "admin": prepareUserForOutput(newAdmin.toJSON()),
  });
});

module.exports = router;