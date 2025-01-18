import { signin, signup, signout } from "../controller/user";
import { Router } from "express";


const userRouter = Router();





userRouter.post('/signin', signin);
userRouter.post('/signup', signup);
userRouter.post('/signout', signout); 