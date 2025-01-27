import { MongoClient, ServerApiVersion } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const mongoURI = process.env.MONGODB_URI
let clientPromise: Promise<MongoClient> | undefined

try {
    const client = new MongoClient(mongoURI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    })
    clientPromise = client.connect().catch(error => {
        console.error('MongoDB connection error:', error)
        throw error
    })

} catch (error) {
    console.error('MongoDB connection error:', error)
}

export default clientPromise