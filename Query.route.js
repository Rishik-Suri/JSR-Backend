import {createQuery,deleteQuery,getAllQueries} from "../controllers/QueryController.js";
import express from "express";

const router = express.Router();

router.route('/').post(createQuery);
router.route('/').get(getAllQueries);
router.route('/:id').delete(deleteQuery);



export default router;