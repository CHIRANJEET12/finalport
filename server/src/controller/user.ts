import { Request, Response } from 'express';
import {prisma} from '../server'; 

export const submitContactForm = async (req: Request, res: Response): Promise<any> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all the fields' });
  }

  try {
    const newContact = await prisma.user.create({
      data: {
        name,
        email,
        message,
      },
    });
    return res.status(200).json({ message: 'Contact form submitted successfully', newContact });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContactFormData = async (req: Request,res: Response): Promise<any> => {
    try{
        const contactData = await prisma.user.findMany();
        return res.status(200).json({message: 'Contact form data retrieved successfully', contactData});
    }catch(err){
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
