// server 
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import "dotenv/config"

import { app, server } from "./socket"
import { FRONT_URL } from "./utils/constanst";

const port = process.env.PORT || 3001

app.use(cookieParser());
app.use(cors({ credentials: true, origin: FRONT_URL }));
app.use(express.json())

app.use(express.urlencoded({ extended: true }));



server.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})