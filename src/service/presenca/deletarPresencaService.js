import { deletarPresenca } from "../../repository/presencaRepository.js";

export default async function deletarPresencaService(id) {
    let linhasAfetadas = await deletarPresenca(id);

    if (linhasAfetadas == 0) 
        throw new Error('Nenhum convidado foi removido.'); 
}