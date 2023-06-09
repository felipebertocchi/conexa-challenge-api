import mongoose from 'mongoose';

const dbURI = <string>process.env.MONGODB_URI;

function connect() {
    return new Promise<void>((resolve, reject) => {
        mongoose.connect(dbURI)
            .then(() => {
                console.log('[mongodb] database connected');
                resolve();
            })
            .catch((error) => {
                console.error('[mongodb] connection error:', error);
                reject();
            });
    })
}

function disconnect() {
    mongoose.disconnect();
}

export default { connect, disconnect }