import mongoose from 'mongoose';

 const dbSetup = async () => {
    console.log('Connecting to MongoDB...');
    try {
        await mongoose.connect(process.env.MONGODB_URI || '');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return new Error('Error connecting to MongoDB');
    }
};

export default dbSetup;

