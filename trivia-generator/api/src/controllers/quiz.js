var quizes = [];

module.exports = {
    get(req, res) {
        if (req.params.id < 0 && req.params.id - 1 < quizes.length) {
            return res.status(404).send('Not Found');
        }

        return res.json(quizes[req.params.id - 1]);
    },
    post(req, res) {
        console.log(JSON.stringify(req.body))
        quizes.push(req.body);
        return res.send({ quizId: quizes.length });
    }
}