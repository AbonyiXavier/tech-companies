import { Router } from "express";
import companyController from "../controllers/companyController";
const {
  addCompany,
  getAllCompany,
  deleteCompany,
  updateCompany,
} = companyController;

const router = new Router();

router.post("/company", addCompany);
router.get("/company", getAllCompany);
router.patch("/company/:id", updateCompany);
router.delete("/company/:id", deleteCompany);

export default router;
