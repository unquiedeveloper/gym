import express from 'express'
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import contactRoute from "./routes/contactRoute.js"
const app = express();
dotenv.config({path: "./config/config.env"})


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST","PUT","DELETE","GET"],
    credentials: true,
}))


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user", userRoute)
app.use("/api/v1/contact", contactRoute)


dbConnection();

app.use(errorMiddleware)
export default app;