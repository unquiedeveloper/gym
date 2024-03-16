import express from"express";
import { login, logout, register } from "../controller/userController.js";
import {isAuthenticated} from "../middleware/auth.js"



const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.get("/logout", isAuthenticated, logout);

export default route 