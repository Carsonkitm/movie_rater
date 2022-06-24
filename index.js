// initiate express server
const express = require('express');
const app = express();

app.use(express.json());

// bring in mongo db
const db = require('./persist/mongo');

// bring in flags
const flags = require('flags');

