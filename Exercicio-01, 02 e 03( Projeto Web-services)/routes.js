'use strict'


module.exports = app => {
    const getEstadosWS = require('./web-services/getEstadosWS')
    const getPopulationWS = require('./web-services/getPopulationWS')
    const getPopulationAllStatesWS = require('./web-services/getPopulationAllStatesWS')

    app.route('/estados').get(getEstadosWS.send)
    app.route('/populacao/*').get(getPopulationWS.send)
    app.route('/estadosPopulacao').get(getPopulationAllStatesWS.send)

}