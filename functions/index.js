const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.ssr = functions.https.onRequest((_req, res) => res.send('hello from function'));

exports.test = functions.https.onRequest((_req, res) => {
    res.redirect("https://bodyweight-blitz.web.app/");
});