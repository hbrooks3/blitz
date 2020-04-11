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

let blank_workout = [
    {
        name: "push-ups",
        time: 0,
        reps: [],
        goal: {
            rep: {
                best: 0,
                last: 0,
            },
            time: {
                best: 0,
                last: 0,
            },
        },
    },
    {
        name: "squats",
        time: 0,
        reps: [],
        goal: {
            rep: {
                best: 0,
                last: 0,
            },
            time: {
                best: 0,
                last: 0,
            },
        },
    },
    {
        name: "sit-ups",
        time: 0,
        reps: [],
        goal: {
            rep: {
                best: 0,
                last: 0,
            },
            time: {
                best: 0,
                last: 0,
            },
        },
    },
]

exports.new = functions.https.onRequest((_req, res) => {
    res.json({workout: blank_workout}).send()
})