const populacaoJson = require('../mock-data/populacao-mock-data.json')
const estadosJson = require('../mock-data/estados-mock-data.json')

exports.send = async (req, res) => {

    try {

        const values = await estadosJson.map(state => {
            let [population] = populacaoJson.filter(e => e.uf === state.uf)
            population = { nome: state.nome, ...population }
            return population
        })
        
        return res.json({
            http_status: 200,
            estados: values
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "Server Error"
        })
    }
}
