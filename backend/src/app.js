import express from 'express';
import connectDB from './db/db.js';
const app = express();
import projectsRouter from "./projects/projects.router.js";

connectDB();

app.use('/', projectsRouter); 

export default app;