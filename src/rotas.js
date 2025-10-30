
import express from 'express';

import usuarioController from './controller/usuarioController.js';
import presenteController from './controller/presenteController.js';
import presencaController from './controller/presencaController.js';

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(presenteController);
    servidor.use(presencaController);
}