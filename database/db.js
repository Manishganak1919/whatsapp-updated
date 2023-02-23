import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-imcsory-shard-00-00.k7s569v.mongodb.net:27017,ac-imcsory-shard-00-01.k7s569v.mongodb.net:27017,ac-imcsory-shard-00-02.k7s569v.mongodb.net:27017/?ssl=true&replicaSet=atlas-g4rns4-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
      await mongoose.connect(URL, { useUnifiedTopology: true });
      console.log('Database Connected Succesfully');
  } catch(error) {
      console.log('Error: ', error.message);
  }

};
export default Connection;