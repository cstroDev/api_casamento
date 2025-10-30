import { salvarPresenca } from '../../repository/presencaRepository.js';
import { validarCamposObrigatoriosPresenca } from '../../validation/presenca/presencaValidation.js';
import { selecionarPresente } from '../../repository/presenteRepository.js';

export default async function salvarPresencaService(presenca) {
    validarCamposObrigatoriosPresenca(presenca);

    if (presenca.presente == true && presenca.id) {
        await selecionarPresente(presenca.id);
    }

    let id = await salvarPresenca(presenca);
    return id;
}