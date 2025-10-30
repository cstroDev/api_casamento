import { alterarPresente } from "../../repository/presenteRepository.js";
import { validarCamposObrigatoriosPresente } from "../../validation/presente/presenteValidation.js";

export default async function alterarPresenteService(presente, id) {  
    validarCamposObrigatoriosPresente(presente);
    
    let linhasAfetadas = await alterarPresente(presente, id);
    if (linhasAfetadas == 0) 
        throw new Error('Nenhum filme alterado.');
        
}