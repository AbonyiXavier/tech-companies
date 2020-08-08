import { Router } from "express";
import companyRoute from "./companyRoute";

const router = new Router();

router.use("/tech", companyRoute);

export default router;
