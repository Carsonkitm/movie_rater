// initiate express server
const express = require('express');
const app = express();

app.use(express.json());

// bring in mongo db
const db = require('./persist/mongo');

// bring in flags
const flags = require('flags');
flags.defineNumber("port", 3000, "Ports for the http server to listen to");
flags.parse();

// put in env vars
const dotenv = require('dotenv');
const Todo = require('.persist/schema');

// set up port number 
const port = flags.get('port') || process.env.PORT || 3000;


