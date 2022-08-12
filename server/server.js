const express = require("express");
const path    = require("path");
const app     = express();
const routes  = require("./routes/api");
const methodOverride = require('method-override');
const { mongoConnect } = require("./services/mongo");
const cookieParser = require('cookie-parser');
const  session = require('express-session');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,".." ,"client", "views"));
app.use(express.static(path.join(__dirname, "..","client", "public")));

app.use(cookieParser());
app.use(session(
    {
        secret: "Shh, its a secret!",   
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }
));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* allows to submit form data using other restful route such as PATCH, DELETE */
app.use(methodOverride('_method'));



app.use(routes);

async function startServer(){
    await mongoConnect();
    app.listen(3000, (req, res) => {
        console.log("running at port 3000");
    });
}

startServer();