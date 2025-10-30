import { consultarPresenca } from "../../repository/presencaRepository.js";

export default async function consultarPresencaService() {
    let registros = await consultarPresenca();
    return registros;
}