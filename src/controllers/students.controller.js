import {studentService} from '../services/repository/services.js';
import MailingService from '../services/email/mailing.js';

const mailer = new MailingService();

export const getAll = async(req,res)=>{
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los estudiantes."});
    }
    
};

export const createStudent = async(req,res)=>{
    try {
        const result = await studentService.createStudent(req.body);
        const emailResult = await mailer.sendSimpleMail({
            from:'CoderTests',
            to: req.body.email,
            subject:"Te has registrado con éxito!",
            html:`<div><h1>¡Felicidades!</h1>
            <p> Bienvenido! Esperamos que lo pases muy bien y aprendas mucho</p>
            </div>`
        })
        console.log(result);
        console.log(emailResult);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar el estudiante."});
    }
};