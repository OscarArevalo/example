const axios = require('axios');

const test = (req, res ) => {
    res.json('Esto es un test');
}

const suma = (req, res) => {
    let total = req.body.val1 + req.body.val2
    res.json({'total': total});
}

const getUser = (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((axResp) => {
        res.status(200).json(axResp.data);
    });
}

module.exports = {
    test: test,
    suma: suma,
    getUser: getUser
}