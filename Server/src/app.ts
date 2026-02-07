import   Express  from "express";
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


const app = Express();

app.use(helmet());
app.use(cors({
    origin: 'htttp://localhost:5173' , 
    credentials: true
}));
app.use(morgan('dev'));
app.use(Express.json());
app.use(cookieParser());

//checking the health 
app.get('/health', (req, res)=>{
    res.status(200).json({status : 'UP' , message: 'server is runing smoothly'});

});

export default app;