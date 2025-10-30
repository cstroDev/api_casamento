import { consultarPresenteNaoSelecionado } from "../../repository/presenteRepository.js";

export default async function consultarPresenteServiceNaoSelecionadoService() {
    let registros = await consultarPresenteNaoSelecionado();
    return registros;
}