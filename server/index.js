const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());

//establish link to database
mongoose.connect("mongodb+srv://ColbyJackHammer:Hockey21@cluster0.goyims4.mongodb.net/ExoticDealership?retryWrites=true&w=majority"
).then(() => console.log("Connected to database!"))
.then(() =>{ app.listen(3001)
}).catch((err) => console.log(err));
