import { deletarPresente } from "../../repository/presenteRepository.js";

export default async function deletarPresenteService(id) {
    let linhasAfetadas = await deletarPresente(id);

    if (linhasAfetadas == 0) 
        throw new Error('Nenhum presente foi removido.'); 
}