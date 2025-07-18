const express = require("express");
const authController  = require("../controllers/auth.controller");
const router = express.Router();
const validateRequest = require("../middleware/validateRequest");
const { loginSchema } = require("../validators/auth.schema");

router.post("/login", validateRequest(loginSchema),authController.login);

module.exports = router;