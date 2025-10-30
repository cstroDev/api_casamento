import salvarPresencaService from '../service/presenca/salvarPresencaService.js';
import consultarPresencaService from '../service/presenca/consultarPresencaService.js';
import deletarPresencaService from '../service/presenca/deletarPresencaService.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/presenca', async (req, resp) => {
    try {

        let presenca = req.body;

        let idConvidado = await salvarPresencaService(presenca);

        resp.send({
            id: idConvidado
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.delete('/presenca/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarPresencaService(id);

        resp.status(204).send();
        
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.get('/presenca', async (req, resp) => {
    try {
        let registros = await consultarPresencaService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;