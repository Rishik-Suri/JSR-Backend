import {createFuture,deleteFuture,getAllFuture} from "../controllers/FutureProject.controller.js";
import express from "express";

const router = express.Router();

router.route('/').post(createFuture);
router.route('/').get(getAllFuture);
router.route('/:id').delete(deleteFuture);



export default router;