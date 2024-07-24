import {createReleasedProject ,getAllReleasedProject,getReleasedProjectById,deleteReleasedProject, updateReleasedProject} from "../controllers/releasedProject.controller.js";
import express from "express";

const router = express.Router();

router.route('/').post(createReleasedProject);
router.route('/').get(getAllReleasedProject);
router.route('/:id').get(getReleasedProjectById);
router.route('/:id').delete(deleteReleasedProject);
router.route('/:id').put(updateReleasedProject);



export default router;