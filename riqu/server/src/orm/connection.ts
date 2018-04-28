import * as Mongoose from "mongoose";

const MONGODB_CONNECTION: string = "mongodb://localhost:27017/riqu";

export function ConnectDatabase(): Mongoose.Connection {
    // connect to mongoose
    const promise: Mongoose.MongooseThenable = Mongoose.connect(MONGODB_CONNECTION, { useMongoClient: true });

    const db = Mongoose.connection;

    db.on('error', () => {
        console.error('Db failed to connect')
    })
    .once('open', () => {
        console.log('Connected to mongoose successfully.');
    });

    return db;
}