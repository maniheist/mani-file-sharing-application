
import mongoose from 'mongoose';

const DBConnection=async ()=>{
    const MONODB_URI=`mongodb+srv://maniheist:Mani%40111@cluster0.bbtjanj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
        await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
        console.log('Database connected successfully');



    } catch (error){
        console.log('Error while connecting with the database',error.message)

    }
}

export default DBConnection;
