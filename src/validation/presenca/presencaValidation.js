export function validarCamposObrigatoriosPresenca(presenca) {
    if (!presenca.nome)
        throw new Error("Nome do convidado obrigatório.");

    if (!presenca.presente == undefined || presenca.presente == null)
        throw new Error("Intenção de presente obrigatória.");

    
    if (presenca.presente == true && !presenca.id)
        throw new Error("Seleção do presente obrigatória, pois a intenção é 'Sim'.");
}