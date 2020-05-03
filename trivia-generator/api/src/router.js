module.exports = [
    {
        path: "/trivia",
        handler: require("./routes/trivia")
    },
    {
        path: "/quiz",
        handler: require("./routes/quiz")
    }
]