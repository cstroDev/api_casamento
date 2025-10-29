import salvarUsuarioService from '../service/usuario/salvarUsuarioService.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {
    try {
        let usuario = req.body;

        let id = await salvarUsuarioService(usuario);

        resp.send({
            id: id
        })

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

export default endpoints;