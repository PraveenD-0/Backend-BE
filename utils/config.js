require('dotenv').config();

const MONGODB_URI=`mongodb+srv://praveend4110:Praveend@praveen0cluster.rclfnyg.mongodb.net/`;
const PORT=process.env.PORT;

module.exports={
    MONGODB_URI,
    PORT
}