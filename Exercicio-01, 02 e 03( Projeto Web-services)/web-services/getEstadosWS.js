const estadosJson = require('../mock-data/estados-mock-data.json')

exports.send = async (req, res) => {

    try {
        return res.json({
            http_status: 200,
            data: estadosJson
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: "Server Error"
        })
    }
}
