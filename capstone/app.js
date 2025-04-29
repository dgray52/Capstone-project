const express=require('express');
const path = require('path');
const { DateTime } = require("luxon");
const methodOverride=require('method-override');
const morgan=require('morgan');
const SwapRoutes=require('./routers/swaprouter');
const MatchRoutes=require('./routers/matchrouter');
const OfferRoutes = require('./routers/OfferRoutes');
const UserRoutes = require('./routers/user');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');




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

const mongUri = 'mongodb+srv://admin:admin123@cluster0.utk9b.mongodb.net/capstone?retryWrites=true&w=majority&appName=Cluster0';


//connect to MongoDB
mongoose.connect(mongUri)
.then(()=>{
    //start the server
    app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
});
})
.catch(err=>console.log(err.message));

app.use(session({
    secret: 'aijscbnabkjabsdkj',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60*60*1000}, 
    store: new MongoStore({mongoUrl: mongUri})
}));

app.use(flash());

app.use((req, res, next)=>{
    if(!req.session.counter){
        req.session.counter = 1;
    }else{
        req.session.counter++;
    }
    res.locals.user = req.session.user || null;
    res.locals.successMessages = req.flash('success');
    res.locals.errorMessages = req.flash('error');
    res.locals.lastitemseen= null;
    //console.log(req.session);
    next();
});

app.get('/',(req,res) =>{
    res.render('index');    
});
app.use('/offers', OfferRoutes);
app.use('/matches',MatchRoutes);
app.use('/swaps',SwapRoutes);
app.use('/', UserRoutes);


