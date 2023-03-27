const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const express=require("express");
const app=express();
const path =require("path");
const hbs=require("express-handlebars");
const user_route = require("./routes/userRoute");
const admin_route = require("./routes/adminRoute");

// server connection

mongoose.connect("mongodb://127.0.0.1:27017/ikea")
app.listen(3000,()=>
{console.log('server running....')
});

// view engine setting

app.set('view engine', 'hbs');

app.engine("hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);

// public folder setting

app.use(express.static(path.join(__dirname,'public')));


// for user routes

const userRoute =require("./routes/userRoute")
app.use('/',user_route)


// for admin routes

const adminroute =require("./routes/adminRoute")
app.use('/',admin_route)