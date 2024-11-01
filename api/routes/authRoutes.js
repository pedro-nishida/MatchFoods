import express from "express";
import { signup, login, logout, companylogin, companysignup } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/companySignup", companysignup);
router.post("/login", login);
router.post("/companylogin", companylogin);
router.post("/logout", logout);


router.get("/me", protectRoute, (req, res) => {
	res.send({
		success: true,
		user: req.user,
	});
});

export default router;
