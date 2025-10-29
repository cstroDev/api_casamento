import { salvarUsuario } from '../../repository/usuarioRepository.js';

import { validarCamposObrigatoriosUsuario } from '../../validation/usuario/usuarioValidation.js';

export default async function salvarUsuarioService(usuario) {
    validarCamposObrigatoriosUsuario(usuario);

    let id = await salvarUsuario(usuario);
    return id;
}