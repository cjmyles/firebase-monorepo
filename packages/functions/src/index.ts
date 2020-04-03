import express from 'express';
import * as functions from 'firebase-functions';
import { foo } from 'firebase-monorepo-core';

// ********************************************
// Express Initilization
// ********************************************

const app = express();

// ********************************************
// Routing Controllers Initilization
// ********************************************

// https://github.com/typestack/routing-controllers

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        foo
    })
})

// ********************************************
// Firebase Functions
// ********************************************

exports.app = functions.https.onRequest(app);
