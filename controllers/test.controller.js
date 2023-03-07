const test = (req, res ) => {
    console.log('llego a test');
    res.json('Esto es un test');
}

const suma = (req, res) => {
    let total = req.body.val1 + req.body.val2
    res.json({'total': total});
}

module.exports = {
    test: test,
    suma: suma
}