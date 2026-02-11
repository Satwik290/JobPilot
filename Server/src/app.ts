import express from "express"; 
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./modules/auth/auth.routes";
import jobRoutes from './modules/jobs/job.routes';
import resumeRoutes from './modules/resume/resume.routes';

const app = express();

app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5000', 
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'server is running smoothly' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes); 
app.use('/api/resumes', resumeRoutes); 

export default app;