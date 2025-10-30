import { salvarPresente } from '../../repository/presenteRepository.js';
import { validarCamposObrigatoriosPresente } from '../../validation/presente/presenteValidation.js';


export default async function salvarPresenteService(presente) {
    validarCamposObrigatoriosPresente(presente);

    let id = await salvarPresente(presente);
    return id;
}