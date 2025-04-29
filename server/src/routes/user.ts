import express from 'express';
import { submitContactForm } from '../controller/user'; 
import {getContactFormData} from '../controller/user';

const router = express.Router();

router.post('/contact', submitContactForm);
router.get('/contact1', getContactFormData);


export default router;
