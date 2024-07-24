import {createUpcoming,deleteUpcoming,getAllUpcoming} from "../controllers/UpcomingController.js";
import express from "express";

const router = express.Router();

router.route('/').post(createUpcoming);
router.route('/').get(getAllUpcoming);
router.route('/:id').delete(deleteUpcoming);



export default router;