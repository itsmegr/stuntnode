import express, { Application } from "express";
import { getQ1, getQ2, getStudents, postCreate } from "../Controllers/Controller.student";
import RouteHandler from "../Controllers/RouteHandlerType";
const router = express.Router();

// sending it the controller
router.get('/', getStudents);
router.post('/create', postCreate);
router.get('/q1', getQ1);
router.get('/q2', getQ2);
export default router;
