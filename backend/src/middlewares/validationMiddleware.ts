import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const issueSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid('open', 'closed').required(),
});

export const validateIssue = (req: Request, res: Response, next: NextFunction) => {
    const { error } = issueSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
