import express from 'express';
const router = express.Router();
import controller from "./projects.controller.js";

router
  .route("/")
  .get(controller.list);

export default router;