const triviaParameters = require("../assets/trivia-parameters")

module.exports = {
    get(req, res) {
        return res.json(triviaParameters);
    }
}