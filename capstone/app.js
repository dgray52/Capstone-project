const express=require('express');
const path = require('path');
const { DateTime } = require("luxon");
const methodOverride=require('method-override');
const morgan=require('morgan');
const SwapRoutes=require('./routers/swaprouter');
const MatchRoutes=require('./routers/matchrouter');
const { v4: uuidv4 } = require('uuid');


const app=express();

let port=3000;
let host='localhost';
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.get('/',(req,res) =>{
    res.render('index');    
});
app.use('/matches',MatchRoutes);
app.use('/swaps',SwapRoutes);
app.listen(port,host, () =>{
    console.log('this is a test');
});
