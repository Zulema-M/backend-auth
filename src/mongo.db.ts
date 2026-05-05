import mongoose from 'mongoose'

export const resolveMongoUri = (): string => {
	const uri = process.env.MONGODB_URI?.trim()

	if (!uri) {
		throw new Error('MONGODB_URI is required')
	}

	return uri
}

export const connectMongoDb = async (): Promise<typeof mongoose> => {
	const mongoUri = resolveMongoUri()

	return mongoose.connect(mongoUri)
}

export const disconnectMongoDb = async (): Promise<void> => {
	if (mongoose.connection.readyState !== 0) {
		await mongoose.connection.close()
	}
}
