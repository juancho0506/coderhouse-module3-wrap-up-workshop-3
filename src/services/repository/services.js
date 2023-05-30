import Students from "../db/dao/students.dao.js";

import StudentRepository from "./students.repository.js";

const studentDao = new Students();

export const studentService = new StudentRepository(studentDao);