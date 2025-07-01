// // const express = require("express"); // old method style
// // const dotenv = require("dotenv");  // old method style
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import uploadRoute from "./Routes/upload.js";

// import developerRoute from "./routes/developer.route.js";
// import userRoute from "./routes/user.route.js";

// const app = express();
// app.use(cors());
// app.use(express.json()); // to parse into json format
// dotenv.config();

// // const uploadRoute = require('./Routes/upload.js');
// app.use('/api', uploadRoute);

// const PORT = process.env.PORT || 4000;//if the port present in .env file is not available then it run on port 4000
// const URI =process.env.MONGODBURI;

// try{
//     mongoose.connect(URI,
//         {
//             useNewUrlParser:true, // require for running in local device 
//             useUnifiedTopology: true // these 2 will not required in mongo atlas
//         });
//         console.log("Connected to mongodb");
// } catch(error){
//         console.log("Error",error);
// }
// // All Routes
// app.use("/developer",developerRoute);
// app.use("/user",userRoute);

// app.listen(PORT, ()=>{
//     console.log(`listening to port no ${PORT}`);
// });

const express = require('express');

// Import routes using CommonJS syntax
const indexRoute = require('./routes/Disc_Forum/index');
const questionRoute = require('./routes/Disc_Forum/Question');
const answerRoute = require('./routes/Disc_Forum/Answer');
const commentRoute = require('./routes/Disc_Forum/Comment');
const voteRoute = require('./routes/Disc_Forum/vote');
const authRoutes = require('./routes/Disc_Forum/authRoutes');
const tagsRoute = require('./routes/Disc_Forum/tags');


const developerRoute = require('./routes/Academics/developerRoute');


const usersRoute = require("./routes/Buy_Sell/usersRoute");
const productsRoute = require("./routes/Buy_Sell/productsRoutes");
const bidsRoute = require("./routes/Buy_Sell/bidsRoute");
const notificationsRoute = require("./routes/Buy_Sell/notificationsRoute");

// Import database connections
const { forumConn, academicsConn } = require('./config/connectDB');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Discussion Forum Routes
app.use('/api/v1/forum', indexRoute);
app.use('/api/v1/forum', questionRoute);
app.use('/api/v1/forum', answerRoute);
app.use('/api/v1/forum', commentRoute);
app.use('/api/v1/forum', voteRoute);
app.use('/api/v1/forum', authRoutes);
app.use('/api/v1/forum', tagsRoute);

// Academics Routes
app.use('/api/v1/academics', developerRoute);

// Buy/Sell Routes

app.use("/api/v1/buy-sell/users", usersRoute);
app.use("/api/v1/buy-sell/products", productsRoute);
app.use("/api/v1/buy-sell/bids", bidsRoute);
app.use("/api/v1/buy-sell/notifications", notificationsRoute);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
