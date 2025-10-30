import salvarPresenteService from '../service/presente/salvarPresenteService.js';
import consultarPresenteService from '../service/presente/consultarPresenteService.js';
import consultarPresenteNaoSelecionadoService from '../service/presente/consultarPresenteNaoSelecionadoService.js'
import alterarPresenteService from '../service/presente/alterarPresenteService.js'
import deletarPresenteService from '../service/presente/deletarPresenteService.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/presente', async (req, resp) => {
    try {

        let presente = req.body;

        let id = await salvarPresenteService(presente);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.delete('/presente/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarPresenteService(id);

        resp.status(204).send();
        
    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.put('/presente/:id', async (req, resp) => {
    try {
        let presente = req.body;
        let id = req.params.id;

        await alterarPresenteService(presente, id);

        resp.status(204).send()

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }

})

endpoints.get('/presente', async (req, resp) => {
    try {
        let registros = await consultarPresenteService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.get('/presente-nao-selecionado', async (req, resp) => {
    try {
        let registros = await consultarPresenteNaoSelecionadoService();

        resp.send(registros);

    } catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;