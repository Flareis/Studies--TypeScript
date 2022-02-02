import { Request, Response } from "express";
import EmailService from "../service/emailService";

const users = [
    { name: 'Flávia', email: 'reis.dos.flavia@gmail.com' },
];

export default {
    async index(req : Request, res : Response) {
        return res.json(users);
    },

    async create (req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { name: 'Flávia', email: 'reis.dos.flavia@gmail.com'},
            message: { subject: "Bem vindo!", body: 'Seja bem vindo!'}
        });
        return res.send();

    }
};