import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const mongoURI = process.env.MONGODB_URI;

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let clientPromise: Promise<MongoClient> | null = null;

export const initMongoDB = async (): Promise<MongoClient> => {
  if (!clientPromise) {
    clientPromise = client.connect();
  }
  return clientPromise;
};