import express from 'express'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemaler-mail-adapter';
export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    try {
        const prismaFeedbacksRepository = new PrismaFeedbacksRepository(); 
        const nodeMailerMailAdapter = new NodeMailerMailAdapter();
        
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodeMailerMailAdapter
        );

        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        })

        return res.status(201).send()
    }catch (err) {
        console.error(err);

        return res.status(500).send();
    }   
})
