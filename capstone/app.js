const express=require('express');
const path = require('path');
const { DateTime } = require("luxon");
const methodOverride=require('method-override');
const morgan=require('morgan');
const SwapRoutes=require('./routers/swaprouter');
const MatchRoutes=require('./routers/matchrouter');
const UserRoutes = require('./routers/user');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');


//create app
const app=express();

//configure app
let port=3000;
let host='localhost';
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

const mongUri = 'mongodb+srv://admin:admin123@cluster0.utk9b.mongodb.net/demos?retryWrites=true&w=majority&appName=Cluster0';


//connect to MongoDB
mongoose.connect(mongUri)
.then(()=>{
    //start the server
    app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
});
})
.catch(err=>console.log(err.message));




app.get('/',(req,res) =>{
    res.render('index');    
});
app.use('/matches',MatchRoutes);
app.use('/swaps',SwapRoutes);
app.use('/', UserRoutes);

