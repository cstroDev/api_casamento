import { consultarPresente } from "../../repository/presenteRepository.js";

export default async function consultarPresenteService() {
    let registros = await consultarPresente();
    return registros;
}