import mongoose from 'mongoose';

const connect = mongoose.connect(`mongodb://127.0.0.1:27017/mydb`, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('Database connected!');
}).catch(err=>{
    console.log(`Database not connected , ${err}`);
});

export default connect;