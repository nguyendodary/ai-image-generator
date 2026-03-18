import mongoose from 'mongoose';

export default async function connectDB(url) {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch(console.error);
}
