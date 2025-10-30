export function validarCamposObrigatoriosPresente(presente) {
    if (!presente.nome)
        throw new Error("Nome do presente obrigatório.");

    if (!presente.link)
        throw new Error("link do presente obrigatório.");

    if (!presente.selecionado == undefined)
        throw new Error("selecionamento do presente obrigatóriasdasdsao.");
    
    if (!presente.foto)
        throw new Error("Link da foto do presente obrigatório.");
    
}