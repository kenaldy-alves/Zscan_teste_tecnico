const populacaoJson = require('../mock-data/populacao-mock-data.json')
const url = require('url');

exports.send = async (req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.path;

    try {
        const state = query.split('/')[2]

        if (state === null || state === undefined || state === '' || state.length !== 2) {
            return res.json({
                http_status: 200,
                message: 'O estado informado contém um valor inválido: Insira a sigla do estado.'
            })
        }

        const [values] = await populacaoJson.filter(e => e.uf == state.toUpperCase())


        return res.json({
            http_status: 200,
            data: values
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "Server Error"
        })
    }
}
