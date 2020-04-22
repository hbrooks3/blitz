const functions = require('firebase-functions');

const blank_workout = {
    status: "Created",
    goal: {
        time: {
            best: 300,
            last: 300,
        },
    },
    exercises: [
		{
			name: "push-ups",
            sets: [],
            goal: {
                rep: {
                    best: 54,
                    last: 54,
                },
                time: {
                    best: 300,
                    last: 300,
                },
            },
        },
        {
			name: "squats",
            sets: [],
            goal: {
                rep: {
                    best: 100,
                    last: 100,
                },
                time: {
                    best: 300,
                    last: 300,
                },
            },
        },
        {
			name: "sit-ups",
            sets: [],
            goal: {
                rep: {
                    best: 100,
                    last: 100,
                },
                time: {
                    best: 300,
                    last: 300,
                },
            },
		},
	]
}

exports.new = functions.https.onRequest((_req, res) => {
    res.json(blank_workout).send()
})