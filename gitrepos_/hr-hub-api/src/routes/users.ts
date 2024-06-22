import express from 'express';
import  defaultExport from '../controllers/users_controller';


const router = express.Router();

router.get('/user', defaultExport.getUser); //Expects username, password STRINGS in header request. returns all user data
router.post('/user', defaultExport.postUser);//Expects username, password, role, bio, email, phone, full_name.




export default router;