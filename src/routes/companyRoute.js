import { Router } from "express";
import companyController from "../controllers/companyController";
const {
  addCompany,
  getAllCompany,
  deleteCompany,
  updateCompany,
  getSingleCompany,
} = companyController;

const router = new Router();

router.post("/company", addCompany);
router.get("/company", getAllCompany);
router.get("/company/:id", getSingleCompany);
router.patch("/company/:id", updateCompany);
router.delete("/company/:id", deleteCompany);

export default router;
