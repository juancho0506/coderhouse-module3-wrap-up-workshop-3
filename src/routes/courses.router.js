import { Router } from 'express';
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
import { getAll, save } from '../controllers/courses.controller.js'

const router = Router();

router.get('/', getAll);

router.post('/', save);


export default router;