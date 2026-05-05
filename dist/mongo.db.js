import mongoose from 'mongoose';
export const resolveMongoUri = () => {
    const uri = process.env.MONGODB_URI?.trim();
    if (!uri) {
        throw new Error('MONGODB_URI is required');
    }
    return uri;
};
export const connectMongoDb = async () => {
    const mongoUri = resolveMongoUri();
    return mongoose.connect(mongoUri);
};
export const disconnectMongoDb = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.connection.close();
    }
};
