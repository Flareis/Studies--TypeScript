interface IMailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachement?: string[] //Array<string> 
}

/*class emailService {
    sendMail (to: IMailTo, message: ImailMessage) {
        console.log(`Email enviado com sucesso para ${to.name}: ${message.subject}`);
    }
}*/

interface IMessageDTO {
    to: IMailTo;
    message: ImailMessage;
}

class emailService {
    sendMail ({to, message}: IMessageDTO) {
        console.log(`Email enviado com sucesso para ${to.name}: ${message.subject}`);
    }
}
export default emailService;