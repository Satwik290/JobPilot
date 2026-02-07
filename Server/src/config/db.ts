import mongoose  from 'mongoose';
import { env } from './env';
import { log } from 'console';

export  const  connectDB = async() => {
    try {
        const connect = await mongoose.connect(env.MONGO_URI);
        console.log(`🚀 MongoDB Connected: ${connect.connection.host}` );
        
    } catch (error) {
       console.error(`❌ Error: ${error instanceof Error ? error.message : error}`);        
       process.exit(1);
    }
};